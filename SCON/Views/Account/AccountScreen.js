import React, {useState, useEffect} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {LogoutModal} from './LogoutModal'
import {ApiFetch} from '../../Components'
import {DownIcon} from '../../Assets/Icons'

import styles from './Account.styles'

export function AccountScreen({navigation}) {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState()
    const onLogout = () => {
        setModal(true)
    }

    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/acc-manage',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing)
            })
        })
    }, [])
    if (!data) {
        return <View />
    }
    return (
        <SafeAreaView style={styles.accountScreenWrapper}>
            <TouchableOpacity style={styles.menuElement} onPress={onLogout}>
                <View style={styles.columnView}>
                    <Text style={styles.elementText}>로그아웃</Text>
                    <Text style={styles.emailText}>{data.email}</Text>
                </View>
                <Image style={styles.icon} source={DownIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuElement}
                onPress={() => navigation.navigate('PasswordChange')}>
                <Text style={styles.elementText}>비밀번호 변경</Text>
                <Image style={styles.icon} source={DownIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuElement}
                onPress={() => navigation.navigate('PlayerRegist')}>
                <Text style={styles.elementText}>선수 등록</Text>
                <Image style={styles.icon} source={DownIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuElement}
                onPress={() => navigation.navigate('Withdrawal')}>
                <Text style={styles.elementText}>회원 탈퇴</Text>
                <Image style={styles.icon} source={DownIcon} />
            </TouchableOpacity>
            <LogoutModal modal={modal} setModal={setModal} navigation={navigation} />
        </SafeAreaView>
    )
}
