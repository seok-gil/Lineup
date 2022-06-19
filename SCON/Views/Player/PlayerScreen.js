import React, { Component } from 'react';

import {
	Button,
	View,
	TouchableOpacity,
	StyleSheet,
	Text
} from 'react-native';

import { PlayerProfile, PlayerFeeds } from "./"


function PlayerFollow({navigation}) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Player', { names: ['Brent', 'Satya', 'Michaś'] })}>
			<Text>팔로우</Text>
		</TouchableOpacity>
	)
}

export function PlayerScreen({navigation}) {
	return (
		<View>
			<PlayerProfile navigation={navigation}/>
			<PlayerFollow />
			<PlayerFeeds navigation={navigation}/>
			<PlayerFeeds navigation={navigation}/>

		</View>
	);
}