import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import { SafeAreaView } from 'react-native';
import { PlayerProfile, PlayerFeeds, PlayerFollow } from "./"


export function PlayerScreen({ navigation, route }) {
	const [data, setData] = useState([])
	const Data = require('../../Assets/Data/PlayerHome.json')
	
	// /player-home/{playerId}/feeds?size={size}&lastFeedId={lastFeedId}
	useEffect(() => {
		ApiFetchOne({
			method: 'GET',
			url: `http://localhost:1337/api/feeds/${route.params.playerId}`,
			headers: { "Authorization": "token" },
			body: null
		})
			.then((thing => {
				setData([...data, thing])
			}))
	}, [])


	return (
		<SafeAreaView>
			<PlayerProfile data={data} navigation={navigation} />
			<PlayerFollow data={data} navigation={navigation} />
			<PlayerFeeds feed={Data.feed} navigation={navigation}/>
			<PlayerFeeds feed={data} navigation={navigation}/>
		</SafeAreaView>
	);
}