import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView} from 'react-native'

import CompetitionResultModal from './CompetitionResultModal'
import DetailInfo from './DetailInfo'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import styles from './CompetitionResultDetail.styles'
import AsyncStorage from '@react-native-community/async-storage'
import {CompetitionResultButton} from './CompetitionResultButton'

export function CompetitionResultDetail({navigation, route}) {
    const [data, setData] = useState()
    const [modal, setModal] = useState({
        open: false,
        modal_item: '',
    })
    const type = route.params.type
    const eventId = route.params.data.eventId
    // const [url, setUrl] = useState(`/player/event/record/`)
    useEffect(() => {
        var url = '/player/event/record'
        if (!type) url += `/${eventId}`
        else {
            // setUrl(() => url + `/detail/${eventId}`)
            url += `/detail/${eventId}`
        }
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: url,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                var result = []
                thing.map(item => {
                    var temp = {
                        ...item,
                        ranking: item.ranking ? item.ranking : '',
                        score: item.score ? item.score : '',
                        noAnswer: item.noAnswer ? item.noAnswer : 'true',
                    }
                    result = [...result, temp]
                })
                setData(result)
            })
        })
    }, [])

    const openModal = item => {
        if (item)
            setModal({
                open: true,
                modal_item: item,
            })
        else
            setModal({
                open: false,
                modal_item: '',
            })
    }
    if (!data) return <SafeAreaView />
    return (
        <SafeAreaView style={styles.competitionResultWrapper}>
            <View style={styles.competitionResultInner}>
                <Text style={styles.competitionLabels}>대회</Text>
                <Text style={styles.leagueTitle}>{route.params.data.eventName}</Text>
                <Text style={styles.competitionLabels}>종목</Text>
                {data.map((item, index) => {
                    return (
                        <DetailInfo
                            data={item}
                            result={route.params.existResult}
                            key={index}
                            openModal={openModal}
                            type={type}
                        />
                    )
                })}
            </View>
            <CompetitionResultModal
                modal={modal}
                openModal={openModal}
                data={data}
                setData={setData}
                type={type}
            />
            <CompetitionResultButton
                eventId={eventId}
                data={data}
                type={type}
                navigation={navigation}
            />
        </SafeAreaView>
    )
}
