import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import {ButtonBig} from '../../../Components';

import styles from './PasswordReset.styles';

export function PasswordReset({navigation}) {
  const [form, setForm] = useState({
    password: '',
    certification: '',
  });

  const [validate, setValidate] = useState({
    password: false,
    certification: false,
  });

  const onInput = (key, e) => {
    const {text} = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  };
  return (
    <SafeAreaView style={styles.passwordWrapper}>
      <View style={styles.passwordInner}>
        <View style={styles.passwordTop}>
          <Text style={styles.title}>새로운 비밀번호를 입력해주세요.</Text>
          <Text style={styles.label}>
            8~16자의 영문, 숫자, 특수기호를 조합하여 사용.
          </Text>
          <TextInput
            value={form.password}
            style={styles.input}
            placeholder={'비밀번호'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput('email', e)}
          />
          {validate.password == false && (
            <Text style={styles.errorMessage}>올바른 비밀번호가 아닙니다.</Text>
          )}
          <TextInput
            value={form.certification}
            style={styles.input}
            placeholder={'비밀번호 확인'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput('certification', e)}
          />
          {validate.certification == false && (
            <Text style={styles.errorMessage}>
              상단 비밀번호와 일치하지 않습니다.
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tab')}
          style={
            validate.password && validate.certification
              ? styles.loginButton
              : styles.loginButtonNotAvailable
          }>
          <Text style={styles.loginButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
