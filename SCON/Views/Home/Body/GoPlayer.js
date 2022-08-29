import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {ApiFetch} from "../../../Components"
import styles from './GoPlayer.styles'
import {AlertIcon} from '../Assets'
import {XIcon} from '../../../Assets/svgs'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function GoPlayer({setgoPlayer, navigation}) {
  const onClick = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
        ApiFetch({
            method: 'PUT',
            url: '/player-regist-reject',
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
          setgoPlayer(false)
        })
    })
  }
  return (
    <View style={styles.goPlayerWrapper}>
      <TouchableOpacity
        style={[styles.touchable, styles.touchableLeft]}
        onPress={() => navigation.navigate('PlayerRegist')}>
        <AlertIcon width={15} height={15} style={styles.alertImage} />
        <Text style={styles.alertText}>선수로 등록하시겠어요?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchable, styles.touchableRight]}
        onPress={() => onClick()}>
        <XIcon width={13} height={13} />
      </TouchableOpacity>
    </View>
  )
}
