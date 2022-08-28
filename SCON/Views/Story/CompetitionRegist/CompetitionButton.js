import React, { useEffect, useState } from 'react'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import { TouchableOpacity, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './CompetitionButton.styles'

function CompetitionButton({ data, navigation }) {
  const onPress = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'POST',
        url: '/player/event',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: JSON.stringify(data),
      })
        .then((thing) => {
          if (thing == 401) {
            navigation.navigate('RefreshTokenModal', { navigation: navigation })
          }
          if (thing.status != 400)
            navigation.navigate('StoryScreen')
          else
            navigation.navigate('ModalPage', {
              text: '빈칸을 모두 채워주세요'
            })
        })
        .catch(error => {
          console.log('Login ERROR', error)
        })
    })
    // navigation.navigate('StoryScreen')
  }
  const buttonStyle =
    data.endDate && data.location && data.eventName
      ? styles.filledButton
      : styles.notfillButton

  const buttonTextStyle =
    data.endDate && data.location && data.eventName
      ? styles.filledText
      : styles.notfillText
  return (
    <TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
      <Text style={buttonTextStyle}>확인</Text>
    </TouchableOpacity>
  )
}
export default CompetitionButton
