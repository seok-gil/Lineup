import React, { Component } from 'react';
import {
	Button,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import AddPlayer from '../../Assets/Images/AddPlayer.png'



export function PlayerCardEmpty({ navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Search')}>
			<Image source={AddPlayer} style={styles.image2} />
		</TouchableOpacity>
	)
}

export function PlayerCardFill({ navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Player')}>
			<Image source={DefaultProfile} style={styles.image} />
		</TouchableOpacity>
	)
}

export function Body({ navigation }) {
	return (
		<View >
			<Button onPress={() => navigation.navigate('Home')} title="선수로 등록하시겠습니까?" />
			<Text>좋아하는 운동선수를 추가해보세요!</Text>
			<Text>최대 3명을 추가할 수 있습니다</Text>
			<View style={{ flexDirection: 'column' }}>
				<PlayerCardEmpty navigation={navigation} />
				<PlayerCardFill navigation={navigation} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '50%',
		height: '40%',
		resizeMode: 'contain'
	},
	image2: {
		width: '50%',
		height: '40%',
		resizeMode: 'contain'
	},
});

