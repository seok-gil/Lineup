import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView} from 'react-native'

import PlayerFeeds from './PlayerFeeds'
import AsyncStorage from '@react-native-community/async-storage'
import PlayerProfile from './PlayerProfile'

export function PlayerScreen({navigation, route}) {
  return (
    <SafeAreaView>
      <PlayerFeeds playerId={route.params.playerId} navigation={navigation} />
    </SafeAreaView>
  )
}
