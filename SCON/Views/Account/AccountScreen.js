import React, { useState } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
	Modal,
} from 'react-native';

import {LogoutModal}from './LogoutModal'

export function AccountScreen({ navigation }) {
	const [modal, setModal] = useState(false)

	const onLogout = () => {
		setModal(true)
	}
	return (
		<View style={{ flexDirection: 'column', }}>
			<TouchableOpacity onPress={onLogout}>
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
			<LogoutModal modal={modal} setModal={setModal} navigation={navigation}/>
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
