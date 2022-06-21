import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Swiper from 'react-native-swiper'


export function RankFirst() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<Text>1</Text>
			<Image source={DefaultProfile} style={styles.image} />
			<Text> 일등</Text>
			<Text> 수영</Text>
		</View>
	);
}

export function RankSecond() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<Text>2</Text>
			<Image source={DefaultProfile} style={styles.image} />
			<Text> 이등</Text>
			<Text> 수영</Text>
		</View>
	);
}

export function RankThird() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<Text>3</Text>
			<Image source={DefaultProfile} style={styles.image} />
			<Text> 삼등</Text>
			<Text> 수영</Text>
		</View>
	);
}

function RankETC() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text>4</Text>
			<Image source={DefaultProfile} style={styles.image2} />
			<Text> 홍길동</Text>
			<Text> 수영</Text>
		</View>
	)
}

export function RankBody() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={{ flexDirection: 'row' }}>
				<RankFirst />
				<RankSecond />
				<RankThird />
			</View>
			<RankETC />
			<RankETC />
			<RankETC />
			<RankETC />
		</View >
	)
}

const RankStack = createMaterialTopTabNavigator();

export function RankScreen({ navigation }) {
	return (
		<RankStack.Navigator>
			<RankStack.Screen name="Day" component={RankBody} />
			<RankStack.Screen name="Week" component={RankBody} />
			<RankStack.Screen name="Month" component={RankBody} />
			<RankStack.Screen name="All" component={RankBody} />
		</RankStack.Navigator>
	)
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '40%',
		resizeMode: 'contain'
	},
	image2: {
		width: '10%',
		height: '100%',
		resizeMode: 'contain'
	},
});

