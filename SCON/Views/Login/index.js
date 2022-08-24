import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useIsFocused} from '@react-navigation/native'
import {ApiFetch, FCMmanager} from '../../Components'

import {LineupLogo} from '../../Assets/svgs'
import styles from './Login.styles'

export function LoginPage({navigation}) {
  const isFocused = useIsFocused()
  const [form, setForm] = useState({
    fcmToken: '',
    // email: 'admin@gmail.com',
    email: 'player0@gmail.com',
    // email: 'member7@gmail.com',
    // email: 'abcd@teml.net',
    // password: a12345678!,
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

  const goLogin = response => {
    if (response.status == 401) {
      setValidate({
        ['email']: false,
        ['password']: false,
      })
    } else if (response.accessToken) {
      AsyncStorage.setItem('accessToken', response.accessToken)
      AsyncStorage.setItem('refreshToken', response.refreshToken)
      AsyncStorage.setItem('role', response.role)
      if (response.role == 'ROLE_ADMIN') navigation.navigate('AdminTab')
      else navigation.navigate('Tab')
    }
  }
  const onLogin = () => {
    ApiFetch({
      method: 'POST',
      url: '/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(thing => {
        if (thing) goLogin(thing)
      })
      .catch(error => {
        console.log('catch error', error)
      })
  }

  useEffect(() => {
    var acc
    var res
    AsyncStorage.getItem('accessToken').then(thing => {
      acc = thing
      AsyncStorage.getItem('refreshToken').then(thing => {
        res = thing
        ApiFetch({
          method: 'POST',
          url: '/auth/reissue',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + acc,
          },
          body: JSON.stringify({
            refreshToken: res,
          }),
        }).then(thing => {
          goLogin(thing)
        })
      })
    })
  }, [])

  useEffect(() => {
    setValidate({
      ['email']: true,
      ['password']: true,
    })
  }, [isFocused])

  return (
    <SafeAreaView style={styles.loginWrapper}>
      <View style={styles.logoArea}>
        <LineupLogo width={300} height={50} />
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
            secureTextEntry={true}
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
      <FCMmanager form={form} setForm={setForm} />
    </SafeAreaView>
  )
}
