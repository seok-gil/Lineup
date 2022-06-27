import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';


export function StoryScreen({ navigation }) {
	return (
		<SafeAreaView style={{ flex: 3 }}>
			<TouchableOpacity onPress={() => navigation.navigate('FeedRegist', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>피드</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('CompetitionRegist', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>대회 일정</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('CompetitionResult', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>대회 결과</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

