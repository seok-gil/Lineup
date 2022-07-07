import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import { ButtonBig } from "../../Components"

export function LoginPage({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  }

  const [validate, setValidate] = useState({
    email: false,
    password: false,
  })
  return (
    <SafeAreaView style={{ flexDirection: 'column', }}>
      <Image source={DefaultProfile} />
      <TextInput
        value={form.email}
        placeholder={'이메일 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('email', e)}
      />
      {validate.email == false && (<Text>현재 비밀번호와 일치하지 않습니다.</Text>)}
      <TextInput
        value={form.password}
        placeholder={'비밀번호 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('password', e)}
      />
      {validate.email == false && (<Text>비밀번호가 틀렸습니다.</Text>)}
      <ButtonBig />
      <TouchableOpacity onPress={() => navigation.navigate('RegistAccpet')}>
        <Text>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text>비밀번호찾기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}