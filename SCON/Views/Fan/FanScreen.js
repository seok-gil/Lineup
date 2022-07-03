import React, { Component, useState, useRef } from 'react';

import {
	Button,
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	Image,
	TextInput,
	SafeAreaView
} from 'react-native';


import SearchIcon from '../../Assets/Images/SearchIcon.png'
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function SearchId({ data, navigation }) {
	console.log(data)
	return (
		<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })}>
			<View style={{ flexDirection: 'row', }}>
				<Image source={DefaultProfile} style={styles.image} />
				<View style={{ flexDirection: 'column' }}>
					<Text> 팬닉네임</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export function SerachInput() {
	const searchRef = useRef();
	const [inputs, setInputs] = useState({
		search: '',
	});
	const onChange = (keyvalue, e) => {
		const { text } = e.nativeEvent
		setInputs({
			...inputs,
			[keyvalue]: text
		});
	}
	
	return (
		<View style={{ flexDirection: 'row' }}>
			<Image source={SearchIcon} />
			<TextInput
				value={inputs.search}
				placeholder={'검색'}
				placeholderTextColor='#C5C8CE'
				onChange={(e) => onChange("search", e)}
				onSubmitEditing={() => searchRef.current.focus()}
			/>
		</View>
	)
}

export function FanScreen({ navigation }) {
	const data = require('../../Assets/Data/Fan.json').Fan
	return (
		<SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
			<SerachInput />
			<SearchId data={data} navigation={navigation} />
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	image: {
		width: '10%',
		height: '100%',
		resizeMode: 'contain'
	},
});