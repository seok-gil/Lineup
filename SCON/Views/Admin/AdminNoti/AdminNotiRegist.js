import React, {Component, useState} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ButtonBig} from '../../../Components';
export function AdminNotiRegist({navigation}) {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const onChange = (keyvalue, e) => {
    const {text} = e.nativeEvent;
    setInputs({
      ...inputs,
      [keyvalue]: text,
    });
  };

  const onSumit = () => {
    console.log('sumit');
  };

  return (
    <View>
      <Text>제목</Text>
      <TextInput
        value={inputs.search}
        placeholder={'공지사항 제목을 입력해주세요'}
        placeholderTextColor="#C9C9C9"
        onChange={e => onChange('title', e)}
      />
      <Text>내용</Text>
      <TextInput
        value={inputs.search}
        placeholder={'상세 내용을 입력해주세요'}
        placeholderTextColor="#C9C9C9"
        onChange={e => onChange('content', e)}
      />
      <ButtonBig text={'공지사항등록'} onPress={() => onSumit} />
    </View>
  );
}
