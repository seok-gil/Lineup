import React from 'react'
import {View, Alert, TouchableOpacity, Text} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import styles from './PlayerPhotoPick.styles'

export function PlayerPhotoPick({text, photo, setPhoto, setMount}) {
  var flag = true
  const onClick = () => {
    if (flag) {
      flag = false
      Alert.alert(
        text,
        '',
        [
          {
            text: '앨범에서 선택',
            onPress: async () => {
              var result
              await launchImageLibrary().then(res => {
                result = res
                flag = true
              })
              if (result.didCancel) {
                return null
              }
              setPhoto({
                ...photo,
                asset: result.assets[0],
                set: true,
                uri: result.assets[0].uri,
              })
            },
          },
          {
            text: '카메라로 찍기',
            onPress: async () => {
              var result
              await launchCamera({
                mediaType: 'photo',
                cameraType: 'back',
              }).then(res => {
                result = res
                flag = true
              })
              if (result.didCancel) {
                return null
              }
              setPhoto({
                asset: result.assets[0],
                set: true,
                uri: result.assets[0].uri,
              })
            },
          },
        ],
        {cancelable: false},
      )
      setMount('certificate')
    }
  }
  return (
    <View style={styles.photoPickWrapper}>
      <TouchableOpacity onPress={onClick} style={styles.photoPickTouchable}>
        <Text style={styles.photoPickText}>선수 등록 캡쳐화면 업로드</Text>
      </TouchableOpacity>
    </View>
  )
}
