import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { LineupLogoImage } from '../../Assets/Images'
import validator from 'validator';
import { ButtonBig } from "../../Components"

export function LoginPage({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [validate, setValidate] = useState({
    email: false,
    password: false,
  })

  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  }


  const onLogin = () => {
    if (!validate.email && !validate.password)
      navigation.navigate('Tab')
  }

  return (
    <SafeAreaView style={{ flexDirection: 'column', }}>
      <Image source={LineupLogoImage} />
      <TextInput
        value={form.email}
        placeholder={'이메일 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('email', e)}
      />
      {validate.email == false && (<Text>가입 된 정보가 없습니다. 다시 입력해주세요.</Text>)}
      <TextInput
        value={form.password}
        placeholder={'비밀번호 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('password', e)}
      />
      {validate.email == false && (<Text>비밀번호가 틀렸습니다.</Text>)}
      <ButtonBig text={'로그인'} onPress={onLogin}/>
      <TouchableOpacity onPress={() => navigation.navigate('RegistAccpet')}>
        <Text>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text>비밀번호찾기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}