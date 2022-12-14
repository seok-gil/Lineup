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


  const [valPassword, setValPassword] = useState(false)
  const [valCertification, setValCertification] = useState(false)

  async function checkValidate() {
    var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
    if (form.newPassword && form.newPassword.match(reg)) {
      setValPassword(true)
    } else setValPassword(false)
    if (form.confirmPassword.length != 0 && (form.confirmPassword.length == form.newPassword.length)) {
      setValCertification(true)
    } else setValCertification(false)
  }

  useEffect(() => {
    if (form.newPassword.length != 0)
      checkValidate()
  }, [form])


  const onInput = (key, e) => {
    const {text} = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
  }

  const onSummit = () => {
    setFirst(false)
    if ((form.newPassword == form.confirmPassword) && valPassword && valCertification) {
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
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else if (thing && thing.status == 406) {
          // ???????????? ?????????
          setValidate({
            ...validate,
            ['oldPassword']: false,
            ['buttonn']: false,
          })
        } else {
          AsyncStorage.removeItem('accessToken')
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
          <Text style={styles.title}>????????? ??????????????? ??????????????????.</Text>
          <Text style={styles.label}>
            8~16?????? ??????, ??????, ??????????????? ???????????? ??????.
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.oldPassword}
              style={styles.input}
              placeholder={'?????? ????????????'}
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
                ?????? ??????????????? ???????????? ????????????.
              </Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.newPassword}
              style={styles.input}
              placeholder={'?????? ????????????'}
              placeholderTextColor="#0E0E0E66"
              secureTextEntry={true}
              onChange={e => onInput('newPassword', e)}
            />
            <CheckIcon
              width={15}
              height={15}
              style={
                valPassword
                  ? styles.checkIcon
                  : styles.checkIconNotShown
              }
            />
          </View>
          <View style={styles.errorMessageWrapper}>
            {!first && !valPassword && (
              <Text style={styles.errorMessage}>
                ????????? ??????????????? ????????????.
              </Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.confirmPassword}
              style={styles.input}
              secureTextEntry={true}
              placeholder={'?????? ???????????? ??????'}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('confirmPassword', e)}
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
            {!first && !valCertification && (
              <Text style={styles.errorMessage}>
                ?????? ??????????????? ???????????? ????????????.
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onSummit()}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>??????</Text>
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
