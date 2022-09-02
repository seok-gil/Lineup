import React, {useState} from 'react'
import {TouchableOpacity, View, Text, Modal} from 'react-native'
import styles from './InquiryModal.styles'

export function InquiryModal({modal, setModal, navigation}) {
  const onPress = () => {
    navigation.goBack()
    setModal(false)
  }
  return (
    <Modal visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <View>
              <Text>문의 내용이 전달됐어요!</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => onPress()}>
                <Text>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
