import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form'
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Modal,

} from 'react-native';



export function CompetitionResult({ navigation }) {
	const Data = require('../../Assets/Data/CompetitionResultList.json').competition
	const [calendar, setCalendar] = useState({
		open: true,
		start: '',
		end: ''
	})

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
				return (<CompetitionOne data={item} key={index} />
				)
			})}
			<Modal
				// animationType='slide'
				transparent={true}
				visible={calendar.open}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text> 달력</Text>
					</View>
				</View>
			</Modal>
		</View>
	);
}



const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		shadowColor: '#000',
		//그림자의 영역 지정
		shadowOffset: {
			width: 0,
			height: 2
		},
		//불투명도 지정
		shadowOpacity: 0.25,
		//반경 지정
		shadowRadius: 3.84,
	}
})