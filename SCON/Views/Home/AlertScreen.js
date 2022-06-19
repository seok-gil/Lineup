import React, { Component } from 'react';
import {
	Button,
	View,
	Text,
	StyleSheet,
} from 'react-native';

function AlertHead() {
	return (
		<Text>선수 대회 알림</Text>
	);
}

function AlertBody() {
	return (
		<View>
			<Text>강석원 선수의 ~~~</Text>
			<Text>2022.05.04</Text>
		</View>
	);
}
function Alert() {
	return (
		<View >
			<AlertHead/>
			<AlertBody/>
		</View>
	);
}

export function AlertScreen({ navigation }) {
	return (
		<View >
			<Text>쌓여있는 알림을 확인해보세요</Text>
			<Alert/>
			<Alert/>
		</View>
	);
}