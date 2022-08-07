import React, {useState} from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image,
    Modal,
} from 'react-native'
import styles from './WithdrawalModal.styles'
import {WithdrawalSuccessModal} from './WithdrawalSuccessModal'
export function WithdrawalModal({modal, setModal, navigation}) {
    const [success, setSccess] = useState(false)

    const onPressOn = () => {
        setModal(false)
        setSccess(true)
    }
    const onPressOff = () => {
        navigation.navigate('LoginPage')
        setModal(false)
    }
    return (
        <View>
            <Modal visible={modal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalTop}>
                            <Text style={styles.modalText}>정말 탈퇴하시겠어요?</Text>
                        </View>
                        <View style={styles.modalBottom}>
                            <TouchableOpacity
                                onPress={onPressOff}
                                style={styles.cancelButton}>
                                <Text style={styles.buttonText}> 취소</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressOn} style={styles.submitButton}>
                                <Text style={styles.buttonText}>확인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <WithdrawalSuccessModal
                modal={success}
                setModal={setSccess}
                navigation={navigation}
            />
        </View>
    )
}
