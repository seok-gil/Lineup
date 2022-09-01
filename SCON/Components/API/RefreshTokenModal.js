import React, {useState} from 'react'
import {TouchableOpacity, View, Text, Modal} from 'react-native'
import {ApiFetch} from './ApiFetch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './RefreshTokenModal.styles'

export function RefreshTokenModal({navigation}) {
  const [modal, setModal] = useState(true)

  const onPressOff = () => {
    navigation.navigate('LoginPage')
    setModal(false)
  }
  const onPressOn = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      const acc = thing
      AsyncStorage.getItem('refreshToken').then(thing => {
        const ref = thing
        ApiFetch({
          method: 'POST',
          url: '/auth/reissue',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + acc,
          },
          body: JSON.stringify({
            refreshToken: ref,
          }),
        }).then(thing => {
          if (thing == 401) {
            setModal(false)
            navigation.navigate('ModalPage', {
              text: '토큰 재생성에 실패하였습니다.',
              page: 'LoginPage',
            })
          } else if (response.accessToken) {
            AsyncStorage.setItem('accessToken', response.accessToken)
            AsyncStorage.setItem('refreshToken', response.refreshToken)
            AsyncStorage.setItem('role', response.role)
            if (response.role == 'ROLE_ADMIN') navigation.navigate('AdminTab')
            else navigation.goBack()
            setModal(false)
          }
        })
      })
    })
  }


  return (
    <Modal visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <Text style={styles.modalText}>토큰이 만료되었습니다.{"\n"}재생성 하시겠습니까?</Text>
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
