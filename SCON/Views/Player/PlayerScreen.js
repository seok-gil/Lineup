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
			<Text>나의 라인업에 추가하기</Text>
		</TouchableOpacity>
	)
}

export function PlayerScreen({navigation}) {
	const Data = require('../../Assets/Data/PlayerHome.json')
	return (
		<View>
			<PlayerProfile profile={Data.player} navigation={navigation}/>
			<PlayerFollow />
			<PlayerFeeds feed={Data.feed} navigation={navigation}/>
		</View>
	);
}