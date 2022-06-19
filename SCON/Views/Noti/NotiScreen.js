import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';


function NotiOne() {
	return (
		<View>
			<Text>
				공지사항
			</Text>
		</View>
	)
}

export function NotiScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<NotiOne />
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