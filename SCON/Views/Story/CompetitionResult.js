import React, { Component } from 'react';
import { useForm } from 'react-hook-form'
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,

} from 'react-native';



export function CompetitionResult({ navigation }) {
	const Data = require('../../Assets/Data/CompetitionResultList.json').competition

	const CompetitionOne = ({ data }) => {
		console.log(data.input)
		let input = data.input
		return (
			<View>
				<View style={{ flexDirection: 'row' }}>
					<Text> {data.name}</Text>
					<TouchableOpacity onPress={() => navigation.navigate('CompetitionResultDetail', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flex: 2 }}>
						{input == true && <Text style={{ flex: 1 }}> 결과 입력</Text>}
						{input == false && <Text style={{ flex: 1 }}>  수정 하기</Text>}
					</TouchableOpacity>
				</View>
				<Text> {data.date}</Text>
			</View>
		)
	}

	return (
		<View style={{ flex: 3 }}>
			{Data.map((item, index) => {
				return (<CompetitionOne data={item} key={index}/>
				)
			})}
		</View>
	);
}

