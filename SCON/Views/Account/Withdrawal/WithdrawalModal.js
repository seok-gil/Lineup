import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Modal } from 'react-native'
import { WithdrawalSuccessModal } from './WithdrawalSuccessModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../../Components'
import styles from './WithdrawalModal.styles'
export function WithdrawalModal({ modal, setModal, navigation }) {
  const [success, setSccess] = useState(false)

  const onPressOn = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'POST',
        url: `/unjoin`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(() => {
        setModal(false)
        setSccess(true)
      })
    })
  }
  const onPressOff = () => {
    navigation.navigate('LoginPage')
    setModal(false)
  }
  return (
    <View>
      <Modal visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTop}>
              <Text style={styles.modalText}>정말 탈퇴하시겠어요?</Text>
            </View>
            <View style={styles.modalBottom}>
              <TouchableOpacity
                onPress={onPressOff}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}> 취소</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressOn} style={styles.submitButton}>
                <Text style={styles.buttonText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <WithdrawalSuccessModal
        modal={success}
        setModal={setSccess}
        navigation={navigation}
      />
    </View>
  )
}
