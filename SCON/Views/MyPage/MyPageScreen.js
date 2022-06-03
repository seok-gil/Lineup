import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function Profile({ navigation }) {
	return (
		<View style={{flexDirection: 'column',}}>
			<Image source={DefaultProfile} style={styles.image}/>
			<Text> 닉네임</Text>
			<Text> email</Text>
		</View>
	);
}

export function MypageTab() {
	return (
		<View style={{flexDirection: 'column',}}>
			<Button onPress={() => navigation.navigate('Home')} title="공지사항" />
			<Button onPress={() => navigation.navigate('Home')} title="알림설정" />
			<Button onPress={() => navigation.navigate('Home')} title="문의하기" />
			<Button onPress={() => navigation.navigate('Home')} title="계정관리" />
		</View>
	)
}

export function MyPageScreen({ navigation }) {
	return (
		<View >
			<Profile/>
			<MypageTab/>
		</View>
	);
}


const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '30%',
		resizeMode: 'contain'
	},
	});
	