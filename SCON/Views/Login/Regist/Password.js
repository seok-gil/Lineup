import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ButtonBig } from "../../../Components"

export function Password({ navigation }) {
  const [form, setForm] = useState({
    password: false,
    certification: false,
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
      <Text>비밀번호를 설정 해주세요.{'\n'}8~16자의 영문, 숫자, 특수기호를 조합하여 사용.</Text>
      <TextInput
        value={form.password}
        placeholder={'비밀번호'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('password', e)}
      />
      {validate.password == false && (<Text>올바른 비밀번호가 아닙니다.</Text>)}
      <Text>계정으로 사용하실 이메일을 입력해 주세요.</Text>
      <TextInput
        value={form.certification}
        placeholder={'비밀번호 확인'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('certification', e)}
      />
      <TouchableOpacity onPress={() => console.log("이메일전송")}>
        <Text>전송</Text>
      </TouchableOpacity>
      {validate.certification == false && (<Text>상단 비밀번호와 일치하지 않습니다.</Text>)}
      <ButtonBig onPress={() => navigation.navigate('Password')} />
    </SafeAreaView>
  );
}

