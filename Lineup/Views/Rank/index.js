import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import RankBody from './RankBody'

const RankStack = createMaterialTopTabNavigator()

export function RankScreen({navigation}) {
  return (
    <RankStack.Navigator
      screenOptions={{tabBarIndicatorStyle: {backgroundColor: '#17D3F0'}}}>
      <RankStack.Screen
        name="일간"
        component={RankBody}
        initialParams={{mode: 3}}
      />
      <RankStack.Screen
        name="주간"
        component={RankBody}
        initialParams={{mode: 2}}
      />
      <RankStack.Screen
        name="월간"
        component={RankBody}
        initialParams={{mode: 1}}
      />
      <RankStack.Screen
        name="전체"
        component={RankBody}
        initialParams={{mode: 0}}
      />
    </RankStack.Navigator>
  )
}
