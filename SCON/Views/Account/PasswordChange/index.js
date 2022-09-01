import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {CheckIcon} from '../../../Assets/svgs'
import {ApiFetch, PasswordChangeModal} from '../../../Components'

import styles from './PasswordChange.styles'
import {useIsFocused} from '@react-navigation/native'

export function PasswordChange({navigation}) {
  const isFocused = useIsFocused()
  const [first, setFirst] = useState(true)
  const [button, setButton] = useState(false)
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [validate, setValidate] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  })

  const [modal, setModal] = useState(false)

  async function checkValidate(temp) {
    var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
    if (form.newPassword && form.newPassword.match(reg)) {
      temp.newPassword = true
    } else temp.newPassword = false
    if (form.confirmPassword.length != 0 && form.confirmPassword.length == form.newPassword.length) {
      temp.confirmPassword = true
    } else temp.confirmPassword = false
    if (temp.oldPassword && temp.newPassword && temp.confirmPassword)
      setButton(true)
  }

  useEffect(() => {
    let temp = validate
    checkValidate(temp).then(setValidate(temp))
    console.log(validate)
  }, [form])

  useEffect(() => {
  }, [validate])

  const onInput = (key, e) => {
    const {text} = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
  }

  const onSummit = () => {
    setFirst(false)
    if ((form.newPassword == form.confirmPassword) && validate.newPassword && validate.confirmPassword) {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'PUT',
        url: '/pw-change',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: JSON.stringify({
          password: form.oldPassword,
          newPassword: form.newPassword,
        }),
      }).then(thing => {
        console.log("pass", thing)
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else if (thing && thing.status == 406) {
          // 비밀번호 불일치
          setValidate({
            ...validate,
            ['oldPassword']: false,
            ['buttonn']: false,
          })
        } else {
          AsyncStorage.removeItem('accessToken')
          navigation.navigate('ModalPage', {
            text: '비밀번호가 변경되었어요.',
            page: 'LoginPage',
          })
          setModal(true)
        }
      })
    })}
    else {
      setValidate({
        ...validate,
        ['newPassword']: false,
        ['confirmPassword']: false,
        ['buttonn']: false,
      })
    }
  }

  return (
    <View style={styles.passwordWrapper}>
      <View style={styles.passwordInner}>
        <View style={styles.passwordTop}>
          <Text style={styles.title}>새로운 비밀번호를 입력해주세요.</Text>
          <Text style={styles.label}>
            8~16자의 영문, 숫자, 특수기호를 조합하여 사용.
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.oldPassword}
              style={styles.input}
              placeholder={'현재 비밀번호'}
              secureTextEntry={true}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('oldPassword', e)}
            />
            <CheckIcon
              width={15}
              height={15}
              style={
                validate.oldPassword
                  ? styles.checkIcon
                  : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {!first && !validate.oldPassword && (
              <Text style={styles.errorMessage}>
                현재 비밀번호와 일치하지 않습니다.
              </Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.newPassword}
              style={styles.input}
              placeholder={'신규 비밀번호'}
              placeholderTextColor="#0E0E0E66"
              secureTextEntry={true}
              onChange={e => onInput('newPassword', e)}
            />
            <CheckIcon
              width={15}
              height={15}
              style={
                validate.newPassword
                  ? styles.checkIcon
                  : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {!first && !validate.newPassword && (
              <Text style={styles.errorMessage}>
                올바른 비밀번호가 아닙니다.
              </Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.confirmPassword}
              style={styles.input}
              secureTextEntry={true}
              placeholder={'신규 비밀번호 확인'}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('confirmPassword', e)}
            />
            <CheckIcon
              width={15}
              height={15}
              style={
                validate.confirmPassword
                  ? styles.checkIcon
                  : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {!first && !validate.confirmPassword && (
              <Text style={styles.errorMessage}>
                상단 비밀번호와 일치하지 않습니다.
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onSummit()}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <PasswordChangeModal
        modal={modal}
        setModal={() => setModal()}
        navigation={navigation}
      />
    </View>
  )
}
