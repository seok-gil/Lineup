import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { InquiryOne } from './InquiryOne'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../../Components'

import styles from './Inquiry.styles'

export function Inquiry({ navigation }) {
  const [data, setData] = useState([])
  var temp = data
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/admin/inquiry',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else
          setData(thing)
      })
    })
  }, [])

  return (
    <SafeAreaView style={styles.inquiryWrapper}>
      <ScrollView>
        {data.map((item, index) => {
          return <InquiryOne data={item} key={`inquiry-${index}`} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}
