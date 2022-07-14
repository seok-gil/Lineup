import React, { Component, useState } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';


export function SettingAlertScreen({ navigation }) {
	const [alert, setAlert] = useState({
		"feed": true,
		"comment": false
	})

	const onClick = (key, e) => {
		const set = !alert[key]
		setAlert({
			...alert,
			[key]: set
		})
		console.log(alert.feed)
	}
	return (
		<View style={styles.container}>
			<Text>알람설정</Text>
			<Text>선수 피드 알림</Text>
			<TouchableOpacity onPress={(e) => onClick("feed", e)}>
				{alert.feed && <Text>true</Text>}
				{!alert.feed && <Text>false</Text>}
			</TouchableOpacity>
			<Text>댓글 알림</Text>
			<TouchableOpacity onPress={(e) => onClick("comment", e)}>
				{alert.comment && <Text>true</Text>}
				{!alert.comment && <Text>false</Text>}
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