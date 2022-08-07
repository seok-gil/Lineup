import React from 'react'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import RankBody from './RankBody'

const RankStack = createMaterialTopTabNavigator()

export function RankScreen({navigation}) {
  return (
    <RankStack.Navigator>
      <RankStack.Screen
        name="Day"
        component={RankBody}
        initialParams={{mode: 3}}
      />
      <RankStack.Screen
        name="Week"
        component={RankBody}
        initialParams={{mode: 2}}
      />
      <RankStack.Screen
        name="Month"
        component={RankBody}
        initialParams={{mode: 1}}
      />
      <RankStack.Screen
        name="All"
        component={RankBody}
        initialParams={{mode: 0}}
      />
    </RankStack.Navigator>
  )
}
