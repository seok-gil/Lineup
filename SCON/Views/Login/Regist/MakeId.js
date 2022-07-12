import React, { Component, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
// import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import { ButtonBig } from "../../../Components"
import CheckBox from '@react-native-community/checkbox';

export function MakeId({ navigation }) {
	const [form, setForm] = useState({
    nickname : '',
    email : '',
    certification : '',
  })

  const [validate, setValidate] = useState({
    nickname : false,
    email : false,
    certification : false,
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
		<Text>닉네임을 입력해 주세요.</Text>
      <TextInput
        value={form.nickname}
        placeholder={'닉네임'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('nickname', e)}
      />
      {validate.nickname == false && (<Text>사용하실 수 있는 닉네임이 아닙니다.</Text>)}
      <Text>계정으로 사용하실 이메일을 입력해 주세요.</Text>
      <TextInput
        value={form.email}
        placeholder={'이메일 입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('email', e)}
      />
      <TouchableOpacity onPress={() => console.log("이메일전송")}>
        <Text>전송</Text>
      </TouchableOpacity>
      {validate.email == false && (<Text>유효하지 않은 이메일 형식입니다.</Text>)}
      <Text>인증메일을 발송했습니다.{'\n'}메일 확인 후 인증번호를 입력해주세요.</Text>
      <TextInput
        value={form.password}
        placeholder={'인증번호입력'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('certification', e)}
      />
      {validate.certification == false && (<Text>인증번호가 일치하지 않습니다.</Text>)}
      <ButtonBig text={'다음'}onPress={() =>navigation.navigate('Password')} />
    </SafeAreaView>
  );
}

