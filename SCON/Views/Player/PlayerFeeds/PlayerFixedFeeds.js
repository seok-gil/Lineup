import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApiFetch } from '../../../Components/API/ApiFetch';


export function PlayerFixedFeed({ navigation }) {
	const [data, setData] = useState()

	useEffect(() => {
		ApiFetch({
			method: 'GET',
			url: `http://localhost:1337/api/fixed-events`,
			headers: { "Authorization": "token" },
			body: null
		})
			.then((thing => {
				setData(thing)
			}))
	}, [])
	if (data)
		return (
			<TouchableOpacity onPress={() => navigation.navigate('FeedScreen', { feedId: `${data.feedId}`})}>
				<Text>고정됨</Text>
				<Text>{data.content}</Text>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flexDirection: 'row' }}>
						<Text>하트</Text>
						<Text>{data.likeCnt}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flexDirection: 'row' }}>
						<Text>댓글</Text>
						<Text>{data.comentCnt}</Text>
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		)
	else
		return (<View />)
}
