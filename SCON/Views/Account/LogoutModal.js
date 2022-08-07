import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {ApiFetch} from '../../Components'
import styles from './Logout.styles'

export function LogoutModal({modal, setModal, navigation}) {
  const onPressOn = () => {
    AsyncStorage.getItem('accessToken').then(key => {
      AsyncStorage.removeItem(key)
      navigation.navigate('LoginPage')
      setModal(false)
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
              onPress={() => onPressOn()}
              style={styles.cancelButton}>
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressOff()}
              style={styles.submitButton}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
