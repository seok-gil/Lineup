import React, { Component, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './MakeID.styles';
import validator from 'validator';

export function MakeId({ navigation }) {
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    certification: '',
  });

  const [validate, setValidate] = useState({
    nickname: false,
    email: false,
    certification: false,
  });

  const [post, setPost] = useState(false)

  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  };

  useEffect(() => {
    if (validator.isEmail(form.email))
      setPost(true)
  }, [form.email])

  return (
    <SafeAreaView style={styles.makeIDwrapper}>
      <View style={styles.makeIDInner}>
        <View style={styles.makeIDTop}>
          <Text style={styles.label}>닉네임을 입력해 주세요.</Text>
          <TextInput
            value={form.nickname}
            style={styles.input}
            placeholder={'닉네임'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput('nickname', e)}
          />
          {validate.nickname == false && (
            <Text style={styles.errorMessage}>
              사용하실 수 있는 닉네임이 아닙니다.
            </Text>
          )}
          <Text style={styles.labelBottom}>
            계정으로 사용하실 이메일을 입력해 주세요.
          </Text>
          <View style={styles.email}>
            <TextInput
              value={form.email}
              style={styles.input}
              placeholder={'이메일 입력'}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('email', e)}
            />
            <TouchableOpacity
              onPress={() => console.log('이메일전송')}
              disabled={!post}
              style={
                post ?
                  styles.sendButton
                  : styles.sendButton
              }>
              <Text style={styles.sendButtonText}>전송</Text>
            </TouchableOpacity>
          </View>
          {validate.email == false && (
            <Text style={styles.errorMessage}>
              유효하지 않은 이메일 형식입니다.
            </Text>
          )}
          <Text style={styles.labelBottom}>
            인증메일을 발송했습니다.{'\n'}메일 확인 후 인증번호를 입력해주세요.
          </Text>
          <TextInput
            value={form.password}
            style={styles.input}
            placeholder={'인증번호입력'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput('certification', e)}
          />
          {validate.certification == false && (
            <Text style={styles.errorMessage}>
              인증번호가 일치하지 않습니다.
            </Text>
          )}
        </View>
        <TouchableOpacity
          // disabled = {!validate.nickname && !validate.email && !validate.certification}
          onPress={() => navigation.navigate('Password')}
          style={
            validate.nickname && validate.email && validate.certification
              ? styles.loginButton
              : styles.loginButtonNotAvailable
          }>
          <Text style={styles.loginButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
