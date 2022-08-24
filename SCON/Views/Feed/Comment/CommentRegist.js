import React, {useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {DefaultProfileImage} from '../../../Assets/svgs'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './CommentRegist.styles'

export function CommentRegist({feedId, setMount}) {
  const [comment, setComment] = useState('')

  const onInput = e => {
    const {text} = e.nativeEvent
    setComment(text)
  }

  const onPress = () => {
    AsyncStorage.getItem('accessToken')
      .then(thing => {
        ApiFetch({
          method: 'POST',
          url: `/comment/${feedId}`,
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + thing,
          },
          body: JSON.stringify({
            content: comment,
          }),
        })
      })
      .then(() => {
        setComment('')
        setMount(new Date())
      })
  }

  return (
    <View style={styles.commentRegistWrapper}>
      <View contentContainerStyle={styles.keyboardWrapper}>
        <TextInput
          value={comment}
          placeholder={'댓글 쓰기'}
          placeholderTextColor="#C9C9C9"
          onChange={e => onInput(e)}
        />
        <TouchableOpacity onPress={onPress}>
          <Text>게시</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
