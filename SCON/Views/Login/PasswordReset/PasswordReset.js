import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native'

import styles from './PasswordReset.styles'
import {PasswordChangeModal} from './PasswordChangeModal'
import {CheckSmallIcon} from '../../../Assets/Icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from '../../../Components'
export function PasswordReset({navigation, route}) {
  const [form, setForm] = useState({
    password: '',
    certification: '',
  })

  const [validate, setValidate] = useState({
    password: false,
    certification: false,
  })

  const [validateError, setValidateError] = useState({
    password: true,
    certification: true,
  })

  const [modal, setModal] = useState(false)

  const onInput = (key, e) => {
    const {text} = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
  }

  async function checkValidate(temp) {
    var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
    if (form.password && form.password.match(reg)) {
      temp.password = true
    } else temp.password = false
    if (form.certification.length == form.password.length) {
      temp.certification = true
    } else temp.certification = false
  }

  useEffect(() => {
    let temp = validate
    checkValidate(temp).then(setValidate(temp))
  }, [form])

  const onPress = () => {
    ApiFetch({
      method: 'POST',
      url: `/auth/pw-reset`,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: route.params.email,
        newPw: form.password,
      }),
    }).then(() => {
      setModal(true)
    })
  }

  return (
    <SafeAreaView style={styles.passwordWrapper}>
      <View style={styles.passwordInner}>
        <View style={styles.passwordTop}>
          <Text style={styles.title}>새로운 비밀번호를 입력해주세요.</Text>
          <Text style={styles.label}>
            8~16자의 영문, 숫자, 특수기호를 조합하여 사용.
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.password}
              style={styles.input}
              placeholder={'비밀번호'}
              placeholderTextColor="#0E0E0E66"
              secureTextEntry={true}
              onChange={e => onInput('password', e)}
            />
            <Image
              source={CheckSmallIcon}
              style={
                validate.password ? styles.checkIcon : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {validate.password == false && (
              <Text style={styles.errorMessage}>
                올바른 비밀번호가 아닙니다.
              </Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.certification}
              style={styles.input}
              placeholder={'비밀번호 확인'}
              secureTextEntry={true}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('certification', e)}
            />
            <Image
              source={CheckSmallIcon}
              style={
                validate.certification
                  ? styles.checkIcon
                  : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {validate.certification == false && (
              <Text style={styles.errorMessage}>
                상단 비밀번호와 일치하지 않습니다.
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onPress()}
          style={
            validateError.password && validateError.certification
              ? styles.loginButton
              : styles.loginButtonNotAvailable
          }>
          <Text style={styles.loginButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <PasswordChangeModal
        modal={modal}
        setModal={setModal}
        navigation={navigation}
      />
    </SafeAreaView>
  )
}
