import React, { Component } from 'react';

import {
	Button,
	Text,
	View,
	Image,
	StyleSheet,
} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function NickName({ user }) {
	const name = user.user_name
	const email = user.email
	return (
		<View style={{flexDirection: 'row',}}>
			<Image source={DefaultProfile} style={styles.image}/>
			<View style={{flexDirection: 'column',}}>
				<Text> {name} </Text>
				<Text> {email} </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
	  width: '30%',
	  height: '100%',
	  resizeMode: 'contain'
	},
  });
  
  