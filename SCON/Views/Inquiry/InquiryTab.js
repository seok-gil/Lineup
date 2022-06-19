import React, { Component } from 'react';

import {
	Button,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';


import { InquiryScreen, InquiryListScreen } from '.';


export function InquiryTabScreen({navigation}) {
	return (
		<View style={styles.container}>
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