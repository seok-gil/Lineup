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
import { FeedRegist, StoryScreen, CompetitionRegist, CompetitionResult, CompetitionResultDetail } from "../Story"

const RankStack = createStackNavigator();

export function RankStackScreen() {
	return (
		<RankStack.Navigator>
			<RankStack.Screen name="Rank" component={RankScreen} />
			<RankStack.Screen name="Player" component={PlayerScreen} />
			<RankStack.Screen name="Record" component={RecordScreen} />
			<RankStack.Screen name="Fan" component={FanScreen} />
			<RankStack.Screen name="FeedScreen" component={FeedScreen} />
			<RankStack.Screen name="StoryScreen" component={StoryScreen} />
			<RankStack.Screen name="FeedRegist" component={FeedRegist} />
			<RankStack.Screen name="CompetitionRegist" component={CompetitionRegist} />
			<RankStack.Screen name="CompetitionResult" component={CompetitionResult} />
			<RankStack.Screen name="CompetitionResultDetail" component={CompetitionResultDetail} />
		</RankStack.Navigator>
	);
}
