import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image,
    Modal,
} from 'react-native'
import styles from './CommentModal.styles'
import AsyncStorage from "@react-native-community/async-storage"
import { ApiFetch } from '../../../Components'
export function CommentModal({ modal, setModal, nick, commentId }) {
    const [text, setText] = useState('댓글 신고')
    useEffect(() => {
        AsyncStorage.getItem("role")
        .then((role) => {
            if (role == 'ROLE_PLAYER')
                setText('댓글 삭제')
        })

    }, []);
    const onReport = () => {
        AsyncStorage.getItem("accessToken")
            .then((thing) => {
                ApiFetch({
                    method: 'POST',
                    url: `/comment/${commentId}/report`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: null,
                }).then(thing => {
                    console.log("thing", thing)
                })
            })
        setModal(false)
    }
    const onCancel = () => {
        setModal(false)
    }
    return (
        <Modal visible={modal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTop}>
                        <Text style={styles.modalText}>닉네임</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.modalBottom} onPress={()=> onReport()}>
                        <Text style={styles.modalText}>댓글 신고</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBottom} onPress={()=> onCancel()}>
                            <Text style={styles.modalText}>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
