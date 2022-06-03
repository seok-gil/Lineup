import React, {Component} from 'react';
import {Button,
  View,
	StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../Views/Home';

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
      <Tab.Screen name="exHome" component={HomeScreen} />
      <Tab.Screen name="exHome2" component={ExHome2} />
      <Tab.Screen name="exHome3" component={ExHome3} />
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
		<Button onPress={() => navigation.navigate('Home')} title="Home" />
	  </View>
	);
}