import React, {useEffect} from 'react'
import {SafeAreaView} from 'react-native'

import PlayerFeeds from './PlayerFeeds'
import styles from './PlayerScreen.styles'
import { useIsFocused } from '@react-navigation/native';

export function PlayerScreen({navigation, route}) {
  const isFocused = useIsFocused();

  useEffect(() => {
  navigation.setOptions({title: route.params.name})
  },[isFocused])
  return (
    <SafeAreaView style={styles.playerScreenWrapper}>
      <PlayerFeeds playerId={route.params.playerId} navigation={navigation} />
    </SafeAreaView>
  )
}
