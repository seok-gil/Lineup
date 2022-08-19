import React, { useState, useEffect } from 'react'
import {
    View,
    Image,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from './../../../Components'
import { PlayerRegistForm } from './PlayerRegistForm'
import { PlayerRegistResultPage } from './PlayerRegistReusltPage'

export function PlayerRegist({ navigation }) {
    const [code, setCode] = useState()
    const [role, setRole] = useState()
    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/player-regist/',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setCode(thing)
                AsyncStorage.getItem('role')
                .then(setRole)
            })
        })
    }, [])
    
    if (role == 'ROLE_PLAYER')
        return <PlayerRegistResultPage navigation={navigation} code={1} />
    else if (!code)
        return <SafeAreaView/>
    else if (!code.registState) {
        return <PlayerRegistForm navigation={navigation} />
    }
    else if (code.registState === 'HOLD') {
        return <PlayerRegistResultPage navigation={navigation} code={0} />
    }
    else if (code.registState === 'REFUSE') {
        return <PlayerRegistResultPage navigation={navigation} code={2} data={code} />
    }
}
