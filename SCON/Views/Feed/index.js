import React, { useEffect, useState } from 'react';
import { ApiFetchOne, ApiFetch } from '../../Components/API/ApiFetch';
import AsyncStorage from "@react-native-community/async-storage"
import { View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';

import { CommentRegist, ReplyRegist, CommentList } from "./Comment"
import { FeedBody } from "./FeedBody"

export function FeedScreen({ route, navigation }) {
	const [data, setData] = useState()
	const [replyFocus, setReplyFocus] = useState(null)

	useEffect(() => {
		AsyncStorage.getItem("accessToken")
			.then((thing) => {
				ApiFetch({
					method: 'GET',
					url: `feed/${route.params.feedId}`,
					headers: {
						'content-type': 'application/json',
						'Authorization': 'Bearer ' + thing,
					},
					body: null,
				}).then(thing => {
					setData(thing);
				})
			})
	}, []);
	
	if (!data) return (<SafeAreaView />)
	return (
		<SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
			<FeedBody data={data} />
			<CommentRegist feedId={route.params.feedId} />
			<CommentList feedId={route.params.feedId} setReplyFocus={setReplyFocus} navigation={navigation} />
			<ReplyRegist feedId={route.params.feedId} replyFocus={replyFocus} setReplyFocus={setReplyFocus} />
		</SafeAreaView>
	);

}