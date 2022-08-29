import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {View, FlatList, KeyboardAvoidingView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {CommentOne} from './CommentOne'
import {ReplyRegist} from './ReplyRegist'

import styles from './CommentList.styles'

export function CommentList({feedId, navigation}) {
  const [data, setData] = useState([])
  const [size, setSize] = useState(5)
  const [mount, setMount] = useState()
  const [replyFocus, setReplyFocus] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/feed/${feedId}/comments?page=${0}&size=${size}`,
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
          setData(thing.content)
      })
    })
  }, [size, mount])
  const onEndReached = e => {
    setSize(size + 5)
  }
  return (
    <>
      <View style={styles.commentListWrapper}>
        <FlatList
          data={data}
          snapToAlignment="start"
          decelerationRate="fast"
          renderItem={({item, index}) => (
            <CommentOne
              key={`player-comment-${index}`}
              data={item}
              navigation={navigation}
              feedId={feedId}
              setReplyFocus={setReplyFocus}
              setMount={setMount}
            />
          )}
          onEndReached={e => onEndReached(e)}
          onEndReachedThreshold={1}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={90}>
        <ReplyRegist
          feedId={feedId}
          replyFocus={replyFocus}
          setReplyFocus={setReplyFocus}
          setMount={setMount}
          navigation={navigation}
        />
      </KeyboardAvoidingView>
    </>
  )
}
