import React, { Component } from 'react';
import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

export function AlertIcon({ navigation }) {
	return (
		<Button onPress={() => navigation.navigate('/')} title="Alert" />
	);
}