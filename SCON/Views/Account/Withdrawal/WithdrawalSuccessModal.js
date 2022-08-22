import React, {useState} from 'react'
import {TouchableOpacity, View, Text, Modal} from 'react-native'

import styles from './WithdrawalSuccessModal.styles'

export function WithdrawalSuccessModal({modal, setModal, navigation}) {
  const onPress = () => {
    navigation.navigate('LoginPage')
    setModal(false)
  }

  return (
    <View>
      <Modal visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTop}>
              <Text style={styles.modalText}>탈퇴처리가 완료되었어요.</Text>
            </View>
            <TouchableOpacity
              onPress={() => onPress()}
              style={styles.modalBottom}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
