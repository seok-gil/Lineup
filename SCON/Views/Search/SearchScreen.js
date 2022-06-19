import React, { Component, useState, useRef } from 'react';
import {
	Button,
	TouchableOpacity,
	View,
	StyleSheet,
	TextInput,
	Image,
	Text
} from 'react-native';

import SearchIcon from '../../Assets/Images/SearchIcon.png'
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function SearchId({ navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Player', { names: ['Brent', 'Satya', 'Michaś'] })}>
			<View style={{ flexDirection: 'row', }}>
				<Image source={DefaultProfile} style={styles.image} />
				<View style={{ flexDirection: 'column' }}>
					<Text> 닉네임</Text>
					<Text> 수영선수</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}


export function SerachInput({ value }) {
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
			<Text> search : {inputs.search}</Text>
		</View>
	)
}


export default function InputSample() {
	const secondRef = useRef();
	const [inputs, setInputs] = useState({
		name: '',
		nickname: ''
	});

	const { name, nickname } = inputs;

	const onChange = (keyvalue, e) => {
		const { text } = e.nativeEvent
		setInputs({
			...inputs,
			[keyvalue]: text
		});
	};

	return (
		<View>
			<TextInput
				style={styles.input}
				onChange={(e) => onChange("name", e)}
				value={name}
				onSubmitEditing={() => secondRef.current.focus()}
			/>
			<Text>name: {name}, nickname: {nickname}</Text>
		</View>
	)
}

export function SearchScreen({ navigation }) {
	return (
		<View style={{ flex: 3, flexDirection: 'column' }}>
			<InputSample />
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
	input: {
		height: 50,
		width: 200,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});