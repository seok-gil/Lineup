import React, {useState, useEffect} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import styles from './ForgetPassword.styles'
import validator from 'validator'

export function ForgetPassword({navigation}) {
    const [form, setForm] = useState({
        email: '',
        certification: '',
    })

    const [validate, setValidate] = useState({
        email: true,
        certification: true,
    })
    const [post, setPost] = useState(false)
    const [button, setbutton] = useState(false)
    console.log(button)
    const onInput = (key, e) => {
        const {text} = e.nativeEvent
        setForm({
            ...form,
            [key]: text,
        })
        if (validate.email && validate.certification)
            setbutton(true)
    }

    useEffect(() => {
        if (validator.isEmail(form.email)) setPost(true)
        else setPost(false)
    }, [form.email])

    return (
        <SafeAreaView style={styles.forgetWrapper}>
            <View style={styles.forgetInner}>
                <View style={styles.forgetTop}>
                    <Text style={styles.title}>
                        {'라인업 가입 정보를\n다시 확인할게요.'}
                    </Text>
                    <View style={styles.email}>
                        <TextInput
                            value={form.email}
                            style={styles.input}
                            placeholder={'이메일 입력'}
                            placeholderTextColor="#0E0E0E66"
                            onChange={e => onInput('email', e)}
                        />
                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={() => console.log('이메일전송')}>
                            <Text
                                style={post ? styles.sendButtonText : styles.sendButtonOffText}>
                전송
                            </Text>
                        </TouchableOpacity>
                    </View>
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
                    onPress={() => navigation.navigate('PasswordReset')}
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
