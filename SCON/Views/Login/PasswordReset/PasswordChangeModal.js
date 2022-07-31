import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal
} from 'react-native';
import styles from './PasswordChangeModal.styles';

import { CheckBigIcon } from "../../../Assets/Icons"

export function PasswordChangeModal({ modal, setModal, navigation }) {
  const onPress = () => {
    navigation.navigate('Tab')
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
                <Image source={CheckBigIcon} />
                <Text>
                  비밀번호가 변경되었어요.
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
  )
}
