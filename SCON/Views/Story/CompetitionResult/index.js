import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import CompetitionElement from './CompetitionElement'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import styles from './CompetitionResult.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function CompetitionResult({ navigation }) {
  const [data, setData] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/player/event/record',
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

  return (
    <SafeAreaView style={styles.competitionResultWrapper}>
      <ScrollView>
      {data &&
        data.map((item, index) => {
          return (
            <CompetitionElement
              data={item}
              key={index}
              navigation={navigation}
            />
          )
        })}
        </ScrollView>
    </SafeAreaView>
  )
}
