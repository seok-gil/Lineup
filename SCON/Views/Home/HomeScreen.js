import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native'
import {Head, Body} from './index'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-community/async-storage'

export function HomeScreen({navigation}) {
    const [data, setData] = useState()
    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/home',
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
    if (!data) return <SafeAreaView />
    return (
        <SafeAreaView style={{flex: 1}}>
            <Head data={data} navigation={navigation} />
            <Body data={data} navigation={navigation} />
        </SafeAreaView>
    )
}
