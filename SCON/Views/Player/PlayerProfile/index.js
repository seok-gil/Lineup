import React, {useEffect, useState} from 'react'
import {Image, View, Text} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'

import PlayerData from './PlayerData'
import PlayerFollowButton from './PlayerFollowButton'
import styles from './PlayerProfile.styles'
import AsyncStorage from '@react-native-community/async-storage'

function PlayerProfile({navigation, playerId}) {
    const [data, setData] = useState()
    useEffect(() => {
        AsyncStorage.getItem('accessToken')
            .then((thing) => {
                ApiFetch({
                    method: 'GET',
                    url: `/player-home/${playerId}`,
                    headers: { 
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: null,
                }).then(thing => {
                    setData(thing)
                })
            })
    }, [])
    if (!data) return <View/>
    return (
        <View style={styles.profileInnerWrapper}>
            <Image source={{uri:data.backPic}} style={styles.backgroundImage} /> 
            <Image source={{uri:data.profilePic}} style={styles.profileImage} />
            <View style={styles.profileBottom}>
                <View style={styles.playerInfo}>
                    <View style={styles.playerInfoLeft}>
                        <Text style={styles.playerMajor}>{data.sport}</Text>
                        <Text style={styles.playerSchool}>{data.belong}</Text>
                    </View>
                    <PlayerData data={data} navigation={navigation} />
                </View>
                <PlayerFollowButton data={data} navigation={navigation} />
            </View>
        </View>
    )
}

export default PlayerProfile
