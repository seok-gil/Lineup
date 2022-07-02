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
			<Text>새로운 비밀번호로 변경해주세요.</Text>
			<Text>8~16자의 영문, 숫자, 특수기호를 조합하여 사용.</Text>
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
