import React, { Component, useState } from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

import { PhotoPick } from "../../Components/PhotoPick"

export function ProfileScreen({ navigation }) {
  const data = require('../../Assets/Data/Profile.json').profile
  const [userPhoto, setUserPhoto] = useState(DefaultProfile)
  const [backPhoto, setBackPhoto] = useState(DefaultProfile)

  return (
    <View style={{ flexDirection: 'column', }}>
      <PhotoPick text="배경 이미지 설정" setPhoto={setBackPhoto}/>
      <Image source={userPhoto} style={styles.image} />
      <PhotoPick text="프로필 이미지 설정" setPhoto={setUserPhoto}/>
      <Image source={backPhoto} style={styles.image} />
      <Text>이름</Text>
      <Text>{data.name}</Text>
      <Text>이메일 계정</Text>
      <Text>{data.email}</Text>
      <Text>생년월일</Text>
      <Text>{data.birth}</Text>
      <Text>성별</Text>
      <Text>{data.sex}</Text>
      <Text>종목</Text>
      <Text>{data.major}</Text>
      <Text>소속</Text>
      <Text>{data.belong}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain'
  },
});
