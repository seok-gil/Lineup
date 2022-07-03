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
import { FeedRegist, StoryScreen, CompetitionRegist, CompetitionResult, CompetitionResultDetail } from "../Story"

const HomeStack = createStackNavigator();

export function HomeStackScreen({navigation}) {
	return (
	  <HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
		<HomeStack.Screen name="Alert" component={AlertScreen} />
		<HomeStack.Screen name="Player" component={PlayerScreen} />
		<HomeStack.Screen name="Record" component={RecordScreen} />
		<HomeStack.Screen name="Fan" component={FanScreen} />
		<HomeStack.Screen name="FeedScreen" component={FeedScreen} />
		<HomeStack.Screen name="StoryScreen" component={StoryScreen} />
		<HomeStack.Screen name="FeedRegist" component={FeedRegist} />
		<HomeStack.Screen name="CompetitionRegist" component={CompetitionRegist} />
		<HomeStack.Screen name="CompetitionResult" component={CompetitionResult} />
		<HomeStack.Screen name="CompetitionResultDetail" component={CompetitionResultDetail} />
	  </HomeStack.Navigator>
	);
}