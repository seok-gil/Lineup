import React, { useState } from 'react';

import {
	Button,
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';

import down from '../../Assets/Images/down.png'
import up from '../../Assets/Images/up.png'

function InquiryOne({ data }) {
	const [expand, setExpand] = useState(false)
	const onClick = () => {
		setExpand(!expand)
	}

	const ExpandQ = ({ data }) => {
		return (
			<View>
				<Text > Q.</Text>
				<Text> {data.content} </Text>
			</View>
		)
	}
	const ExpandA = ({ data }) => {
		return (
			<View>
				<Text > A.</Text>
				<Text> {data.answer_content} </Text>
			</View>
		)
	}
	return (
		<View>
			{data.answer &&  <Text>답변완료 {`>`} {data.title} </Text>}
			{!data.answer &&  <Text>접수 {`>`} {data.title} </Text>}

			<Text> {data.createdAt} </Text>
			<TouchableOpacity onPress={onClick}>
				{!expand && <Image source={down} />}
				{expand && <Image source={up} />}
			</TouchableOpacity>
			<View>
				{expand && <ExpandQ data={data} />}
				{expand && data.answer && <ExpandA data={data} />}
			</View>

		</View>
	)
}

export function InquiryListScreen() {
	const data = require('../../Assets/Data/Inquiry.json').inquriy
	return (
		<View >
			{
				data.map((item, index) => {
					return (<InquiryOne key={index} data={item} />)
				})
			}
		</View>
	);
}