import React, { Component } from 'react';

import { SafeAreaView } from 'react-native';
import { Head, Body } from './index';

export function HomeScreen({ navigation }) {
	const Data = require('../../Assets/Data/Home/Home.json').data
	return (
		<SafeAreaView style={{flex:1}}>
			<Head Data={Data} navigation={navigation} />
			<Body Data={Data} navigation={navigation} />
		</SafeAreaView>
	);
}

