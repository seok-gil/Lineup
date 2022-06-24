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


export function CompetitionResultDetail({ navigation }) {
	const Data = require('../../Assets/Data/CompetitionResultDetail.json').competition

	const DetailOne = ({ item }) => {
		console.log(item)
		if (item.input)
			return (
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text>{item.name}</Text>
						<Text>({item.score} {item.score_detail})</Text>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('Player', { names: ['Brent', 'Satya', 'Michaś'] })}>
						<Text>수정</Text>
					</TouchableOpacity>
				</View>
			)
		else 
			return (
				<View style={{ flexDirection: 'row' }}>
					<Text>{item.name}</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Player', { names: ['Brent', 'Satya', 'Michaś'] })}>
						<Text>입력하기</Text>
					</TouchableOpacity>
				</View>
			)
	}
	return (
		<View style={{ flex: 3 }}>
			<Text>대회</Text>
			<Text>{Data.name}</Text>
			<Text>종목</Text>
			{Data.detail.map((item, index) => {
				return (
					<View style={{ flexDirection: 'row' }}>
						<DetailOne item={item} key={index}/>
					</View>
				)
			})}
		</View>
	);
}

