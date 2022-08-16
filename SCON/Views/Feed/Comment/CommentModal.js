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
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ApiFetch } from '../../../Components'

export function CommentModal({ modal, setModal, nick, writerId, commentId, setMount, navigation }) {
    const [report, setReport] = useState({
        text: '댓글 신고',
        method: `POST`,
        url: `/comment/${commentId}/report`
    })
    var temp = report
    useEffect(() => {
        AsyncStorage.getItem("memberId")
        .then((memberId) => {
                if (memberId == writerId) {
                        temp.text= '댓글 삭제'
                        temp.method= `DELETE`
                        temp.url= `/comment/${commentId}`
                    }
                    setReport(temp)
                })
        AsyncStorage.getItem("role")
            .then((role) => {
                if (role == 'ROLE_PLAYER') {
                    temp.text= '댓글 삭제'
                    temp.method= `DELETE`
                    temp.url= `/comment/${commentId}`
                }
                setReport(temp)
            })
    }, []);

    const onReport = () => {
        AsyncStorage.getItem("accessToken")
            .then((thing) => {
                ApiFetch({
                    method: report.method,
                    url: report.url,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: null,
                }).then((thing) => {
                    if (thing == 403)
                        navigation.navigate('ErrorPage', 
                        {text: "댓글 삭제 권한이 없습니다",
                            navigation:navigation
                    })
                    setModal(false)
                    setMount(new Date())
                })
            })
    }
    const onCancel = () => {
        setModal(false)
    }
    return (
        <Modal visible={modal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTop}>
                        <Text style={styles.modalText}>{nick}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.modalBottom} onPress={() => onReport()}>
                            <Text style={styles.modalText}>{report.text}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBottom} onPress={() => onCancel()}>
                            <Text style={styles.modalText}>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
