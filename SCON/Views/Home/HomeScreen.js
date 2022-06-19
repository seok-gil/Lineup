import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	Text,
	StyleSheet,
} from 'react-native';

import { Head, Body } from './index';

export function HomeScreen({ navigation }) {
	const Data = require('../../Assets/Data/HomeScreen.json');

	return (
		<View >
			<Head Data={Data} navigation={navigation} />
			<Body Data={Data} navigation={navigation} />
		</View>
	);
}
