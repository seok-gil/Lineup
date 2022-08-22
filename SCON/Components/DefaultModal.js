import React, {useState, useEffect} from 'react'
import {TouchableOpacity, View, Text, Modal} from 'react-native'
import styles from './DefaultModal.styles'

export function DefaultModal({navigation, route}) {
  const [modal, setModal] = useState(true)
  const onPressOn = () => {
    setModal(false)
    navigation.navigate(route.params.page)
  }
  console.log(route)
  return (
    <Modal visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <Text style={styles.modalText}>{route.params.text}</Text>
          </View>
          <View style={styles.modalBottom}>
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
