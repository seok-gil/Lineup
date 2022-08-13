import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import { useIsFocused } from '@react-navigation/native';
import { PlayerFeed } from './PlayerFeed'
import { PlayerFixedFeed } from './PlayerFixedFeeds'
import PlayerFollowButton from '../PlayerProfile/PlayerFollowButton'

import styles from './PlayerFeeds.styles'
import PlayerProfile from '../PlayerProfile'
import AsyncStorage from '@react-native-community/async-storage'

function PlayerFeeds({ playerId, navigation }) {
    const [data, setData] = useState()
    const [size, setSize] = useState(3)
    const [lastFeedId, setLastFeedId] = useState(1000000)
    const isFocused = useIsFocused();
    useEffect(() => {
        let abortController = new AbortController()
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: `/player-home/${playerId}/feeds?size=${size}&lastFeedId=${lastFeedId}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing.content)
            })
        }, [])
        return () => abortController.abort();
    },[size])

    useEffect(() => {
        let abortController = new AbortController()
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: `/player-home/${playerId}/feeds?size=${size}&lastFeedId=${lastFeedId}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing.content)
            })
        }, [])
        return () => abortController.abort();
    },[isFocused])
    
    const onEndReached = (info) => {
        setSize(size + 3)
        console.log("info", info, size)
    }

    if (!data || data.length == 0) {
        return <PlayerProfile navigation={navigation} playerId={playerId} />
    }
    return (
        <View style={styles.playerFeedsWrapper}>
            <FlatList
                data={data}
                snapToAlignment="start"
                decelerationRate="fast"
                renderItem={({ item, index }) => {
                    if (index == 0)
                        return (
                            <View>
                                <PlayerProfile navigation={navigation} playerId={playerId} />
                                <PlayerFixedFeed playerId={playerId} navigation={navigation} />
                                <PlayerFeed
                                    key={`player-feed-${index}`}
                                    feed={item}
                                    navigation={navigation}
                                />
                            </View>
                        )
                    else
                        return (
                            <PlayerFeed
                                key={`player-feed-${index}`}
                                feed={item}
                                navigation={navigation}
                            />)
                }}
                // onScroll={onScroll}
                onEndReached={(info) => onEndReached(info)}
                onEndReachedThreshold={0}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default PlayerFeeds
