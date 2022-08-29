import React, {useState} from 'react'
import {View, Alert, TouchableOpacity, Platform,PermissionsAndroid} from 'react-native'
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
      flag = false
      Alert.alert(
        text,
        '',
        [
          {
            text: '앨범에서 선택',
            onPress: async () => {
              var result = await launchImageLibrary()
              .then(res => {
                flag = true
              })
              .catch(err => {
                console.log("eer", err)
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
              requestPermission()
              var result
              await launchCamera({
                mediaType: 'photo',
                maxWidth : 640,
                maxHeight : 960,
                cameraType: 'back',
                mediaType: 'photo',
                selectionLimit : 0,
                saveToPhotos:false,  //to store captured photo via camera to photos or else it will be stored in temp folders and will get deleted on temp clear
                includeBase64:false,
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
