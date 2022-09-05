import React from 'react'
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Modal,
  Touchable,
} from 'react-native'
import {Privacy} from './Assets/Privacy'
import {Service} from './Assets/Service'

import styles from './AcceptModal.styles'

export function AcceptModal({modal, setModal, accept}) {
  const onPress = () => {
    setModal(false)
  }
  return (
    <Modal visible={modal}>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalWrapper}>
          <Text style={styles.title}>
            {accept == 'service' ? (
              <Service type={'title'} />
            ) : (
              <Privacy type={'title'} />
            )}
          </Text>
          <ScrollView style={styles.modalInnerScroll}>
            {accept == 'service' ? (
              <Text style={styles.body}>
                <Service type={'body'} />
              </Text>
            ) : (
              <Text style={styles.body}>
                <Privacy type={'body'} />
              </Text>
            )}
          </ScrollView>
          <TouchableOpacity
            onPress={() => onPress()}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>확인</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
