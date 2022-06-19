

import React, { Component } from 'react';

import {
	Button,
	Image,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Touch
} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

function PlayerProfileTab() {
	return (
		<View style={{ flexDirection: 'row', }}>
			<Image source={DefaultProfile} style={styles.image} />
			<View style={{ flexDirection: 'column', }}>
				<Text> 닉네임</Text>
				<Text> 수영선수</Text>
			</View>
		</View>
	)
}

function PlayerData({ navigation }) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => navigation.navigate('Record', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>전적 12</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Rank', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>순위 7</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Fan', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>팬 104</Text>
			</TouchableOpacity>
		</View>
	)
}
// function PlayerStatus() {
// 	return (
// 		<Text>
// 			응원에 보답하는ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
// 		</Text>
// 	)
// }


export function PlayerProfile({ navigation }) {
	return (
		<View>

			<View style={{ flexDirection: 'row' }}>
				<PlayerProfileTab />
				<PlayerData navigation={navigation} />
			</View>
		</View>

	)
}

const styles = StyleSheet.create({
	image: {
		width: '30%',
		height: '100%',
		resizeMode: 'contain'
	},
});

