import React, { Component } from 'react';

import {
	Button,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';


function PlayerFeed({ feed, navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('FeedScreen')}>
			<Text>{feed.content}</Text>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flexDirection: 'row' }}>
					<Text>하트</Text>
					<Text>{feed.like_cnt}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })} style={{ flexDirection: 'row' }}>
					<Text>댓글</Text>
					<Text>{feed.coment_cnt}</Text>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	)
}

export function PlayerFeeds({ feed, navigation }) {
	const view = []
	const feedlist = () => {
		for (let i = 0; i < feed.length; ++i) {
			view.push(
				<PlayerFeed
					key={`player-feed-${i}`}
					feed={feed[i]}
					navigation={navigation}
				/>
			);
		}
		return view
	}
	return (
		<View>
			{feedlist()}
		</View>
	)
}