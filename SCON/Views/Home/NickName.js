import React, { Component } from 'react';

import {
	Button,
	Text,
	View,
	Image,
	StyleSheet,
} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function NickName({ navigation }) {
	return (
		<View style={{flexDirection: 'row',}}>
			<Image source={DefaultProfile} style={styles.image}/>
			<Text> 닉네임</Text>
			<Text> email</Text>
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
  
  