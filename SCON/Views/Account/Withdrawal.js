import React, { Component, useState } from 'react';
import { View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ButtonBig } from '../../Components';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
export function Withdrawal() {
  const [password, setPassword] = useState('')
  
  const onInput = (e) => {
		const { text } = e.nativeEvent;
		setPassword(text)
	}
  return (
    <View style={{ flexDirection: 'column', }}>
      <Image source={DefaultProfile} />
      <Text>라인업 계정 ****을(를) 탈퇴하시겠습니까?</Text>
      <Text>계정 탈퇴 안내사항</Text>
      <Text>계정을 삭제하면 회원님의 모든 콘텐츠와 활동 기록 내역이 삭제됩니다. 삭제된 정보는 복구할 수 없으니 신중하게 결정해주세요.</Text>
      <Text>사용 중인 비밀번호</Text>
      <TextInput
        value={password}
        placeholder={'비밀번호'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput(e)}
      />
      <Text>현재 사용중인 비밀번호와 일치하지 않습니다.</Text>
      <ButtonBig/>
    </View>
  );
}