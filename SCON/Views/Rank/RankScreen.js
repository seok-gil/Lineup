import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import RankBody from './RankBody';

const RankStack = createMaterialTopTabNavigator();

export function RankScreen({navigation}) {
  return (
    <RankStack.Navigator>
      <RankStack.Screen name="Day" component={RankBody} />
      <RankStack.Screen name="Week" component={RankBody} />
      <RankStack.Screen name="Month" component={RankBody} />
      <RankStack.Screen name="All" component={RankBody} />
    </RankStack.Navigator>
  );
}
