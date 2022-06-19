import React, { Component } from 'react';
import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { AlertIcon, SettingIcon, NickName } from './index';

export function Head({ navigation }) {
	return (
		<View>
			<View style={{ flexDirection: 'row', }}>
				<AlertIcon navigation={navigation} />
				<SettingIcon navigation={navigation} />
			</View>
			<NickName />
		</View>
	);
}