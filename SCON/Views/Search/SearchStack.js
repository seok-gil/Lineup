import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { SearchScreen } from './index';
import { PlayerScreen } from '../Player' 
import { FanScreen } from '../Fan';
import { RecordScreen } from '../Record';
import { FeedScreen } from "../Feed"

const SearchStack = createStackNavigator();

export function SearchStackScreen() {
	return (
	  <SearchStack.Navigator>
		<SearchStack.Screen name="Search" component={SearchScreen} />
		<SearchStack.Screen name="Player" component={PlayerScreen} />
		<SearchStack.Screen name="Record" component={RecordScreen} />
		<SearchStack.Screen name="Fan" component={FanScreen} />
		<SearchStack.Screen name="Feed" component={FeedScreen} />
	  </SearchStack.Navigator>
	);
}