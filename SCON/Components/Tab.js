import React, {Component} from 'react';
import {Button,
  View,
	StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigationState} from '@react-navigation/native';

import { HomeScreen } from '../Views/Home';
import { SearchScreen } from '../Views/Search';
import { RankScreen } from '../Views/Rank';
import { MyPageScreen } from '../Views/MyPage';

const Tab = createBottomTabNavigator();

export function TabScreen({navigation}) {
  const index2 = useNavigationState(state => state.index);
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
          // headerShown: false,
        }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="RankScreen" component={RankScreen} />
      <Tab.Screen name="MyPageScreen" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

