import React, { useState, useEffect } from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native'
import { ApiFetch } from '../../../Components/API/ApiFetch'

import { PlayerFeed } from './PlayerFeed'
import { PlayerFixedFeed } from './PlayerFixedFeeds'

import styles from './PlayerFeeds.styles'
import PlayerProfile from '../PlayerProfile'
import AsyncStorage from '@react-native-community/async-storage'

function PlayerFeeds({ playerId, navigation }) {
    const [data, setData] = useState()
    const [size, setSize] = useState(3)
    const [mount, setMount] = useState(true)
    const [lastFeedId, setLastFeedId] = useState(0)
    useEffect(() => {
        let abortController = new AbortController()
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: `/player-home/${playerId}/feeds?size=${size}&lastFeedId=${100}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing.content)
                console.log("playerFeed", thing)
            })
        }, [])
        return () => abortController.abort();
    },[])
    
    console.log("data", data)
    const onEndReached = () => {
        setSize(size + 3)
    // console.log("size!!!!!!!!!!", size)
    }

    if (!data || data.length == 0) {
        return <PlayerProfile navigation={navigation} playerId={playerId} />
    }
    return (
        <View style={styles.playerFeedsWrapper}>
            <PlayerFixedFeed playerId={playerId} navigation={navigation} />
            <FlatList
                data={data}
                snapToAlignment="start"
                decelerationRate="fast"
                renderItem={({ item, index }) => {
                    if (index == 0)
                        return (
                            <View>
                                <PlayerProfile navigation={navigation} playerId={playerId} />
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
                onEndReached={onEndReached}
                onEndReachedThreshold={0.9}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default PlayerFeeds
