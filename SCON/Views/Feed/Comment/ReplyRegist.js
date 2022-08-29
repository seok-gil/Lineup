import React, { useState } from 'react'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { XIcon } from '../../../Assets/svgs'
import styles from './ReplyRegist.styles'

export function ReplyRegist({ replyFocus, setReplyFocus, feedId, setMount, navigation }) {
  let type = replyFocus ? `@${replyFocus.nick} 답글 쓰기` : '댓글 쓰기'
  const [comment, setComment] = useState('')
  const onInput = e => {
    const { text } = e.nativeEvent
    setComment(text)
  }

  const onPress = () => {
    if (!comment)
      return
    if (replyFocus)
      AsyncStorage.getItem('accessToken')
        .then(thing => {
          if (replyFocus)
            ApiFetch({
              method: 'POST',
              url: `/comment/${feedId}/${replyFocus.id}`,
              headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + thing,
              },
              body: JSON.stringify({
                content: comment,
              }),
            }).then(thing => {
              console.log("feed", thing)
              if (thing == 401) {
                navigation.navigate('RefreshTokenModal', { navigation: navigation })
              }
              else {
              setComment('')
              setReplyFocus(null)
              setMount(new Date())
              }
            })
        })
    else {
      AsyncStorage.getItem('accessToken')
        .then(thing => {
          ApiFetch({
            navigation: navigation,
            method: 'POST',
            url: `/comment/${feedId}`,
            headers: {
              'content-type': 'application/json',
              Authorization: 'Bearer ' + thing,
            },
            body: JSON.stringify({
              content: comment,
            }),
          }).then(thing => {
          console.log("tt")
            if (thing == 401) {
              navigation.navigate('RefreshTokenModal', { navigation: navigation })
            }
            else {
            setComment('')
            setMount(new Date())
            }
          })
        })
    }
  }

  return (
    <View style={styles.replyRegistWrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          value={comment}
          placeholder={type}
          placeholderTextColor="#C9C9C9"
          onChange={e => onInput(e)}
          style={styles.replyInputWrapper}
        />
        <TouchableOpacity onPress={onPress} style={styles.replySubmit}>
          <Text style={styles.replySubmitText}>게시</Text>
        </TouchableOpacity>
        {replyFocus && (
          <TouchableOpacity
            onPress={() => setReplyFocus(null)}
            style={styles.replyClose}>
            <XIcon width={15} height={15} fill="#0E0E0E" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
