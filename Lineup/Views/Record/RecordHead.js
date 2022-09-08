import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { MedalIcon } from '../../Assets/svgs'
import { ApiFetch } from '../../Components/API/ApiFetch'

import styles from './RecordHead.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

function RecordHead({ playerId }) {
  const [data, setData] = useState()
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/medal/${playerId}`,
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
    <View style={styles.recordHeadWrapper}>
      <Text style={styles.recordHeadTitle}>선수 전적</Text>
      <View style={styles.recordHeadMedals}>
        <MedalIcon
          width={20}
          height={20}
          fill="#FFA800"
          style={styles.medalImage}
        />
        <Text style={styles.medalNum}>{data ? data.gold : '0'}</Text>
        <MedalIcon
          width={20}
          height={20}
          style={styles.medalImage}
          fill="#A0A0A0"
        />
        <Text style={styles.medalNum}>{data ? data.silver : '0'}</Text>
        <MedalIcon
          width={20}
          height={20}
          style={styles.medalImage}
          fill="#AF4A00"
        />
        <Text style={styles.medalNum}>{data ? data.bronze : '0'}</Text>
      </View>
    </View>
  )
}

export default RecordHead
