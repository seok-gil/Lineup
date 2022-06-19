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

function RecordHead() {
	return (
		<View style={{flexDirection:'row'}}>
			<Text>선수전적</Text>
			<View style={{flexDirection:'row'}}>
				<Image source={Gold}></Image>
				<Text> 1</Text>
				<Image source={Silver}></Image>
				<Text> 2</Text>
				<Image source={Bronze}></Image>
				<Text> 3</Text>
			</View>
		</View>
	)
}


function RecordList() {
	return (
		<View>
			<Text>
			교육감기 수영대회 계영 400m 5위
			</Text>
		</View>
	)
}

export function RecordScreen({ navigation }) {
	return (
		<View style={{flexDirection:'column'}}>
			<RecordHead/>
			<RecordList/>
		</View>
	);
}

