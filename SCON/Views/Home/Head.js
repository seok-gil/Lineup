import React, { Component } from 'react';
import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { AlertIcon, SettingIcon, NickName } from './index';

export function Head({ navigation }) {
	return (
		<View >
			<AlertIcon/>
			<SettingIcon/>
			<NickName/>
		</View>
	);
}