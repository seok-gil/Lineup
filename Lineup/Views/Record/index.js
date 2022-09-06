import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, FlatList, View } from 'react-native'
import { ApiFetch } from '../../Components/API/ApiFetch'

import RecordHead from './RecordHead'
import PlayerCard from './PlayerCard'

import styles from './RecordScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function RecordScreen({ route }) {
  const [data, setData] = useState([])
  const [lastId, setLastId] = useState(100000)
  const [size, setSize] = useState(10)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/player-home/${route.params.playerId}/records?size=${size}&lastId=${lastId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else setData(thing.content)
      })
    })
  }, [size])
  const onEndReached = (e) => {
    setSize(size + 3)
  }

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.recordScreenWrapper}>
      <ScrollView>
        <RecordHead data={data} />
        <FlatList
          data={data}
          snapToAlignment="start"
          decelerationRate="fast"
          renderItem={({ item, index }) => (
            <PlayerCard
              key={`record-card-${index}`}
              record={item}
            />
          )}
          onEndReached={(e) => onEndReached(e)}
          onEndReachedThreshold={0.9}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
