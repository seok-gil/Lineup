import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView} from 'react-native'

import PlayerFeeds from './PlayerFeeds'

export function PlayerScreen({navigation, route}) {
    return (
        <SafeAreaView>
            <PlayerFeeds playerId={route.params.playerId} navigation={navigation} />
        </SafeAreaView>
    )
}
