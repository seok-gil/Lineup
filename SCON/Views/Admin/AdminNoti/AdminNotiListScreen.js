import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {SafeAreaView, ScrollView, Text} from 'react-native'

import {AdminOne} from './AdminNotiOne'
import styles from './AdminNotiListScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

export function AdminNotiListScreen({navigation}) {
    const [data, setData] = useState([])
    const [mount, setMount] = useState()
    const isFocused = useIsFocused()
    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/admin/notice',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing)
            })
        })
    }, [isFocused, mount])

    return (
        <SafeAreaView style={styles.notiScreenWrapper}>
            <ScrollView>
                {data.map((item, index) => {
                    return <AdminOne key={index} data={item} setMount={setMount} navigation={navigation} />
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
