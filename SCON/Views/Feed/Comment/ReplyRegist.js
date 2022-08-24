import React, {useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {XIcon} from '../../../Assets/svgs'
import styles from './ReplyRegist.styles'

export function ReplyRegist({replyFocus, setReplyFocus, feedId, setMount}) {
  if (replyFocus == null) {
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
      .then(() => {
        setComment('')
        setReplyFocus(null)
        setMount(new Date())
      })
  }

  return (
    <View style={styles.replyRegistWrapper}>
      <KeyboardAwareScrollView contentContainerStyle={styles.replyRegistInner}>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={comment}
            placeholder={'답글 쓰기'}
            placeholderTextColor="#C9C9C9"
            onChange={e => onInput(e)}
            style={styles.replyInputWrapper}
          />
          <TouchableOpacity onPress={onPress} style={styles.replySubmit}>
            <Text style={styles.replySubmitText}>게시</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('close')}
            style={styles.replyClose}>
            <XIcon width={15} height={15} fill="#0E0E0E" />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}
