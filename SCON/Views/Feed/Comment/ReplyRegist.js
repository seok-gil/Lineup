import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import {DefaultProfileImage} from '../../../Assets/Images'
import AsyncStorage from '@react-native-community/async-storage'

export function ReplyRegist({replyFocus, setReplyFocus, feedId}) {
  if (replyFocus == null) {
    console.log('null', replyFocus)
    return <View />
  }
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
          url: `/comment/${feedId}/${replyFocus}`,
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + thing,
          },
          body: JSON.stringify({
            content: comment,
          }),
        })
      })
      .then(setComment(''))
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={DefaultProfileImage} />
      <TextInput
        value={comment}
        placeholder={'답글 쓰기'}
        placeholderTextColor="#C9C9C9"
        onChange={e => onInput(e)}
      />
      <TouchableOpacity onPress={onPress}>
        <Text>게시</Text>
      </TouchableOpacity>
    </View>
  )
}
