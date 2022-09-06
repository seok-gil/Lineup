import React, {useEffect, useState} from 'react'
import {Image, View, Text} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'

import PlayerData from './PlayerData'
import PlayerFollowButton from './PlayerFollowButton'
import styles from './PlayerProfile.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native';

function PlayerProfile({navigation, playerId}) {
  const [data, setData] = useState()
  const [mount, setMount] = useState()
  const isFocused = useIsFocused();

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/player-home/${playerId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        setData(thing)
      })
    })
  }, [mount, isFocused])
  return (
    <View style={styles.profileInnerWrapper}>
      {data && (
        <View>
          <Image source={{uri: data.profileBack}} style={styles.backgroundImage} />
          <Image source={{uri: data.profilePic}} style={styles.profileImage} />
          <View style={styles.profileBottom}>
            <View style={styles.playerInfo}>
              <View style={styles.playerInfoLeft}>
                <Text style={styles.playerMajor}>{data.sport}</Text>
                <Text style={styles.playerSchool}>{data.belong}</Text>
              </View>
              <PlayerData data={data} navigation={navigation} />
            </View>
            <PlayerFollowButton
              data={data}
              navigation={navigation}
              setMount={setMount}
            />
          </View>
        </View>
      )}
    </View>
  )
}

export default PlayerProfile
