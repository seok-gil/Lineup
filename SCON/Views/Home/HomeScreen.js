import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { Head, Body } from './index';

export function HomeScreen({ navigation }) {
	return (
		<View >
			<Head navigation={navigation} />
			<Body navigation={navigation} />
		</View>
	);
}
