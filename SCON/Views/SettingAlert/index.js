import React, { Component, useState } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
	Switch
} from 'react-native';


export function SettingAlertScreen({ navigation }) {
	const [alert, setAlert] = useState({
		"feed": true,
		"comment": false
	})
	const onClick = (key) => {
		const set = !alert[key]
		setAlert({
			...alert,
			[key]: set
		})
	}
	return (
		<View style={styles.container}>
			<Text>선수 피드 알림</Text>
			<Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={alert.feed ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor= '#3e3e3e'
        onValueChange={() => onClick('feed')}
        value={alert.feed}
      />
			<Text>댓글 알림</Text>
			<Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={alert.comment ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor= '#3e3e3e'
        onValueChange={() => onClick('comment')}
        value={alert.comment}
      />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
})