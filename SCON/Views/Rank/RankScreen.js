import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';
import DefaultProfile from '../../Assets/Images/ProfileDefault.png'

export function RankHead() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Button onPress={() => navigation.navigate('Home')} title="Day" />
			<Button onPress={() => navigation.navigate('Home')} title="Week" />
			<Button onPress={() => navigation.navigate('Home')} title="MONTH" />
			<Button onPress={() => navigation.navigate('Home')} title="ALL" />
		</View>
	)
}
export function RankFirst() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<Text>1</Text>
			<Image source={DefaultProfile} style={styles.image} />
			<Text> 일등</Text>
			<Text> 수영</Text>
		</View>
	);
}

export function RankSecond() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<Text>2</Text>

			<Image source={DefaultProfile} style={styles.image} />
			<Text> 이등</Text>
			<Text> 수영</Text>
		</View>
	);
}

export function RankThird() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<Text>3</Text>
			<Image source={DefaultProfile} style={styles.image} />
			<Text> 삼등</Text>
			<Text> 수영</Text>
		</View>
	);
}	

export function RankETC() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text>4</Text>
		<Image source={DefaultProfile} style={styles.image2} />
		<Text> 홍길동</Text>
		<Text> 수영</Text>
	</View>
	)
}

export function RankBody() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={{ flexDirection: 'row' }}>
			<RankFirst />
			<RankSecond/>
			<RankThird/>
			</View>
			<RankETC/>
			<RankETC/>
			<RankETC/>
			<RankETC/>

		</View >


	)
}
export function RankScreen({ navigation }) {
	return (
		<View >
			<RankHead />
			<RankBody />
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '40%',
		resizeMode: 'contain'
	},
	image2: {
		width: '10%',
		height: '100%',
		resizeMode: 'contain'
	},
});

