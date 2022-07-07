import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
// import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import { ButtonBig } from "../../../Components"
import CheckBox from '@react-native-community/checkbox';

export function RegistAccept({ navigation }) {
  const [accept, SetAccpet] = useState({
    all: false,
    service: false,
    privacy: false,
  })

  const onClick = (key) => {
    console.log(key)
    console.log(accept)
    if (key != 'all') {
      SetAccpet({
        ...accept,
        [key]: !accept[key]
      })
    }
    if (key == 'all') {
      SetAccpet({
        all: !accept['all'],
        service: !accept['all'],
        privacy: !accept['all']
      })
    }
  }


  return (
    <SafeAreaView style={{ flexDirection: 'column', }}>
      <Text>서비스를 이용하기 위해서 약관동의가 필요합니다.</Text>
      <CheckBox value={accept.all}
        onValueChange={() => onClick('all')} />
      <Text>모두 확인, 동의합니다.</Text>
      <CheckBox value={accept.service}
        onValueChange={() => onClick('service')} />
      <Text>(필수)서비스 이용약관</Text>
      <CheckBox value={accept.privacy}
        onValueChange={() => onClick('privacy')} />
      <Text>(필수)개인정보 수집 및 이용동의</Text>
      <ButtonBig onPress={() =>navigation.navigate('MakeId')} />
    </SafeAreaView>
  );
}