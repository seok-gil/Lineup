import React, {useState, useEffect} from 'react'
import {
    View,
    Image,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import {ApiFetch} from './../../../Components'
import {PlayerRegistForm} from './PlayerRegistForm'
import {PlayerRegistResultPage} from './PlayerRegistReusltPage'

export function PlayerRegist({navigation}) {
    const [code, setCode] = useState()
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
                console.log("regist code", thing)
            })
        })
    }, [])
    if (code == 404) return <PlayerRegistForm navigation={navigation}/>
    else if (code == 'HOLD') return <PlayerRegistResultPage navigation={navigation} code={2}/>
    else return <SafeAreaView />
}
