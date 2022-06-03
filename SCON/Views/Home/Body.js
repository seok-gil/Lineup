import React, { Component } from 'react';
import {
	Button,
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'


export function PlayerCard({navigation}) {
	return (
		<Image source={DefaultProfile} style={styles.image}/>
	)
}


export function Body({ navigation }) {
	return (
		<View >
			<Button onPress={() => navigation.navigate('Home')} title="선수로 등록하시겠습니까?" />
			<Text>좋아하는 운동선수를 추가해보세요!</Text>
			<PlayerCard/>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
	  width: '30%',
	  height: '30%',
	  resizeMode: 'contain'
	},
  });
  
  