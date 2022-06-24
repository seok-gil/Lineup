import React, {Component} from 'react';
import {Button,
  View,
	StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { HomeStackScreen } from '../Views/Home';
import { SearchStackScreen } from '../Views/Search';
import {  RankStackScreen } from '../Views/Rank';
import { MyPageStackScreen } from '../Views/MyPage';
import { NotiScreen } from "../Views/Noti"
const Tab = createBottomTabNavigator();


export function TabScreen({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#B2F0FA',
        //   },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarActiveTintColor: '#17D3F0',
		      tabBarInactiveTintColor: '#848484',
		//   tabBarInactiveBackgroundColor: '#848484',
          headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="SearchStack" component={SearchStackScreen} />
      <Tab.Screen name="Rank" component={RankStackScreen} />
      <Tab.Screen name="MyPageStack" component={MyPageStackScreen} />
    </Tab.Navigator>
  );
}

