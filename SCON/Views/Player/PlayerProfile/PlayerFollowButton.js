import React, {useEffect, useState} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {ApiFetch} from '../../../Components'
import styles from './PlayerFollowButton.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

function PlayerFollowButton({data, navigation, setMount = {setMount}}) {
  const [follow, setFollow] = useState(data.isFollow)

  const buttonStyle =
    data.isMe || data.isFollow ? styles.followedButton : styles.followButton
  const buttonTextStyle =
    data.isMe || data.isFollow ? styles.followedText : styles.followText

  useEffect(() => {
    AsyncStorage.getItem('role').then(res => {})
  }, [])

  const buttonText = () => {
    if (data.isMe) return '스토리 추가하기'
    else if (data.isFollow) return '나의 라인업 추가됨'
    else return '나의 라인업 추가하기'
  }

  const followApi = (method, url) => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: method,
        url: url,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(() => {
        setMount(true)
      })
    })
  }
  const onClick = () => {
    if (data.isMe) {
      navigation.navigate('StoryScreen')
    } else if (data.isFollow) {
      followApi('DELETE', `/follow/${data.playerId}/${data.isFollow}`)
    } else {
      followApi('POST', `/follow/${data.playerId}`)
    }
  }

  return (
    <TouchableOpacity onPress={() => onClick()} style={buttonStyle}>
      <Text style={buttonTextStyle}>{buttonText()}</Text>
    </TouchableOpacity>
  )
}

export default PlayerFollowButton
