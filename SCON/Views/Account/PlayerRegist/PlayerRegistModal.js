import React, {useState} from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image,
    Modal,
} from 'react-native'
import styles from './PlayerRegistModal.styles'

export function PlayerRegistModal({modal, setModal, navigation}) {
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
                            <Text>선수 인증 신청이 완료되었어요!</Text>
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
