import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,

} from 'react-native';


export function CompetitionResult({ navigation }) {
	return (
		<View style={{ flex: 3 }}>
			<TouchableOpacity onPress={() => navigation.navigate('Player', { names: ['Brent', 'Satya', 'Michaś'] })}>
				<Text>피드</Text>
			</TouchableOpacity>
		</View>
	);
}

