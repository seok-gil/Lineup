import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Image,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
} from 'react-native'
// Warning: Failed prop type: Invalid props.style key `globalTextStyle` supplied to `Text`.
//86E5W3X
import styles from './Password.styles'
import { CheckSmallIcon } from '../../../Assets/Icons'
import { RegistModal } from './RegistModal'
import { ApiFetch } from '../../../Components'

export function Password({ navigation, route }) {
    if (!route)
        navigation.navigate('LoginPage')
    const [postForm, setPostForm] = useState({
        nickname: route.params.form.nickname,
        email: route.params.form.email,
        password: '',
    })
    const [form, setForm] = useState({
        password: '',
        certification: '',
    })

    const [validate, setValidate] = useState({
        password: true,
        certification: true,
    })

    const [button, setButton] = useState(false)
    const [checkIcon, setCheckIcon] = useState({
        password: false,
        certification: false,
    })

    async function checkValidate(temp) {
        var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
        if (form.password && form.password.match(reg)) {
            temp.password = true
        } else temp.password = false
        if (form.certification.length == form.password.length) {
            temp.certification = true
        } else temp.certification = false
        return (temp)
    }
    useEffect(() => {
        let temp = validate
        if (form.password.length != 0)
            checkValidate(temp).then((temp) => {
                setValidate(temp)
                setCheckIcon(temp)
            })
        if (validate.password && validate.certification)
            setButton(true)
        else
            setButton(false)
    }, [form])

    const onInput = (key, e) => {
        const { text } = e.nativeEvent
        setForm({
            ...form,
            [key]: text,
        })
        if (key == 'password')
            setPostForm({
                ...postForm,
                [key]: text,
            })
    }
    const [modal, setModal] = useState(false)
    const onPress = () => {
        setModal(true)
        ApiFetch({
            method: 'POST',
            url: '/auth/signup',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postForm),
        })
            .then(console.log('post', postForm))
            .then(setModal(true))
            .catch(console.log(Error))
    }
    return (
        <SafeAreaView style={styles.passwordWrapper}>
            <View style={styles.passwordInner}>
                <View style={styles.passwordTop}>
                    <Text style={styles.label}>
                        비밀번호를 설정 해주세요.{'\n'}8~16자의 영문, 숫자, 특수기호를
                        조합하여 사용.
                    </Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.password}
                            placeholder={'비밀번호'}
                            style={styles.input}
                            secureTextEntry={true}
                            placeholderTextColor="#0E0E0E66"
                            onChange={e => onInput('password', e)}
                        />
                        <Image
                            source={CheckSmallIcon}
                            style={
                                checkIcon.password ? styles.checkIcon : styles.checkIconNotShown
                            }
                        />
                    </View>
                    <View style={styles.errorMessageWrapper}>
                        {validate.password == false && (
                            <Text style={styles.errorMessage}>
                                올바른 비밀번호가 아닙니다.
                            </Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.certification}
                            placeholder={'비밀번호 확인'}
                            style={styles.input}
                            placeholderTextColor="#0E0E0E66"
                            onChange={e => onInput('certification', e)}
                        />
                        <Image
                            source={CheckSmallIcon}
                            style={
                                checkIcon.certification
                                    ? styles.checkIcon
                                    : styles.checkIconNotShown
                            }
                        />
                    </View>
                    <View style={styles.errorMessageWrapper}>
                        {validate.certification == false && (
                            <Text style={styles.errorMessage}>
                                상단 비밀번호와 일치하지 않습니다.
                            </Text>
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => onPress()}
                    disabled={!button}
                    style={
                        button
                            ? styles.loginButton
                            : styles.loginButtonNotAvailable
                    }>
                    <Text style={styles.loginButtonText}>확인</Text>
                </TouchableOpacity>
            </View>
            <RegistModal modal={modal} setModal={setModal} navigation={navigation} />
        </SafeAreaView>
    )
}
