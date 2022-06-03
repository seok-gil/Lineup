import React, {Component} from 'react';
import {Button,
  View,
	StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../Views/Home';
import { SearchScreen } from '../Views/Search';
import { RankScreen } from '../Views/Rank';

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
		  tabBarInactiveTintColor: '#848484'
		//   tabBarInactiveBackgroundColor: '#848484',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="MyPage" component={RankScreen} />
    </Tab.Navigator>
  );
}


// example

export function ExHome2({navigation}) {
	return (
	  <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
		<Button onPress={() => navigation.navigate('Home')} title="Home" />
	  </View>
	);
}

export function ExHome3({navigation}) {
	return (
	  <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
		<Button onPress={() => navigation.navigate('Search')} title="Serach" />
	  </View>
	);
}