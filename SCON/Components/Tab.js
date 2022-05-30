import React, {Component} from 'react';
import {Button,
  View,
	StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function exHome({navigation}) {
  return (
    <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}


export function TabScreen({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#E6E6FA',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarInactiveBackgroundColor: '#E6E6FA',
          tabBarActiveTintColor: '#FF9F5C'
      }}>
      <Tab.Screen name="exHome" component={exHome} />
      <Tab.Screen name="exHome2" component={exHome} />
      <Tab.Screen name="exHome3" component={exHome} />
    </Tab.Navigator>
  );
}