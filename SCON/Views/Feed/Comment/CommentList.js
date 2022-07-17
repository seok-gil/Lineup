import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { ButtonBig } from '../../../Components';
import { View } from 'react-native';

import { CommentOne } from "./CommentOne"

export function CommentList({ navigation }) {
	const [data, setData] = useState([])
	const [lastFeed, setLastFeed] = useState(1)
	const [nextFeed, setNextFeed] = useState(2)

	useEffect(() => {
		const temp = data
		for (var i = lastFeed; i < nextFeed; ++i) {
			ApiFetchOne({
				method: 'GET',
				url: `http://localhost:1337/api/comments/${i}`,
				headers: { "Authorization": "token" },
				body: null
			})
				.then((thing => {
					temp.push(thing)
				}))
		}
		setLastFeed(nextFeed)
		setData(temp)
	}, [nextFeed])

	const view = [];
	const commentlist = () => {
		if (data) {
			for (let i = 0; i < data.length; ++i) {
				view.push(
					<CommentOne
						key={`player-comment-${i}`}
						comment={data[i]}
						navigation={navigation}
					/>,
				);
			}
			return view;
		};
	}
	return (
		<View>
			{commentlist()}
			<ButtonBig onPress={() => setNextFeed(nextFeed + 2)} text={`Feed 2보기${lastFeed} ~ ${nextFeed} @@@dummy`} />
		</View>
	);
}