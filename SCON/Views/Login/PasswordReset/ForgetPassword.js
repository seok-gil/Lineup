import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ButtonBig } from "../../../Components"

export function ForgetPassword({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    certification: '',
  })

  const [validate, setValidate] = useState({
    email: false,
    certification: false,
  })

  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  }
  return (
    <SafeAreaView style={{ flexDirection: 'column', }}>
      <Text>라인업 가입 정보를 다시 확인할께요.</Text>
      <TextInput
        value={form.email}
        placeholder={'이메일 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('email', e)}
      />
      <TouchableOpacity onPress={() => console.log("이메일전송")}>
        <Text>전송</Text>
      </TouchableOpacity>
      {validate.email == false && (<Text>가입 된 정보가 없습니다. 다시 입력해주세요.</Text>)}
      <Text>메일 확인 후 인증번호를 입력해주세요.</Text>
      <TextInput
        value={form.certification}
        placeholder={'인증번호 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('certification', e)}
      />
      {validate.certification == false && (<Text>인증번호가 일치하지 않습니다.</Text>)}
      <ButtonBig onPress={() => navigation.navigate('PasswordReset')} />
    </SafeAreaView>
  );
}

