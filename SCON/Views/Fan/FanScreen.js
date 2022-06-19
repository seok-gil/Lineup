import React, { Component, useState } from 'react';

import {
	Button,
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	Image,
	TextInput
} from 'react-native';


import SearchIcon from '../../Assets/Images/SearchIcon.png'
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function SearchId({ navigation }) {
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

export function SerachInput({ value }) {
	const [name, setName] = useState('');
	return (
		<View style={{ flexDirection: 'row' }}>
			<Image source={SearchIcon} />
			<TextInput
				value={value}
				placeholder={'검색'}
				placeholderTextColor='#C5C8CE'
				onChangeText={text => setName(text)} />
		</View>
	)
}

export function FanScreen({ navigation }) {
	return (
		<View style={{ flex: 3, flexDirection: 'column' }}>
			<SerachInput />
			<SearchId navigation={navigation} />
		</View>
	);
}
const styles = StyleSheet.create({
	image: {
		width: '10%',
		height: '100%',
		resizeMode: 'contain'
	},
});