import React, {useState} from 'react'
import {Image, TouchableOpacity, View, Text, Modal} from 'react-native'
import styles from './PasswordChangeModal.styles'

import {CheckBigIcon} from '../../../Assets/Icons'

export function PasswordChangeModal({modal, setModal, navigation}) {
    const onPress = () => {
    navigation.navigate('LoginPage')
        setModal(false)
    }
    return (
        <Modal visible={modal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTop}>
                        <Text style={styles.modalText}>비밀번호가 변경되었어요.</Text>
                    </View>
                    <TouchableOpacity style={styles.modalBottom} onPress={onPress}>
                        <Text style={styles.modalText}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
