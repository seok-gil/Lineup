import React, {useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {LineupLogo} from '../../Assets/svgs'
import {ApiFetch} from '../../Components/API/ApiFetch'
import styles from './Login.styles'

// ROLE_MEMBER //ROLE_PLAYER //ROLE_ADMIN
export function LoginMember({navigation}) {
  const [form, setForm] = useState({
    email: 'admin@gmail.com',
    password: '1234',
  })
  const [validate, setValidate] = useState({
    email: true,
    password: true,
  })
  const onInput = (key, e) => {
    const {text} = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
  }

  const onLogin = () => {
    if (!validate.email && !validate.password) navigation.navigate('Tab')
    ApiFetch({
      method: 'POST',
      url: '/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(thing => {
        AsyncStorage.setItem('accessToken', thing.accessToken)
        AsyncStorage.setItem('refreshToken', thing.refreshToken)
        navigation.navigate('Tab')
      })
      .catch(error => {
        var temp = validate
        temp.email = false
        temp.password = false
        setValidate(temp)
        console.log('Login ERROR', error)
      })
  }

  return (
    <SafeAreaView style={styles.loginWrapper}>
      <View style={styles.logoArea}>
        <LineupLogo width={300} height={50} style={styles.logoImage} />
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
          <View style={styles.errorMessageWrapper}>
            {validate.email == false && (
              <Text style={styles.errorMessage}>
                가입 된 정보가 없습니다. 다시 입력해주세요.
              </Text>
            )}
          </View>
          <TextInput
            value={form.password}
            placeholder={'비밀번호 입력'}
            placeholderTextColor="#0E0E0E66"
            style={styles.loginInput}
            onChange={e => onInput('password', e)}
          />
          <View style={styles.errorMessageWrapper}>
            {validate.email == false && (
              <Text style={styles.errorMessage}>비밀번호가 틀렸습니다.</Text>
            )}
          </View>
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
  )
}
