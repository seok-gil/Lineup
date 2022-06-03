import React, { Component, useState } from 'react';
import {
	Button,
	View,
	StyleSheet,
	TextInput,
	Image,
	Text
} from 'react-native';

import SearchIcon from '../../Assets/Images/SearchIcon.png'
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function SearchId() {
	return (
		<View style={{flexDirection: 'row',}}>
			<Image source={DefaultProfile} style={styles.image}/>
			<View style={{flexDirection: 'column'}}>
				<Text> 닉네임</Text>
				<Text> 수영선수</Text>
			</View>
		</View>	
	)
}


export function SerachInput({ value }) {
	const [name, setName] = useState('');
	return (
		<View style={{flexDirection: 'row'}}>
			<Image source={SearchIcon}/>
			<TextInput 
			value={value}
			placeholder={'검색'}
			placeholderTextColor='#C5C8CE'
			onChangeText={text => setName(text)} />
		</View>
	)
}

export function SearchScreen({ navigation }) {
	return (
		<View style={{ flex: 3, flexDirection: 'column'}}>
			<SerachInput />
			<SearchId/>
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