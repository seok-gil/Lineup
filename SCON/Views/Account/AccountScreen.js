import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {LogoutModal} from './LogoutModal'
import {ApiFetch} from '../../Components'

import {ArrowIcon} from '../../Assets/svgs'
import styles from './Account.styles'

export function AccountScreen({navigation}) {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState()
  const [role, setRole] = useState('ROLE_PLAYER')

  const onLogout = () => {
    setModal(true)
  }

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/acc-manage',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else
          setData(thing)
      })
    })
    AsyncStorage.getItem('role').then(thing => {
      setRole(thing)
    })
  }, [])
  return (
    <SafeAreaView style={styles.accountScreenWrapper}>
      <TouchableOpacity style={styles.menuElement} onPress={onLogout}>
        <View style={styles.columnView}>
          <Text style={styles.elementText}>로그아웃</Text>
          <Text style={styles.emailText}>{data && data.email}</Text>
        </View>
        <ArrowIcon style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuElement}
        onPress={() => navigation.navigate('PasswordChange')}>
        <Text style={styles.elementText}>비밀번호 변경</Text>
        <ArrowIcon style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuElement}
        onPress={() => navigation.navigate('PlayerRegist')}>
        <Text style={styles.elementText}>선수 등록</Text>
        <ArrowIcon style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuElement}
        onPress={() => navigation.navigate('Withdrawal')}>
        <Text style={styles.elementText}>회원 탈퇴</Text>
        <ArrowIcon width={11} height={6} style={styles.icon} />
      </TouchableOpacity>
      <LogoutModal modal={modal} setModal={setModal} navigation={navigation} />
    </SafeAreaView>
  )
}
