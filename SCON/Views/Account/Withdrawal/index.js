import React, {Component, useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import {WithdrawalModal} from './WithdrawalModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from '../../../Components'

import {CheckIcon, AlertTriangleIcon} from '../../../Assets/svgs'
import styles from './Withdrawal.styles'

export function Withdrawal({navigation}) {
  const [password, setPassword] = useState('')
  const [modal, setModal] = useState(false)
  const [validate, setValidate] = useState(true)
  const [checkIcon, setCheckIcon] = useState(false)

  const onInput = e => {
    const {text} = e.nativeEvent
    setPassword(text)
    setValidate(true)
  }
  const onPress = () => {
    var accessToken
    AsyncStorage.getItem('accessToken').then(thing => {
      accessToken = thing
      ApiFetch({
        method: 'POST',
        url: '/unjoin/pw-check',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          password: password,
        }),
      })
        .then(res => {
          if (res == 401) { // token error
            navigation.navigate('RefreshTokenModal', {navigation : navigation})
          }
          else if (res.status == 406) // password 불일치
            setValidate(false)
          else { //password 일치
              setValidate(true)
              setModal(true)
            
          }
        })
        .catch(thing => {})
    })
  }
  return (
    <View style={styles.withdrawWrapper}>
      <View style={styles.withdrawInner}>
        <AlertTriangleIcon
          width={80}
          height={80}
          fill="#B2F0FA"
          style={styles.photo}
        />
        <Text style={styles.title}>
          {'라인업 계정 ****을(를)\n탈퇴하시겠습니까?'}
        </Text>
        <View style={styles.info}>
          <Text style={styles.infoBold}>계정 탈퇴 안내사항</Text>
          <Text style={styles.infoDim}>
            계정을 삭제하면 회원님의 모든 콘텐츠와 활동 기록 내역이 삭제됩니다.
            삭제된 정보는 복구할 수 없으니 신중하게 결정해주세요.
          </Text>
        </View>
        <Text style={styles.label}>사용 중인 비밀번호</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            secureTextEntry={true}
            style={styles.input}
            placeholder={'비밀번호'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput(e)}
          />
          <CheckIcon
            width={15}
            height={15}
            style={checkIcon ? styles.checkIcon : styles.checkIconNotShown}
          />
        </View>
        <View style={styles.errorMessageWrapper}>
          {!validate && (
            <Text style={styles.errorMessage}>
              현재 비밀번호와 일치하지 않습니다.
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>버튼</Text>
      </TouchableOpacity>
      <WithdrawalModal
        modal={modal}
        setModal={setModal}
        navigation={navigation}
      />
    </View>
  )
}
