import React, {useState, useEffect} from 'react'
import {ScrollView, Text, View} from 'react-native'
import InquiryListElement from './InquiryListElement'
import {ApiFetch} from '../../../Components/'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './InquiryListScreen.styles'
import {DeniedIcon} from '../../../Assets/svgs'

export function InquiryListScreen() {
  const [data, setData] = useState([])
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/inquiry',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else
        setData(thing)
      })
    })
  }, [])

  if (!data || data.length === 0)
    return (
      <View style={styles.noInquiryList}>
        <DeniedIcon width={80} height={80} fill="#0E0E0E" />
        <Text style={styles.text}>문의 내역이 없습니다.</Text>
      </View>
    )

  return (
    <ScrollView style={styles.inquiryScreenWrapper}>
      {data.map((item, index) => {
        return <InquiryListElement key={index} data={item} />
      })}
    </ScrollView>
  )
}
