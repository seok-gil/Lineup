import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text} from 'react-native'

import CompetitionElement from './CompetitionElement'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import styles from './CompetitionResult.styles'
import AsyncStorage from '@react-native-community/async-storage'

export function CompetitionResult({navigation}) {
    const [data, setData] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/player/event/record',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                // console.log("evnet/record/", thing)
                setData(thing)
            })
        })
    }, [])

    return (
        <SafeAreaView style={styles.competitionResultWrapper}>
            {data &&
        data.map((item, index) => {
            return (
                <CompetitionElement
                    data={item}
                    key={index}
                    navigation={navigation}
                />
            )
        })}
        </SafeAreaView>
    )
}
