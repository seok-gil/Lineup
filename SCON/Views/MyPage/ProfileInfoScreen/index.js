import React, {useEffect, useState} from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import ProfileInfoScreenElement from './ProfileInfoScreenElement'
import styles from './ProfileInfoScreen.styles'
import {ApiFetch, PhotoPick} from '../../../Components'
import {
  backgroundPhotoPickStyles,
  profilePhotoPickStyles,
} from './MypagePhotoPick.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ImagePush} from './ImagePush'
import {useIsFocused} from '@react-navigation/native'

export function ProfileInfoScreen({navigation}) {
  const [mount, setMount] = useState()
  const isFocused = useIsFocused()
  const [data, setData] = useState()
  const [role, setRole] = useState('ROLE_MEMBER')
  const [body, setBody] = useState({})
  const [userPhoto, setUserPhoto] = useState({
    asset: '',
    set: false,
    uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/profile/default_profilePic.jpg',
  })
  const [backPhoto, setBackPhoto] = useState({
    asset: '',
    set: false,
    uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/back/default_backPic.jpg',
  })

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/my-page/user-profile',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        setData(thing)
        setUserPhoto({
          ...userPhoto,
          ['uri']: thing.profilePic,
        })
        setBackPhoto({
          ...backPhoto,
          ['uri']: thing.profileBack,
        })
      })
    })
    AsyncStorage.getItem('role').then(role => {
      setRole(role)
    })
  }, [isFocused])

  const onImagePush = async () => {
    if (userPhoto.set) {
      ImagePush(userPhoto, setUserPhoto, 'profile', '/my-page/user-profile-pic')
    }
    if (backPhoto.set) {
      ImagePush(backPhoto, setBackPhoto, 'back', '/my-page/user-back-pic')
    }
    navigation.goBack()
  }

  if (!data) return <View />
  return (
    <SafeAreaView>
      <ScrollView style={styles.profileScreenWrapper}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileBackground}>
            <Image
              source={{uri: backPhoto.uri}}
              style={styles.backgroundPhoto}
            />
            <PhotoPick
              styles={backgroundPhotoPickStyles}
              text="배경 이미지 설정"
              photo={backPhoto}
              setPhoto={setBackPhoto}
              setMount={setMount}
            />
          </View>
          <View style={styles.profileImage}>
            <View style={styles.profileImageRelative}>
              <Image
                source={{uri: userPhoto.uri}}
                style={styles.profilePhoto}
              />
              <PhotoPick
                styles={profilePhotoPickStyles}
                text="프로필 이미지 설정"
                photo={userPhoto}
                setPhoto={setUserPhoto}
                setMount={setMount}
              />
            </View>
          </View>
        </View>
        <View style={styles.formSection}>
          <ProfileInfoScreenElement label="이름" text={data.name} />
          <ProfileInfoScreenElement label="이메일 계정" text={data.email} />
          {role == 'ROLE_PLAYER' ? (
            <View>
              <ProfileInfoScreenElement label="생년월일" text={data.birth} />
              <ProfileInfoScreenElement
                label="성별"
                text={data.gender == 'MALE' ? '남자' : '여쟈'}
              />
              <ProfileInfoScreenElement label="종목" text={data.sport} />
              <ProfileInfoScreenElement label="소속" text={data.belong} />
            </View>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.RegistButtonWrapper}>
        <TouchableOpacity
          style={styles.RegistButton}
          onPress={() => onImagePush()}>
          <Text style={styles.RegistButtonText}> 확인 </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
