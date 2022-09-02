import React from 'react'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import { TouchableOpacity, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './CompetitionResultButton.styles'

export function CompetitionResultButton({ eventId, data, type, navigation }) {
	const onPress = () => {
		if (!type) {
			var result = data
			delete result['detailName']
			AsyncStorage.getItem('accessToken').then(thing => {
				ApiFetch({
					method: 'POST',
					url: `/player/event/record/${eventId}`,
					headers: {
						'content-type': 'application/json',
						Authorization: 'Bearer ' + thing,
					},
					body: JSON.stringify(result),
				})
					.then(thing => {
						if (thing == 401) {
							navigation.navigate('RefreshTokenModal', { navigation: navigation })
						}
						else
							navigation.navigate('StoryScreen')
					})
					.catch(error => {
						console.log('Login ERROR', error)
					})
			})
		}
		navigation.navigate('StoryScreen')
	}

	const buttonStyle =
		data.endDate && data.location && data.eventName
			? styles.filledButton
			: styles.notfillButton

	const buttonTextStyle =
		data.endDate && data.location && data.eventName
			? styles.filledText
			: styles.notfillText
	return (
		<TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
			<Text style={buttonTextStyle}>확인</Text>
		</TouchableOpacity>
	)
}