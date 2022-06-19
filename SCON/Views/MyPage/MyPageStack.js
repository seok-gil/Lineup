import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { MyPageScreen, ProfileScreen } from './index';
import { AccountStackScreen } from '../Account';

const MyPageStack = createStackNavigator();

export function MyPageStackScreen() {
	return (
	  <MyPageStack.Navigator>
		<MyPageStack.Screen name="MyPage" component={MyPageScreen} />
		<MyPageStack.Screen name="Profile" component={ProfileScreen} />
		<MyPageStack.Screen name="AccountStack" component={AccountStackScreen} options={{headerShown:false}}/>
	  </MyPageStack.Navigator>
	);
}