import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';


export function SettingAlertScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>알람설정</Text>
			<TouchableOpacity onPress={() => navigation.navigate('MyPageStack')}>
				<Text>XXXXXX</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
})