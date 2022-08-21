import React from 'react'
import {TouchableOpacity, View, Text, Modal} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from '../../Components'
import styles from './Logout.styles'

export function LogoutModal({modal, setModal, navigation}) {
  var accessToken
  const onPressOn = () => {
    AsyncStorage.getItem('accessToken').then(key => {
      accessToken = key
      ApiFetch({
        method: 'POST',
        url: `/auth/logout`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: null,
      }).then(() => {
        AsyncStorage.removeItem(accessToken)
        navigation.navigate('LoginPage')
        setModal(false)
      })
    })
  }

  const onPressOff = () => {
    setModal(false)
  }

  return (
    <Modal visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <Text style={styles.modalText}>로그아웃 하시겠어요?</Text>
          </View>
          <View style={styles.modalBottom}>
            <TouchableOpacity
              onPress={() => onPressOff()}
              style={styles.cancelButton}>
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressOn()}
              style={styles.submitButton}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
