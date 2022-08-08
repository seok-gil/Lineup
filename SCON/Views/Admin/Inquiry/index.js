import React, {useEffect, useState} from 'react'
import {
    SafeAreaView,
    ScrollView,
    Image,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './Inquiry.styles'
import {InquiryOne} from './InquiryOne'
import AsyncStorage from '@react-native-community/async-storage'
import { ApiFetch } from '../../../Components'

export function Inquiry({navigation}) {
    const [data, setData] = useState([])
    const [lastFeed, setLastFeed] = useState(1)
    const [nextFeed, setNextFeed] = useState(10)
    var temp = data
    useEffect(() => {
        AsyncStorage.getItem('accessToken')
            .then((thing) => {
                ApiFetch({
                    method: 'GET',
                    url: '/admin/inquiry',
                    headers: { 
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: null,
                }).then(thing => {
                    console.log('inquiry', thing)
                    setData(thing)
                })
            })
    }, [])

    return (
        <SafeAreaView style={styles.inquiryWrapper}>
            <ScrollView>
            {data.map((item, index) => {
                return <InquiryOne data={item} key={`inquiry-${index}`} />
            })}
            </ScrollView>
        </SafeAreaView>
    )
}
