import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'

import {AdminMypageTab} from './AdminMypageTab'
import {AdminProfile} from './AdminProfile'

import styles from './AdminMypage.styles'
import AsyncStorage from '@react-native-community/async-storage'
export function AdminMypage({navigation}) {
  const [data, setData] = useState([])
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/admin`,
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
    <SafeAreaView style={styles.adminMypageWrapper}>
      <AdminProfile data={data} navigation={navigation} />
      <AdminMypageTab navigation={navigation} />
    </SafeAreaView>
  )
}
