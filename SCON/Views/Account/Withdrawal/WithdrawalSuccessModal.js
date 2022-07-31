import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal
} from 'react-native';
import styles from './WithdrawalModal.styles';

export function WithdrawalSuccessModal({ modal, setModal, navigation }) {
  const onPress = () => {
    navigation.navigate('LoginPage')
    setModal(false)
  }
  
  return (
    <View>
      <Modal
        visible={modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTop}>
              <View>
                <Text>
                  탈퇴처리가 완료되었어요
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => onPress()}>
                  <Text>
                    확인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
