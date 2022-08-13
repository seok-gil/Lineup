import React, { useState, useEffect } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Modal,
} from 'react-native'
import styles from './Error.styles'

export function ErrorModal({route}) {
    const [modal, setModal] = useState(true)
    const onPressOn = () => {
        setModal(false)
        route.params.navigation.goBack()
    }

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
                            style={styles.cancelButton}>
                            <Text style={styles.buttonText}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
