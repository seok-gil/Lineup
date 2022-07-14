import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ButtonBig } from "../../../Components"

export function PasswordReset({ navigation }) {
  const [form, setForm] = useState({
    password: '',
    certification: '',
  })

  const [validate, setValidate] = useState({
    password: false,
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
      <Text>새로운 비밀번호를 입력해주세요.</Text>
	  <Text>8~16자의 영문, 숫자, 특수기호를 조합하여 사용.</Text>
      <TextInput
        value={form.password}
        placeholder={'비밀번호'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('email', e)}
      />
      <TouchableOpacity onPress={() => console.log("이메일전송")}>
        <Text>##############</Text>
      </TouchableOpacity>
      {validate.password == false && (<Text>올바른 비밀번호가 아닙니다.</Text>)}
      <TextInput
        value={form.certification}
        placeholder={'비밀번호 확인'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('certification', e)}
      />
      {validate.certification == false && (<Text>상단 비밀번호와 일치하지 않습니다.</Text>)}
      <ButtonBig onPress={() => navigation.navigate('TabScreen')} />
    </SafeAreaView>
  );
}

