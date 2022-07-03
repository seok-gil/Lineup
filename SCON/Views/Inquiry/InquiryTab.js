import React, { Component } from 'react';

import {
	Button,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';

import { InquiryScreen, InquiryListScreen } from '.';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const InquiryStack = createMaterialTopTabNavigator();

export function InquiryTabScreen({ navigation }) {
	return (
		<InquiryStack.Navigator>
			<InquiryStack.Screen name="문의하기" component={InquiryScreen} />
			<InquiryStack.Screen name="문의내역" component={InquiryListScreen} />
		</InquiryStack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
})