import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import { Data } from "../../Assets/Data/Alert.json"

function AlertHead({ alert }) {
	const read = alert.read
	return (
		<Text>{read}{alert.type}</Text>
	);
}

function AlertBody({ alert }) {
	return (
		<View>
			<Text>{alert.content}</Text>
			<Text>{alert.createdAt}</Text>
		</View>
	);
}

function Alert({ alert }) {
	if (!alert)
		return (<View />)
	const onClickX = (alert_id) => {
		console.log(alert_id)
	}
	return (
		<View >
			<AlertHead alert={alert} />
			<AlertBody alert={alert} />
			<TouchableOpacity onPress={() => onClickX(alert.alert_id)}>
				<Text>x</Text>
			</TouchableOpacity>
		</View>
	);
}

export function AlertScreen({ navigation }) {
	const Data = require('../../Assets/Data/Alert.json').alert;
	
	const onClickAll = () => {
		console.log("all")
	}
	return (
		<View >
			<Text>쌓여있는 알림을 확인해보세요</Text>
			<TouchableOpacity onPress={() => onClickAll(alert.alert_id)}>
				<Text>모두 삭제</Text>
			</TouchableOpacity>
			{
				Data.map((alert, index) => {
					if (alert)
						return (<Alert alert={alert} />)
				})
			}
		</View>
	);
}