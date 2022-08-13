import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAwareScrollView
} from 'react-native'
import { ApiFetch } from '../../../Components'
import styles from './ForgetPassword.styles'
import validator from 'validator'

export function ForgetPassword({ navigation }) {
    const [form, setForm] = useState({
        email: '',
        certification: '',
    })

    const [validate, setValidate] = useState({
        nickname: true,
        email: true,
        certification: true,
    })
    const [post, setPost] = useState(false)
    const [button, setButton] = useState(false)

    const onInput = (key, e) => {
        const { text } = e.nativeEvent
        setForm({
            ...form,
            [key]: text,
        })
        var tempVal = validate
        if (key == 'email') {
            if (validator.isEmail(form.email)) {
                tempVal['eamil'] = true
                setPost(true)
            }
            else {
                tempVal['eamil'] = false
                setPost(false)
            }
        }
        if (key == 'certification') {
            tempVal['certification'] = true
        }
        setValidate(tempVal)
        if (validate.nickname && validate.email && validate.certification)
            setButton(true)
        else
            setButton(false)
    }

    const pushEmail = () => {
        ApiFetch({
            method: 'POST',
            url: '/email-auth/pw-reset',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
            }),
        })
        setPost(false)
    }


    return (
        <SafeAreaView style={styles.forgetWrapper}>
            <View style={styles.forgetInner}>
                <View style={styles.forgetTop}>
                    <Text style={styles.title}>
                        {'라인업 가입 정보를\n다시 확인할게요.'}
                    </Text>
                    <KeyboardAwareScrollView style={styles.email}>
                        <TextInput
                            value={form.email}
                            style={styles.input}
                            placeholder={'이메일 입력'}
                            placeholderTextColor="#0E0E0E66"
                            onChange={e => onInput('email', e)}
                        />
                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={() => pushEmail()}>
                            <Text
                                style={post ? styles.sendButtonText : styles.sendButtonOffText}>
                                전송
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAwareScrollView>
                    <View style={styles.errorMessageWrapper}>
                        {validate.email == false && (
                            <Text style={styles.errorMessage}>
                                가입 된 정보가 없습니다. 다시 입력해주세요.
                            </Text>
                        )}
                    </View>
                    <Text style={styles.label}>
                        메일 확인 후 인증번호를 입력해주세요.
                    </Text>
                    <TextInput
                        value={form.certification}
                        style={styles.input}
                        placeholder={'인증번호 입력'}
                        placeholderTextColor="#0E0E0E66"
                        onChange={e => onInput('certification', e)}
                    />
                    <View style={styles.errorMessageWrapper}>
                        {validate.certification == false && (
                            <Text style={styles.errorMessage}>
                                인증번호가 일치하지 않습니다.
                            </Text>
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PasswordReset', {email : form.email})}
                    disabled={!button}
                    style={
                        button
                            ? styles.loginButton
                            : styles.loginButtonNotAvailable
                    }>
                    <Text style={styles.loginButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
