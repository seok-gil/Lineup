import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';

import { CommentRegist, CommentList } from "./Comment"
import { FeedBody } from "./FeedBody"

export function FeedScreen({ route, navigation }) {
	const [data, setData] = useState()

	useEffect(() => {
		ApiFetchOne({
			method: 'GET',
			url: `http://localhost:1337/api/feeds/${route.params.feedId}`,
			headers: { "Authorization": "token" },
			body: null
		})
			.then((thing => {
				setData(thing)
			}))
	}, [])
	if (data)
		return (
			<SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
				<FeedBody data={data} />
				<CommentRegist />
				<CommentList navigation={navigation} />
			</SafeAreaView>
		);
	else
		return (<SafeAreaView />)
}