import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { PhotoPick } from '../../../Components/PhotoPick';
import S3StorageUpload from '../../../Components/PhotoPick';
import { ImagePush } from './ImagePush'

import ProfileInfoScreenElement from './ProfileInfoScreenElement';
import { DefaultProfileImage, SwimmingBackground } from '../../../Assets/Images';
import styles from './ProfileInfoScreen.styles';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import { backgroundPhotoPickStyles, profilePhotoPickStyles } from './MypagePhotoPick.styles';
import AsyncStorage from "@react-native-community/async-storage"



export function ProfileInfoScreen({ navigation }) {
  const [data, setData] = useState();
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
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `http://15.164.100.211:8080/my-page/user-profile`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          setData(thing);
          setUserPhoto({
            ...userPhoto,
            ['uri']: thing.profilePic
          })
          setBackPhoto({
            ...backPhoto,
            ['uri']: thing.profileBack
          })
        })
      })
  }, []);

  if (!data) return <View />
  return (
    <View style={styles.profileScreenWrapper}>
      <View style={styles.profileImageWrapper}>
        <View style={styles.profileBackground}>
          <Image source={backPhoto} style={styles.backgroundPhoto} />
          <Image source={{ uri: userPhoto.uri }} style={styles.backgroundPhoto} />
          <PhotoPick
            styles={backgroundPhotoPickStyles}
            text="배경 이미지 설정"
            photo={backPhoto}
            setPhoto={setBackPhoto}
          />
        </View>
        <View style={styles.profileImage}>
          <View style={styles.profileImageRelative}>
            <Image source={{ uri: backPhoto.uri }} style={styles.profilePhoto} />
            <PhotoPick
              styles={profilePhotoPickStyles}
              text="프로필 이미지 설정"
              photo={userPhoto}
              setPhoto={setUserPhoto}
            />
          </View>
        </View>
      </View>
      <View style={styles.formSection}>
        <ProfileInfoScreenElement label="이름" text={data.name} />
        <ProfileInfoScreenElement label="이메일 계정" text={data.email} />
        <ProfileInfoScreenElement label="생년월일" text={data.birth} />
        <ProfileInfoScreenElement label="성별" text={data.gender == "MALE" ? "남자" : "여쟈"} />
        <ProfileInfoScreenElement label="종목" text={data.sport} />
        <ImagePush playerId={data.playerId} userPhoto={userPhoto} setUserPhoto={setUserPhoto} backPhoto={backPhoto} setBackPhoto={setBackPhoto} navigation={navigation} />
        <ProfileInfoScreenElement label="소속" text={data.belong} />
      </View>
    </View>
  );
}
