import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';


export function AccountScreen({ navigation }) {

	return (
		<View style={{ flexDirection: 'column', }}>
			<TouchableOpacity>
				<Text>로그아웃</Text>
				<Text>aa@nave.com</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('PasswordChange')}>
				<Text>비밀번호변경</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('PlayerRegist')}>
				<Text>선수 등록</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Withdrawal')}>
				<Text>회원 탈퇴</Text>
			</TouchableOpacity>
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
