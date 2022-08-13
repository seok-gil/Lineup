import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './AlertComponent.styles'
import {SmileIcon, ChatBubbleIcon, XIcon} from '../../../Assets/Icons'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {Time} from '../../../Components/Time'
import AsyncStorage from '@react-native-community/async-storage'

function AlertComponent({alert}) {
    if (!alert) return <View />
    const onClickX = () => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'DELETE',
                url: `/alarm/${alert.id}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body:null
            })
        })
    }

    return (
        <View
            style={[
                styles.alertComponentWrapper,
                alert.check ? styles.alertRead : styles.alertNotRead,
            ]}>
            <View style={styles.alertComponentTop}>
                <Image
                    source={alert.type === '댓글' ? ChatBubbleIcon : SmileIcon}
                    style={styles.alertComponentImage}
                />
                <Text style={styles.alertTitle}>
                    {alert.type === '댓글' ? '댓글 알림' : '선수 대회 알림'}
                </Text>
            </View>
            <View style={styles.alertComponentMiddle}>
                <Text style={styles.alertContent}>{alert.content}</Text>
                <View style={styles.alertComponentBottom}>
                    <Text style={styles.alertCreatedAt}>
            (<Time time={alert.date} separator="-" />)
                    </Text>
                    <TouchableOpacity onPress={() => onClickX()}>
                        <Image source={XIcon} style={styles.alertXIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AlertComponent
