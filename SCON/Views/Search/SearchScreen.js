import React, { Component, useState, useRef } from 'react';
import {
	Button,
	TouchableOpacity,
	View,
	StyleSheet,
	TextInput,
	Image,
	Text
} from 'react-native';

import SearchIcon from '../../Assets/Images/SearchIcon.png'
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

function ViewPlayer({ player, navigation }) {
	const player_name = player.player_name
	const player_major = player.player_major
	const player_belong = player.player_belong

	return (
		<TouchableOpacity onPress={() => navigation.navigate('Player', { names: ['Brent', 'Satya', 'Michaś'] })}>
			<View style={{ flexDirection: 'row', }}>
				<Image source={DefaultProfile} style={styles.image} />
				<View style={{ flexDirection: 'column' }}>
					<Text> {player_name}</Text>
					<Text> {player_major} / {player_belong} </Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

function SearchId({ inputs, navigation }) {
	const search = inputs.search
	const data = require('../../Assets/Data/Search.json').player
	const [more, setMore] = useState(false)

	const onClickMore = () => {
		if (!more)
			setMore(true)
		else
			setMore(false)
	}
	return (
		<View>
			{data.filter((player) => {
				if (search == null)
					return player
				else if (player.player_name.includes(search) || player.player_major.includes(search) || player.player_belong.includes(search)) {
					return player
				}
			}).map((player, index) => {
				if (index >= 4 && !more)
					return false
				return (<ViewPlayer player={player} navigation={navigation} />)
			})
			}
			<TouchableOpacity onPress={() => onClickMore()}>
				{!more && (<Text>결과 모두 보기</Text>)}
				{more && (<Text>결과 접기</Text>)}
			</TouchableOpacity>
		</View>
	)
}


function SerachInput({ inputs, setInputs }) {
	const searchRef = useRef();

	const onChange = (keyvalue, e) => {
		const { text } = e.nativeEvent
		setInputs({
			...inputs,
			[keyvalue]: text
		});
	}

	return (
		<View style={{ flexDirection: 'row' }}>
			<Image source={SearchIcon} />
			<TextInput
				value={inputs.search}
				placeholder={'검색'}
				placeholderTextColor='#C5C8CE'
				onChange={(e) => onChange("search", e)}
				onSubmitEditing={() => searchRef.current.focus()}
			/>
		</View>
	)
}



export function SearchScreen({ navigation }) {
	const Data = require('../../Assets/Data/Search.json').player;
	const [inputs, setInputs] = useState({
		search: '',
	});
	return (
		<View style={{ flex: 3, flexDirection: 'column' }}>
			<SerachInput inputs={inputs} setInputs={setInputs} />
			<SearchId inputs={inputs} navigation={navigation} />
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '10%',
		height: '100%',
		resizeMode: 'contain'
	},
	input: {
		height: 50,
		width: 200,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});