import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

import Gold from '../../Assets/Images/GoldMedal.png'
import Silver from '../../Assets/Images/SilverMedal.png'
import Bronze from '../../Assets/Images/BronzeMedal.png'

function RecordHead({ medal }) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text>선수전적</Text>
			<View style={{ flexDirection: 'row' }}>
				<Image source={Gold}></Image>
				<Text> {medal.gold}</Text>
				<Image source={Silver}></Image>
				<Text> {medal.silver}</Text>
				<Image source={Bronze}></Image>
				<Text> {medal.bronze}</Text>
			</View>
		</View>
	)
}
function RecordList({ record }) {
	const view = [];

	const playercard = () => {
		for (let i = 0; i < record.length; i++) {
			view.push(
				<View key={`record`} style={{ flexDirection: 'column' }}>
					<Text>
						{record[i].host}{" "}
						{record[i].competition}{" "}
						{record[i].major}{" "}
						{record[i].game_detail}{" "}
						{record[i].score}
					</Text>
					<Text>
						{record[i].start} ~
						{record[i].end}
					</Text>
				</View>
			)
		};
		return view;
	}

	return (
		<View>
			{playercard()}
		</View>
	);
}

export function RecordScreen({ navigation }) {
	const Data = require('../../Assets/Data/Record.json');
	return (
		<View style={{ flexDirection: 'column' }}>
			<RecordHead medal={Data.Medal} />
			<RecordList record={Data.Record} />
		</View>
	);
}

