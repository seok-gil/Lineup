import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native'

import styles from './PasswordReset.styles'
import { CheckIcon } from '../../../Assets/svgs'
import { PasswordChangeModal, ApiFetch } from '../../../Components'
export function PasswordReset({ navigation, route }) {
  const [first, setFirst] = useState(true)
  const [form, setForm] = useState({
    password: '',
    certification: '',
  })

  const [valPassword, setValPassword] = useState(false)
  const [valCertification, setValCertification] = useState(false)

  const [modal, setModal] = useState(false)

  const onInput = (key, e) => {
    const { text } = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
  }

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

  const onPress = () => {
    setFirst(false)
    if (form.password != form.certification) {
      setValCertification(false)
    }
    else {
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
              style={styles.input}
              placeholder={'비밀번호 확인'}
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
      <PasswordChangeModal
        modal={modal}
        setModal={setModal}
        navigation={navigation}
      />
    </SafeAreaView>
  )
}
