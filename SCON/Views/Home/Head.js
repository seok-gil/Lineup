import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import { NickName } from './index';


function AlertIcon({ alert, navigation }) {
	console.log(alert)
	if (alert)

		return (
			<View style={{ flexDirection: 'row' }}>
				{alert === true && (<Text> alertON@@</Text>)}
				{alert === false && (<Text> alertOFF@@</Text>)}
				<TouchableOpacity onPress={() => navigation.navigate('Alert')}>
					<Text>Alert</Text>
				</TouchableOpacity>
			</View>
		);
}


export function Head({ Data, navigation }) {
	return (
		<View>
			<View style={{ flexDirection: 'row', }}>
				<AlertIcon alert={Data.alert} navigation={navigation} />
			</View>
			<NickName user={Data.user} />
		</View>
	);
}