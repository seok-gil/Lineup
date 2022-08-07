import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {SafeAreaView, ScrollView, Text} from 'react-native'

import {AdminOne} from './AdminNotiOne'
import styles from './AdminNotiListScreen.styles'
import AsyncStorage from '@react-native-community/async-storage'

export function AdminNotiListScreen({navigation}) {
  const [data, setData] = useState([])
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/admin/notice`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        setData(thing)
      })
    })
  }, [])

  return (
    <SafeAreaView style={styles.notiScreenWrapper}>
      <ScrollView>
        {data.map((item, index) => {
          return <AdminOne key={index} data={item} navigation={navigation} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}
