import React, { useState, useEffect } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonBig } from '../../Components';


function PlayerFeed({ feed, navigation }) {
	if (!feed) return (<View />)
	console.log(feed[0])
	return (
		<TouchableOpacity onPress={() => navigation.navigate('FeedScreen')}>
			<Text>{feed[0].content}</Text>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flexDirection: 'row' }}>
					<Text>하트</Text>
					<Text>{feed[0].likeCnt}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flexDirection: 'row' }}>
					<Text>댓글</Text>
					<Text>{feed[0].comentCnt}</Text>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	)
}

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
			<ButtonBig onPress={() => setNextFeed(nextFeed + 2) } text={`Feed 2보기${lastFeed} ~ ${nextFeed}`}/>
			{feedlist()}
		</View>
	)
}
