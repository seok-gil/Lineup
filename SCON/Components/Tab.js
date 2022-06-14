import React, {Component} from 'react';
import {Button,
  View,
	StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../Views/Home';
import { LoginScreen } from '../Views/Login'; 
import { SearchScreen } from '../Views/Search';
import { RankScreen } from '../Views/Rank';
import { MyPageScreen } from '../Views/MyPage';

const Tab = createBottomTabNavigator();

export function StartScreen(){

}

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
		  tabBarInactiveTintColor: '#848484'
		//   tabBarInactiveBackgroundColor: '#848484',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={LoginScreen} /> 
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

