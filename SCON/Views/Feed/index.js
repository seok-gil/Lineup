import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView} from 'react-native'
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
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal')
        }
        else {
          setData(thing)
        }
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
      <CommentList feedId={route.params.feedId} navigation={navigation} mount={mount} setMount={setMount}/>
    </SafeAreaView>
  )
}
