import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View, TouchableOpacity, SafeAreaView, Text, Image} from 'react-native'
import {FeedApi} from './FeedApi'
import {CommentList} from './Comment'
import {FeedBody} from './FeedBody'

import styles from './Feed.styles'

export function FeedScreen({route, navigation}) {
  const [data, setData] = useState()
  const [mount, setMount] = useState(new Date())

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/feed/${route.params.feedId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        setData(thing)
      })
    })
  }, [mount])

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.feedWrapper}>
      <FeedBody
        data={data}
        feedId={route.params.feedId}
        navigation={navigation}
        setMount={setMount}
      />
      <CommentList feedId={route.params.feedId} navigation={navigation} />
    </SafeAreaView>
  )
}
