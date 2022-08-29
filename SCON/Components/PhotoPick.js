import React from 'react'
import {View, Alert, TouchableOpacity} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {CameraIcon} from '../Assets/svgs'

const DEFAULT_STYLE = {
  photoPickWrapper: {},
  photoPickImage: {},
  photoPickTouchable: {},
}

export function PhotoPick({
  text,
  photo,
  setPhoto,
  setMount,
  styles = DEFAULT_STYLE,
}) {
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
          {
            text : '취소',
            onPress: () => console.log('cancel')
          }
        ],
        {cancelable: false},
      )
    }
    setMount('certificate')
  }
  return (
    <View style={styles.photoPickWrapper}>
      <TouchableOpacity onPress={onClick} style={styles.photoPickTouchable}>
        <CameraIcon
          width={35}
          height={35}
          fill="#17D3F0"
          style={styles.photoPickImage}
        />
      </TouchableOpacity>
    </View>
  )
}
