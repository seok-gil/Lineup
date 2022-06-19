import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function ProfileScreen({ navigation }) {
	return (
		<View style={{ flexDirection: 'column', }}>
			<Image source={DefaultProfile} style={styles.image} />
			<Text> 닉네임</Text>
			<Text> email</Text>
			<Text> 생년월일</Text>
			<Text> 성별</Text>
			<Text> 종목</Text>

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
