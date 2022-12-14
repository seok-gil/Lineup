import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {ApiFetch, TimeRelative} from '../../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './ReportOne.styles'

export function ReportOne({data, setMount, navigation}) {
    if (!data) return <View />
    const onAccept = () => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'DELETE',
                url: `/admin/reports/accept/${data.commentId}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then((thing) => {
                if (thing == 401) {
                    navigation.navigate('RefreshTokenModal', {navigation : navigation})
                  }
                else {
                navigation.navigate('ModalPage', {text : '플레이어 신고처리가 허용되었습니다!'})
                setMount(new Date())
                }
            })
        })
    }

    const onReject = () => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'DELETE',
                url: `/admin/reports/reject/${data.commentId}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                navigation.navigate('ModalPage', {text : '플레이어 신고처리가 삭제되었습니다!'})
                setMount(new Date())
            })
        })
    }

    return (
        <View style={styles.reportOneWrapper}>
            <View style={styles.imageWrapper}>
                <Image source={{uri: data.profilePic}} style={styles.profileImage} />
            </View>
            <View style={styles.elementLeft}>
                <Text style={styles.title}>
                    {data.nick} <TimeRelative time={data.createDate} />
                </Text>
                <Text style={styles.comment}>{data.content}</Text>
            </View>
            <View style={styles.elementRight}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('Reporter', {commentId: data.commentId})
                    }>
                    <Text style={styles.buttonText}>신고자</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => onAccept()}>
                    <Text style={styles.buttonText}>허용</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => onReject()}>
                    <Text style={styles.buttonText}>삭제</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
