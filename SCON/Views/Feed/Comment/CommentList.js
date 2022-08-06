import React, { useEffect, useState } from 'react';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import { View, ScrollView, Text, FlatList } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import { CommentOne } from "./CommentOne"

export function CommentList({ setReplyFocus, feedId, navigation }) {
	const [data, setData] = useState([])


	const [lastFeed, setLastFeed] = useState(1)
	const [nextFeed, setNextFeed] = useState(5)

	useEffect(() => {
		AsyncStorage.getItem("accessToken")
			.then((thing) => {
				ApiFetch({
					method: 'GET',
					url: `feed/${feedId}/comments?page=${0}&size=${nextFeed}`,

					headers: {
						'content-type': 'application/json',
						'Authorization': 'Bearer ' + thing,
					},
					body: null,
				}).then(thing => {
					// console.log("comment List", thing)
					setData(thing.content);
				})
			})
	}, [nextFeed]);
	const onEndReached = () => {
		setNextFeed(nextFeed + 5)
	}
	return (
		<View>
			<FlatList
				data={data}
				snapToAlignment="start"
				decelerationRate="fast"
				renderItem={({ item, index }) => (
					<CommentOne
						key={`player-comment-${index}`}
						comment={item}
						navigation={navigation}
						feedId={feedId}
						setReplyFocus={setReplyFocus}
					/>
					)}
				// onScroll={onScroll}
				onEndReached={onEndReached}
				onEndReachedThreshold={0.1}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
					/>
		</View>
	);
}


// const view = [];
// const commentlist = () => {
	// 	if (data) {
		// 		for (let i = 0; i < data.length; ++i) {
			// 			view.push(
				// 				<CommentOne
				// 					key={`player-comment-${i}`}
				// 					comment={data[i]}
				// 					navigation={navigation}
				// 					feedId={feedId}
				// 					setReplyFocus={setReplyFocus}
				// 				/>,
				// 			);
				// 		}
				// 		return view;
				// 	};
				// }