import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'

import AlertComponent from './AlertComponent'
import styles from './AlertScreen.styles'

import AsyncStorage from '@react-native-async-storage/async-storage'

export function AlertScreen() {
    const [data, setData] = useState([])
    const [mount, setMount] = useState()

    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/alarm',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                if (thing == 401) {
                    navigation.navigate('RefreshTokenModal', {navigation : navigation})
                  }
                else {
                    setData(thing)
                }
            })
        })
    }, [mount])

    const onClickAll = () => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'DELETE',
                url: '/alarm',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing)
                setMount(new Date())
            })
        })
    }
    const view = []
    const alertList = () => {
        for (let i = 0; i < data.length; ++i) {
            view.push(<AlertComponent key={`alert-${i}`} alert={data[i]} setMount={setMount}/>)
        }
        return view
    }
    return (
        <SafeAreaView key={'Alert'} style={styles.alertWrapper}>
            <View style={styles.alertTop}>
                <Text style={styles.alertTitle}>쌓여있는 알림을 확인해보세요</Text>
                <TouchableOpacity onPress={() => onClickAll(alert.alert_id)}>
                    <Text style={styles.alertDeleteAll}>모두 삭제</Text>
                </TouchableOpacity>
            </View>
            {data && <ScrollView>{alertList()}</ScrollView>}
        </SafeAreaView>
    )
}
