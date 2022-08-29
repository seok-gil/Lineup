import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {Followlist} from './Followlist'
import {Head} from './Head'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './FollowPage.styles'

export function FollowPage({navigation, route}) {
  const [data, setData] = useState()
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/user-home/${route.params.userId}`,
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

  if (!data) return <SafeAreaView style={styles.followPageWrapper} />
  return (
    <SafeAreaView style={styles.followPageWrapper}>
      <Head data={data} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>좋아하는 운동선수</Text>
      </View>
      {data.followList.map((follow, index) => {
        return <Followlist key={`follow-pages${index}`} data={follow} />
      })}
    </SafeAreaView>
  )
}
