import React from 'react'
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native'

import styles from './GoPlayer.styles'
// import {AlertIcon, XIcon} from '../../../Assets/Icons'
import {AlertIcon} from '../Assets'
import {XIcon} from '../../../Assets/svgs'

export function GoPlayer({setgoPlayer, navigation}) {
  const onClick = () => {
    setgoPlayer(false)
  }

  return (
    <View style={styles.goPlayerWrapper}>
      <TouchableOpacity
        style={[styles.touchable, styles.touchableLeft]}
        onPress={() => navigation.navigate('PlayerRegist')}>
        <AlertIcon style={styles.alertImage} />
        <Text style={styles.alertText}>선수로 등록하시겠어요?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchable, styles.touchableRight]}
        onPress={() => onClick()}>
        <XIcon />
      </TouchableOpacity>
    </View>
  )
}
