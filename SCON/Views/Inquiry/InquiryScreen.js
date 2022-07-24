import React, {Component, useState} from 'react';

import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './InquiryScreen.styles';

export function InquiryScreen({navigation}) {
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

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <View style={styles.inquiryScreenWrapper}>
      <View style={styles.inquiryScreenInner}>
        <Text style={styles.inquiryScreenLabel}>제목</Text>
        <TextInput
          style={styles.titleInput}
          value={inputs.search}
          placeholder={'문의 제목을 입력해주세요'}
          placeholderTextColor="#C9C9C9"
          onChange={e => onChange('title', e)}
        />
        <Text style={styles.inquiryScreenLabel}>내용</Text>
        <TextInput
          multiline={true}
          style={styles.contentInput}
          value={inputs.search}
          placeholder={
            '정확한 답변을 드릴 수 있도록\n상세하게 내용을 작성해주세요.'
          }
          placeholderTextColor="#C9C9C9"
          onChange={e => onChange('content', e)}
        />
      </View>
      <TouchableOpacity onPress={() => onSubmit} style={styles.inquiryButton}>
        <Text style={styles.inquiryButtonText}> 제출하기 </Text>
      </TouchableOpacity>
    </View>
  );
}
