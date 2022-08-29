import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {PlayerRegistList} from './PlayerRegistList'

const PlayerRegistStack = createMaterialTopTabNavigator()

export function PlayerRegistTabScreen({navigation}) {
    return (
        <PlayerRegistStack.Navigator>
            <PlayerRegistStack.Screen
                name="대기"
                component={PlayerRegistList}
                initialParams={{state: 0}}
            />
            <PlayerRegistStack.Screen
                name="승인"
                component={PlayerRegistList}
                initialParams={{state: 1}}
            />
            <PlayerRegistStack.Screen
                name="반려"
                component={PlayerRegistList}
                initialParams={{state: 2}}
            />
        </PlayerRegistStack.Navigator>
    )
}
