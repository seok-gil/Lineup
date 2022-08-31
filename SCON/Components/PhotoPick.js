import React, {useState} from 'react'
import {View, Alert, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native'
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
  async function requestPermission() {
    if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]).then((result)=>{
            if (result['android.permission.CAMERA']
            && result['android.permission.WRITE_EXTERNAL_STORAGE']
            && result['android.permission.READ_EXTERNAL_STORAGE']
            === 'granted') {
                console.log("모든 권한 획득");
            } else{
                console.log("권한거절");
            }
        })
      
    }
  }
  const onClick = () => {
    if (flag) {
      requestPermission()
      flag = false
      Alert.alert(
        text,
        '',
        [
          {
            text: '앨범에서 선택',
            onPress: async () => {
              var result
              await launchImageLibrary()
              .then(res => {
                result = res
                flag = true
                if (result.didCancel) {
                  return null
                }
                setPhoto({
                  ...photo,
                  asset: result.assets[0],
                  set: true,
                  uri: result.assets[0].uri,
                })
              })
              .catch(err => {
                console.log("eer", err)
              })
            },
          },
          {
            text: '카메라로 찍기',
            onPress: async () => {
              var result
              await launchCamera({
                saveToPhotos:true
              }).then(res => {
                result = res
                flag = true
                if (result.didCancel) {
                  return null
                }
                setPhoto({
                  asset: result.assets[0],
                  set: true,
                  uri: result.assets[0].uri,
                })
              })
              .catch(err => console.log(err))
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
