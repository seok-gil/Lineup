import React, { Component, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	TextInput,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';


export function FeedRegist({ navigation }) {
	const [feed, setFeed] = useState("")
	
	const onChange = (e ) => {
		const { text } = e.nativeEvent
		setFeed(text);
	}

	return (
		<SafeAreaView style={{ flexDirection: 'column' }}>
			<Text>
				내용
			</Text>
			<TextInput
				value={feed}
				placeholder={'어떤 말을 남기고 싶은신가요?'}
				placeholderTextColor='#C5C8CE'
				onChange={(e) => onChange("search", e)}
				onSubmitEditing={() => searchRef.current.focus()}
			/>
			<TouchableOpacity onPress={() => navigation.navigate('CompetitionResult')}>
				<Text> 확인 </Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
