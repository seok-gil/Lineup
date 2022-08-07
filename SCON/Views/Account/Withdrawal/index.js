import React, {Component, useState} from 'react'
import {
    View,
    Image,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import {WithdrawalModal} from './WithdrawalModal'
import AsyncStorage from '@react-native-community/async-storage'
import {ApiFetch} from '../../../Components'
import {AlertBlueIcon, CheckSmallIcon} from '../../../Assets/Icons'
import styles from './Withdrawal.styles'

export function Withdrawal({navigation}) {
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState(false)

    const onInput = e => {
        const {text} = e.nativeEvent
        setPassword(text)
    }
    const onPress = () => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'POST',
                url: '/unjoin',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: JSON.stringify(password),
            }).then(thing => {})
        })
        setModal(true)
    }
    return (
        <View style={styles.withdrawWrapper}>
            <View style={styles.withdrawInner}>
                <Image source={AlertBlueIcon} style={styles.photo} />
                <Text style={styles.title}>
                    {'라인업 계정 ****을(를)\n탈퇴하시겠습니까?'}
                </Text>
                <View style={styles.info}>
                    <Text style={styles.infoBold}>계정 탈퇴 안내사항</Text>
                    <Text style={styles.infoDim}>
            계정을 삭제하면 회원님의 모든 콘텐츠와 활동 기록 내역이 삭제됩니다.
            삭제된 정보는 복구할 수 없으니 신중하게 결정해주세요.
                    </Text>
                </View>
                <Text style={styles.label}>사용 중인 비밀번호</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        value={password}
                        style={styles.input}
                        placeholder={'비밀번호'}
                        placeholderTextColor="#0E0E0E66"
                        onChange={e => onInput(e)}
                    />
                    <Image
                        source={CheckSmallIcon}
                        style={
                            styles.checkIcon
                            //validate.oldPassword ? styles.checkIcon : styles.checkIconNotShown
                        }
                    />
                </View>
                <View style={styles.errorMessageWrapper}>
                    {
                        /* {!validate.oldPassword && (
              <Text style={styles.errorMessage}>
                현재 비밀번호와 일치하지 않습니다.
              </Text> // 인증 넣고나서 주석해제
            )} */
                        <Text style={styles.errorMessage}>
              현재 비밀번호와 일치하지 않습니다.
                        </Text>
                    }
                </View>
            </View>
            <TouchableOpacity
                onPress={onPress}
                disabled={
                    false
                    //!validate.button
                }
                style={
                    //validate.button ? styles.loginButton : styles.loginButtonNotAvailable
                    styles.loginButton
                }>
                <Text style={styles.loginButtonText}>버튼</Text>
            </TouchableOpacity>
            <WithdrawalModal
                modal={modal}
                setModal={setModal}
                navigation={navigation}
            />
        </View>
    )
}
