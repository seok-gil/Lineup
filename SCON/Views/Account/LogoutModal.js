import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal
} from 'react-native';
import styles from './Logout.styles';

export function LogoutModal({ modal, setModal, navigation }) {
  const onPressOn = () => {
    navigation.navigate('LoginPage')
    setModal(false)
  }
  const onPressOff = () => {
    setModal(false)
  }
  return (
    <Modal
      visible={modal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
              <View>
                <Text>
                  로그이웃하시겠어요
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => onPressOn()}>
                  <Text>
                    확인
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressOff()}>
                  <Text>
                    취소
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
