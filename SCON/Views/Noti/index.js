import React, {useEffect, useState} from 'react'
import {View, ScrollView} from 'react-native'

import NotiElement from './NotiElement'
import {ApiFetch} from '../../Components/API/ApiFetch'
import {noti as data} from '../../Assets/Data/Noti.json'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Noti.styles'

export function NotiScreen({navigation}) {
    const [data, setData] = useState([])
    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/notice',
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

    return (
        <View style={styles.notiWrapper}>
            <ScrollView>
            {data.map((item, index) => {
                return <NotiElement key={index} data={item} />
            })}
            </ScrollView>
        </View>
    )
}
