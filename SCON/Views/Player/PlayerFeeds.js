import React, { Component } from 'react';

import {
	Button,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';


function PlayerFeed({ navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Feed', { names: ['Brent', 'Satya', 'Michaś'] })}>
			<Text>경기전 부상..대화가 몇일..........</Text>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })}>
					<Text>하트7</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })}>
					<Text>댓글23</Text>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	)
}

export function PlayerFeeds({ navigation }) {
	return (
		<View>
			<PlayerFeed navigation={navigation} />
		</View>
	)
}