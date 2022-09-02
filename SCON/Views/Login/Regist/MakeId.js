import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import styles from './MakeID.styles'
import validator from 'validator'
import { ApiFetch } from '../../../Components'

export function MakeId({ navigation }) {
  const [first, setFirst] = useState(true)
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    certification: '',
  })

  const [validate, setValidate] = useState({
    nickname: true,
    email: true,
    certification: true,
  })
  const [post, setPost] = useState(false)
  const [postFirst, setPostFirst] = useState(true)

  useEffect(() => {
  }, [validate])

  const onInput = (key, e) => {
    const { text } = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
    var tempVal = validate
    if (key == 'email') {
      setPostFirst(true)
      if (validator.isEmail(form.email)) {
        setPost(true)
      } else {
        setPost(false)
      }
    }
    else {
      tempVal[key] = true
    }
  }

  const pushEmail = () => {
    setPost(false)
    setPostFirst(false)
    ApiFetch({
      method: 'POST',
      url: '/email-auth',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
      }),
    }).then(thing => {
      if (thing.status == 400) {
        setValidate({
          ...validate,
          ['email']: false,
        })
      }
      else
        setValidate({
          ...validate,
          ['email']: true,
        })
      setPost(true)
    })
  }

  const onNext = () => {
    setFirst(false)
    if (form.nickname == '') {
      setValidate({
        ...validate,
        ['nickname']: false
      })
      return;
    }
    ApiFetch({
      method: 'POST',
      url: `/auth/nick-check`,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        nickname: form.nickname,
      })
    }).then((res) => {
      if (res.status == 400) {
      setValidate({
        ...validate,
        ['nickname']: false
      })
      return ;
      }
      ApiFetch({
        method: 'POST',
        url: `/email-auth/email-check`,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          code: form.certification,
        }),
      })
        .then(res => {
          validate['certification'] = res
          if (res && form.nickname != '')
            navigation.navigate('Password', { form: form })
        })
        .catch(error => {
          console.log('catch error', error)
        })
    })
  }

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
          <View style={styles.errorMessageWrapper}>
            {!first && validate.nickname == false && (
              <Text style={styles.errorMessage}>
                사용하실 수 있는 닉네임이 아닙니다.
              </Text>
            )}
          </View>
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
              onPress={() => pushEmail()}
              disabled={!post}
              style={styles.sendButton}>
              <Text
                style={post ? styles.sendButtonText : styles.sendButtonOffText}>
                {postFirst ? '전송' : '재전송'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.errorMessageWrapper}>
            {validate.email == false && (
              <Text style={styles.errorMessage}>
                이미 가입된 이메일 입니다.
              </Text>
            )}
          </View>
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
          <View style={styles.errorMessageWrapper}>
            {!first && validate.certification == false && (
              <Text style={styles.errorMessage}>
                인증번호가 일치하지 않습니다.
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onNext()}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


