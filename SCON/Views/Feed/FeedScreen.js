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

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

function FeedBody() {
	return (
		<Text>
			강원석 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
			응원메시지 남길까요?
		</Text>
	)
}

function CommentList() {
	return (
		<Text>
			대단해요!
			대단해요!
			대단해요!
			대단해요!
			대단해요!
			대단해요!
			대단해요!
			대단해요!
			대단해요!
		</Text>
	)
}

function FeedComment({value}) {
	const [name, setName] = useState('');
	return (
		<View style={{flexDirection: 'row'}}>
			<Image source={DefaultProfile}/>
			<TextInput 
			value={value}
			placeholder={'댓글 쓰기'}
			placeholderTextColor='#C5C8CE'
			onChangeText={text => setName(text)} />
		</View>
	)
}

export function FeedScreen({ navigation }) {
	return (
		<View style={{ flex: 3, flexDirection: 'column' }}>
			<FeedBody/>
			<FeedComment/>
			<CommentList/>
		</View>
	);
}