import React, {useState} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './AdminNotiRegist.styles';

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
    <View style={styles.notiRegistWrapper}>
      <View style={styles.notiRegistInner}>
        <Text style={styles.notiRegistLabel}>제목</Text>
        <TextInput
          style={styles.titleInput}
          value={inputs.search}
          placeholder={'공지사항 제목을 입력해주세요'}
          placeholderTextColor="#C9C9C9"
          onChange={e => onChange('title', e)}
        />
        <Text style={styles.notiRegistLabel}>내용</Text>
        <TextInput
          style={styles.contentInput}
          value={inputs.search}
          placeholder={'상세 내용을 입력해주세요'}
          placeholderTextColor="#C9C9C9"
          onChange={e => onChange('content', e)}
        />
      </View>
      <TouchableOpacity onPress={() => onSubmit} style={styles.registButton}>
        <Text style={styles.registButtonText}>공지사항 등록</Text>
      </TouchableOpacity>
    </View>
  );
}
