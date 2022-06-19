import React, { Component, useState } from 'react';
import {
	Button,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import ScrollableTabView from 'react-native-swiper-view';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import AddPlayer from '../../Assets/Images/AddPlayer.png'



function PlayerCard({ card, index, navigation }) {
	console.log(card)
	console.log(index)
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Search')}>
			<Image source={AddPlayer} style={styles.image2} />
		</TouchableOpacity>
	)
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Player')}>
			<Image source={DefaultProfile} style={styles.image} />
		</TouchableOpacity>
	)
}

function PlayerCardList({ follow, navigation }) {
	const [index, setIndex] = useState(0)
	console.log(follow[1])
	return (
		<ScrollView
			horizontal={true}
				showsHorizontalScrollIndicator={false}  //scroll bar
			>
		
		{follow.map((card, index) => (
			<PlayerCard card={card} index={index} navigation={navigation}/>
		))}
		</ScrollView>
	)
}

function GoPlayer({ setgoPlayer, navigation }) {
	const onClick = () => {
		setgoPlayer(false)
	}
	return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => navigation.navigate('PlayerRegist')}>
				<Text>선수로 등록하시겠어요?</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => onClick()}>
				<Text>x</Text>
			</TouchableOpacity>
		</View>

	)
}

export function Body({ Data, navigation }) {
	const user_code = Data.user.user_code
	const [goPlayer, setgoPlayer] = useState(Data.user.user_goPlayer)
	
	return (
		<View >
			{user_code == 0 && goPlayer == true && (<GoPlayer navigation={navigation} setgoPlayer={setgoPlayer}/>)}
			<Text>좋아하는 운동선수를 추가해보세요!</Text>
			<Text>최대 3명을 추가할 수 있습니다</Text>
			<PlayerCardList follow={Data.follow} navigation={navigation}/>
			<ScrollableTabView>

			</ScrollableTabView>
		</View>
	);
}








const styles = StyleSheet.create({
	image: {
		// width: '50%',
		height: '70%',
		resizeMode: 'contain'
	},
	image2: {
		height: '70%',
		resizeMode: 'contain'
	},
});

