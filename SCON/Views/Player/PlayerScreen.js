import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView} from 'react-native'

import PlayerFeeds from './PlayerFeeds'
import styles from './PlayerScreen.styles'

export function PlayerScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.playerScreenWrapper}>
      <PlayerFeeds playerId={route.params.playerId} navigation={navigation} />
    </SafeAreaView>
  )
}
