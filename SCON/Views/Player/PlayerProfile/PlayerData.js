import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from './PlayerData.styles'
function PlayerData({data, navigation}) {
    const type = {'all' : '전체', 'day' : '일간' , 'month' : '월간' , 'week' : '주간'}
    const [rank, setRank] = useState({
        type: '월간',
        rank: '0',
    })
    useEffect(() => {
        const ranks = data.rank
        const arr = []
        for (var i in ranks) arr.push([i, ranks[i]])
        arr.sort(function (a, b) {
            return a[1] - b[1]
        })
        if (arr[0]) {
            setRank({
                type: arr[0][0],
                rank: arr[0][1],
            })
        }
    }, [])
    return (
        <View style={styles.playerDataWrapper}>
            <TouchableOpacity
                style={styles.playerDataElement}
                onPress={() =>
                    navigation.navigate('Record', {playerId: data.playerId})
                }>
                <Text style={styles.playerDataTitle}>전적</Text>
                <Text style={styles.playerDataText}>{data.recordCnt}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.playerDataElement}
                onPress={() =>
                    navigation.navigate('Follow', {playerId: data.playerId})
                }>
                <Text style={styles.playerDataTitle}>팬</Text>
                <Text style={styles.playerDataText}>{data.followerCnt}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.playerDataElement}
                onPress={() =>
                    navigation.navigate('RankScreen', {playerId: data.playerId})
                }>
                <Text style={styles.playerDataTitle}>{type[rank.type]}</Text>
                <Text style={styles.playerDataText}>{rank.rank}위</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlayerData
