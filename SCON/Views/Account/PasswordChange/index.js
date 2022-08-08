import React, {useRef, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'
import validator from 'validator'

import {CheckSmallIcon} from '../../../Assets/Icons'
import {PasswordChangeModal} from './PasswordChangeModal'
import {PasswordApi} from './PasswordApi'

import styles from './PasswordChange.styles'

export function PasswordChange({navigation}) {
    const [form, setForm] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const [validate, setValidate] = useState({
        oldPassword: true,
        newPassword: true,
        confirmPassword: true,
        button: false,
    })

    const [modal, setModal] = useState(false)
    const onInput = (key, e) => {
        const {text} = e.nativeEvent
        const tempForm = form

        tempForm[key] = text
        setForm({
            ...form,
            [key]: text,
        })
        var tempVal = validate
        if (key == 'oldPassword') {
            tempVal.oldPassword = true
        }
        if (key == 'newPassword') {
            if (validator.isLength(text, 8, 12)) {
                tempVal.newPassword = true
            } else {
                tempVal.newPassword = false
            }
        }
        if (tempForm.newPassword.length == tempForm.confirmPassword.length) {
            tempVal.confirmPassword = true
        } else {
            tempVal.confirmPassword = false
        }
        if (tempVal.oldPassword && tempVal.confirmPassword && tempVal.newPassword) {
            tempVal.button = true
        }
    }

    const onSummit = () => {
        if (
            PasswordApi({
                password: form.oldPassword,
                newPassword: form.newPassword,
            })
        ) {
            setModal(true)
        } else {
            setValidate({
                ...validate,
                ['oldPassword']: false,
                ['buttonn']: false,
            })
        }
    }
    return (
        <View style={styles.passwordWrapper}>
            <View style={styles.passwordInner}>
                <View style={styles.passwordTop}>
                    <Text style={styles.title}>새로운 비밀번호를 입력해주세요.</Text>
                    <Text style={styles.label}>
            8~16자의 영문, 숫자, 특수기호를 조합하여 사용.
                    </Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.oldPassword}
                            style={styles.input}
                            placeholder={'현재 비밀번호'}
                            placeholderTextColor="#0E0E0E66"
                            onChange={e => onInput('oldPassword', e)}
                        />
                        <Image
                            source={CheckSmallIcon}
                            style={
                                validate.oldPassword
                                    ? styles.checkIcon
                                    : styles.checkIconNotShown
                            }
                        />
                    </View>
                    <View style={styles.errorMessageWrapper}>
                        {!validate.oldPassword && (
                            <Text style={styles.errorMessage}>
                현재 비밀번호와 일치하지 않습니다.
                            </Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.newPassword}
                            style={styles.input}
                            placeholder={'신규 비밀번호'}
                            placeholderTextColor="#0E0E0E66"
                            secureTextEntry={true}
                            onChange={e => onInput('newPassword', e)}
                        />
                        <Image
                            source={CheckSmallIcon}
                            style={
                                validate.newPassword
                                    ? styles.checkIcon
                                    : styles.checkIconNotShown
                            }
                        />
                    </View>
                    <View style={styles.errorMessageWrapper}>
                        {!validate.newPassword && (
                            <Text style={styles.errorMessage}>
                올바른 비밀번호가 아닙니다.
                            </Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.confirmPassword}
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder={'신규 비밀번호 확인'}
                            placeholderTextColor="#0E0E0E66"
                            onChange={e => onInput('confirmPassword', e)}
                        />
                        <Image
                            source={CheckSmallIcon}
                            style={
                                validate.confirmPassword
                                    ? styles.checkIcon
                                    : styles.checkIconNotShown
                            }
                        />
                    </View>
                    <View style={styles.errorMessageWrapper}>
                        {!validate.confirmPassword && (
                            <Text style={styles.errorMessage}>
                상단 비밀번호와 일치하지 않습니다.
                            </Text>
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => onSummit()}
                    disabled={!validate.button}
                    style={
                        validate.button
                            ? styles.loginButton
                            : styles.loginButtonNotAvailable
                    }>
                    <Text style={styles.loginButtonText}>확인</Text>
                </TouchableOpacity>
            </View>
            <PasswordChangeModal
                modal={modal}
                setModal={() => setModal()}
                navigation={navigation}
            />
        </View>
    )
}
