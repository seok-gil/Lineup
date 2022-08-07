import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Switch
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import { ApiFetch } from "../../Components/"
export function SettingAlertScreen({ navigation }) {

	const [alert, setAlert] = useState({
		"feedAlarm": true,
		"commentAlarm": false
	})

	const onClick = (key) => {
		const set = !alert[key]
		setAlert({
			...alert,
			[key]: set
		})
		AsyncStorage.getItem("accessToken")
			.then((thing) => {
				ApiFetch({
					method: 'PUT',
					url: `/alarm-setting/${key.slice(0,-5)}`,
					headers: {
						'content-type': 'application/json',
						'Authorization': 'Bearer ' + thing,
					},
					body: null,
				})
			})
	}

	useEffect(() => {
		AsyncStorage.getItem("accessToken")
			.then((thing) => {
				ApiFetch({
					method: 'GET',
					url: `/alarm-setting`,
					headers: {
						'content-type': 'application/json',
						'Authorization': 'Bearer ' + thing,
					},
					body: null,
				}).then(thing => {
					console.log("GETAlert", thing)
					setAlert(thing)
				})
			})
	}, []);

	return (
		<View style={styles.container}>
			<Text>선수 피드 알림</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={alert.feedAlarm ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={() => onClick('feedAlarm')}
				value={alert.feedAlarm}
			/>
			<Text>댓글 알림</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={alert.commentAlarm ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={() => onClick('commentAlarm')}
				value={alert.commentAlarm}
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