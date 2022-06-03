import React, { Component } from 'react';
import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { Head, Body } from './index';

export function HomeScreen({ navigation }) {
	return (
		<View >
			<Head/>
			<Body/>
		</View>
	);
}