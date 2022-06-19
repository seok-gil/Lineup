import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';


export function PasswordChange({ navigation }) {
	return (
		<View style={{ flexDirection: 'column', }}>
			<Text>비밀번호 변경</Text>
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
