import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { HomeScreen, AlertScreen } from './index';
import { PlayerScreen } from '../Player';
import { FanScreen } from '../Fan';
import { RecordScreen } from '../Record';
import { FeedScreen } from "../Feed"
const HomeStack = createStackNavigator();

export function HomeStackScreen() {
	return (
	  <HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={HomeScreen} />
		<HomeStack.Screen name="Alert" component={AlertScreen} />
		<HomeStack.Screen name="Player" component={PlayerScreen} />
		<HomeStack.Screen name="Record" component={RecordScreen} />
		<HomeStack.Screen name="Fan" component={FanScreen} />
		<HomeStack.Screen name="Feed" component={FeedScreen} />
	  </HomeStack.Navigator>
	);
}