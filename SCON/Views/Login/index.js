import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import  AsyncStorage from "@react-native-community/async-storage"

import { LineupLogoImage } from '../../Assets/Images';
import { ApiFetch } from '../../Components/API/ApiFetch';
import styles from './Login.styles';

export function LoginPage({ navigation }) {
  const [data, setData] = useState();

  // useEffect(() => {
  //   .then(thing => {
  //     setData(thing);
  //   });
  // }, []);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [validate, setValidate] = useState({
    email: false,
    password: false,
  });

  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  };

  const onLogin = () => {
    ApiFetch({
      method: 'POST',
      url: 'http://15.164.100.211:8080/auth/login',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    }).then(AsyncStorage.setItem)
    
    // if (!validate.email && !validate.password) 
    //   navigation.navigate('Tab');
  };

  return (
    <SafeAreaView style={styles.loginWrapper}>
      <View style={styles.logoArea}>
        <Image source={LineupLogoImage} style={styles.logoImage} />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.loginSection}>
          <TextInput
            value={form.email}
            placeholder={'이메일 입력'}
            placeholderTextColor="#0E0E0E66"
            style={styles.loginInput}
            onChange={e => onInput('email', e)}
          />
          {validate.email == false && (
            <Text style={styles.errorMessage}>
              가입 된 정보가 없습니다. 다시 입력해주세요.
            </Text>
          )}
          <TextInput
            value={form.password}
            placeholder={'비밀번호 입력'}
            placeholderTextColor="#0E0E0E66"
            style={styles.loginInput}
            onChange={e => onInput('password', e)}
          />
          {validate.email == false && (
            <Text style={styles.errorMessage}>비밀번호가 틀렸습니다.</Text>
          )}
          <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('RegistAccpet')}>
            <Text style={styles.signup}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.password}>비밀번호찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
