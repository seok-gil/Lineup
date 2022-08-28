import React, { useState, useEffect } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Modal,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../../Components'
import styles from './AdminNotiDelModal.styles'

export function AdminNotiDelModal({ data, modal, setModal, navigation }) {
    const onPressOn = () => {
        AsyncStorage.getItem("accessToken")
        .then((thing) => {
          ApiFetch({
            method: 'DELETE',
            url: `/admin/notice/${data.id}`,
            headers: {
              'content-type': 'application/json',
              'Authorization': 'Bearer ' + thing,
            },
            body: JSON.stringify({
            }),
          }).then((thing) => {
            if (thing == 401) {
                navigation.navigate('RefreshTokenModal', {navigation : navigation})
              }
            else
                navigation.goBack()
          })
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
                        <Text style={styles.modalText}>공지를 삭제 하시겠습니까</Text>
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
