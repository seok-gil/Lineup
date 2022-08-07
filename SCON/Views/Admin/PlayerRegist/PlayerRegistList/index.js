import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../../Components/API/ApiFetch'
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {PlayerRegistListOne} from './PlayerRegistListOne'

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
        console.log('thing', thing)
        setData(thing)
      })
    })
  }, [])

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView>
      {data.map((item, index) => (
        <PlayerRegistListOne
          data={item}
          key={`playerRegistListOne-${index}`}
          navigation={navigation}
        />
      ))}
    </SafeAreaView>
  )
}
