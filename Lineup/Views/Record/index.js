import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { ApiFetch } from '../../Components/API/ApiFetch'

import RecordHead from './RecordHead'
import PlayerCard from './PlayerCard'

import styles from './RecordScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function RecordScreen({ route }) {
  const [data, setData] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/player-home/${route.params.playerId}/records`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else setData(thing)
      })
    })
  }, [])

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.recordScreenWrapper}>
      <ScrollView>
        <RecordHead data={data} />
        <View>
          {data.map(record => (
            <PlayerCard
              key={`player-card-${record.recordId}`}
              record={record}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}