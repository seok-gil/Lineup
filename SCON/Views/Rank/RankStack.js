import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { RankScreen, AlertScreen } from './index';
import { PlayerScreen } from '../Player';
import { FanScreen } from '../Fan';
import { RecordScreen } from '../Record';
import { FeedScreen } from "../Feed"

const RankStack = createStackNavigator();

export function RankStackScreen() {
	return (
	  <RankStack.Navigator>
		<RankStack.Screen name="Rank" component={RankScreen} />
		<RankStack.Screen name="Player" component={PlayerScreen} />
		<RankStack.Screen name="Record" component={RecordScreen} />
		<RankStack.Screen name="Fan" component={FanScreen} />
		<RankStack.Screen name="Feed" component={FeedScreen} />
	  </RankStack.Navigator>
	);
}