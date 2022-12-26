import React, { useState, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import { useIsFocused } from '@react-navigation/native';
import { PlayerFeed } from './PlayerFeed'
import { PlayerFixedFeed } from './PlayerFixedFeeds'
import styles from './PlayerFeeds.styles'
import PlayerProfile from '../PlayerProfile'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {DeniedIcon} from "../../../Assets/svgs";

function PlayerFeeds({ playerId, navigation }) {
  const [data, setData] = useState()
  const [size, setSize] = useState(10)
  const [lastFeedId, setLastFeedId] = useState(1000000)
  const [mount, setMount] = useState()
  const isFocused = useIsFocused();
  
  useEffect(() => {
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
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else
          setData(thing.content)
      })
    })
  }, [size, isFocused, mount])

  const onEndReached = (info) => {
    setSize(size + 3)
  }

  if (!data || data.length == 0) {
    return (
        <View>
            <PlayerProfile navigation={navigation} playerId={playerId}/>
            <View style={styles.emptyArea}>
                <DeniedIcon width={80} height={80} fill="#0E0E0E" />
                <Text style={styles.emptyText}>게시물이 없습니다.</Text>
            </View>
        </View>
    )
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
                <PlayerFixedFeed playerId={playerId} navigation={navigation} mount={mount} setMount={setMount}/>
                <PlayerFeed
                  key={`player-feed-${index}`}
                  feed={item}
                  navigation={navigation}
                  setMount={setMount}
                />
              </View>
            )
          else
            return (
              <PlayerFeed
                key={`player-feed-${index}`}
                feed={item}
                navigation={navigation}
                setMount={setMount}
              />)
        }}
        onEndReached={(info) => onEndReached(info)}
        onEndReachedThreshold={0}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default PlayerFeeds
