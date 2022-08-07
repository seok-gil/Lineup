import React, {useState, useEffect} from 'react'
import {ScrollView} from 'react-native'
import InquiryListElement from './InquiryListElement'
import {ApiFetch} from '../../../Components/'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './InquiryListScreen.styles'

export function InquiryListScreen() {
  const [data, setData] = useState([])
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/inquiry`,
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
    <ScrollView style={styles.inquiryScreenWrapper}>
      {data.map((item, index) => {
        return <InquiryListElement key={index} data={item} />
      })}
    </ScrollView>
  )
}
