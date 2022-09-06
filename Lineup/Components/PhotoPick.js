import React, {useState} from 'react'
import {View, Alert, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {CameraIcon} from '../Assets/svgs'

const DEFAULT_STYLE = {
  photoPickWrapper: {},
  photoPickImage: {},
  photoPickTouchable: {},
}
/*
default profile uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/profile/default_profilePic.jpg',
default back uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/back/default_backPic.jpg',
*/
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
    const maxHeight = text == '배경 이미지 설정' ? 800 : 500
    const maxWidth = text == '배경 이미지 설정' ? 800 : 500
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
              await launchImageLibrary({
                quality: 0.7,
                maxWidth: maxWidth,
                maxHeight: maxHeight
              })
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
                saveToPhotos:true,
                quality: 0.7,
                maxWidth: maxWidth,
                maxHeight: maxHeight,
                presentationStyle:'fullScreen'
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
            text : '기본 사진으로 전환',
            onPress: () => {
              text
            setPhoto({
              asset: null,
              set: true,
              uri: text == '프로필 이미지 설정' ? 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/profile/default_profilePic.jpg' : 
              'https://profile-scon.s3.ap-northeast-2.amazonaws.com/back/default_backPic.jpg',
            })
          }
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
