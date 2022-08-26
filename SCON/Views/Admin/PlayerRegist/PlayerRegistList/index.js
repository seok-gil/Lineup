import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../../Components/API/ApiFetch'
import {SafeAreaView, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {PlayerRegistListOne} from './PlayerRegistListOne'
import styles from './PlayerRegistList.styles'

//route.params.state 대기 0 승인 1 반려 2
export function PlayerRegistList({navigation, route}) {
  const [data, setData] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/admin/player-regist/${route.params.state}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        setData(thing.content)
      })
    })
  }, [])

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.playerRegistListWrapper}>
      <ScrollView>
        {data.map((item, index) => (
          <PlayerRegistListOne
            data={item}
            key={`playerRegistListOne-${index}`}
            navigation={navigation}
            state={route.params.state}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
