import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import styles from './Password.styles'

import { CheckIcon } from '../../../Assets/svgs'
import { RegistModal } from './RegistModal'
import { ApiFetch } from '../../../Components'

export function Password({ navigation, route }) {
  if (!route) navigation.navigate('LoginPage')
  const [postForm, setPostForm] = useState({
    nickname: route.params.form.nickname,
    email: route.params.form.email,
    password: '',
  })
  const [form, setForm] = useState({
    password: '',
    certification: '',
  })
  const [first, setFirst] = useState(true)
  const [valPassword, setValPassword] = useState(false)
  const [valCertification, setValCertification] = useState(false)

  async function checkValidate() {
    var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
    if (form.password && form.password.match(reg)) {
      setValPassword(true)
    } else setValPassword(false)
    if (form.certification.length != 0 && (form.certification.length == form.password.length)) {
      setValCertification(true)
    } else setValCertification(false)
  }

  useEffect(() => {
    if (form.password.length != 0)
      checkValidate()
  }, [form])

  const onInput = (key, e) => {
    const { text } = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
    if (key == 'password')
      setPostForm({
        ...postForm,
        [key]: text,
      })
  }
  const [modal, setModal] = useState(false)
  const onPress = () => {
    setFirst(false)
    if (form.password != form.certification) {
      setValCertification(false)
      return ;
    }
    ApiFetch({
      method: 'POST',
      url: '/auth/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postForm),
    })
      .then(thing => {
        setModal(true)
      })
      .catch("err", console.log(Error))
  }
  return (
    <SafeAreaView style={styles.passwordWrapper}>
      <View style={styles.passwordInner}>
        <View style={styles.passwordTop}>
          <Text style={styles.label}>
            비밀번호를 설정 해주세요.{'\n'}8~16자의 영문, 숫자, 특수기호를
            조합하여 사용.
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.password}
              placeholder={'비밀번호'}
              style={styles.input}
              secureTextEntry={true}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('password', e)}
            />
            <CheckIcon
              width={15}
              height={15}
              style={
                valPassword ? styles.checkIcon : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {!first && valPassword == false && (
              <Text style={styles.errorMessage}>
                올바른 비밀번호가 아닙니다.
              </Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.certification}
              placeholder={'비밀번호 확인'}
              style={styles.input}
              secureTextEntry={true}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('certification', e)}
            />
            <CheckIcon
              width={15}
              height={15}
              style={
                valCertification
                  ? styles.checkIcon
                  : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {!first && valCertification == false && (
              <Text style={styles.errorMessage}>
                상단 비밀번호와 일치하지 않습니다.
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onPress()}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <RegistModal modal={modal} setModal={setModal} navigation={navigation} />
    </SafeAreaView>
  )
}
