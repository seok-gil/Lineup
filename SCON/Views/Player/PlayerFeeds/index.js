import React, { useState, useEffect } from 'react';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';

import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonBig } from '../../../Components';
import { PlayerFeed } from "./PlayerFeed"
import { PlayerFixedFeed } from "./PlayerFixedFeeds"

export function PlayerFeeds({ playerId, feed, navigation }) {
	const [data, setData] = useState([])
	const [nextFeed, setNextFeed] = useState(2)
	const [lastFeed, setLastFeed] = useState(1)

	useEffect(() => {
		const temp = data
		for (var i = lastFeed; i < nextFeed; ++i) {
			ApiFetchOne({
				method: 'GET',
				url: `http://localhost:1337/api/feeds/${i}`,
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
		// for (var i = lastFeed; i < nextFeed; ++i) {
		// 	data.push(
		// 	ApiFetchOne({
		// 		method: 'GET',
		// 		url: `http://localhost:1337/api/feeds/${i}`,
		// 		headers: { "Authorization": "token" },
		// 		body: null
		// 	}))
		// }

	const view = []
	const feedlist = () => {
		for (let i = 0; i < data.length; ++i) {
			view.push(
				<PlayerFeed
					key={`player-feed-${i}`}
					feed={data[i]}
					navigation={navigation}
				/>
			);
		}
		return view
	}
	return (
		<View>
			<ButtonBig onPress={() => setNextFeed(nextFeed + 2) } text={`Feed 2보기${lastFeed} ~ ${nextFeed} @@@dummy`}/>
			<PlayerFixedFeed navigation={navigation}/>
			{feedlist()}
		</View>
	)
}
