import React, { Component, useState } from 'react';

import {
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native';

export function InquiryScreen({ navigation }) {
	const [inputs, setInputs] = useState({
		'title' : '',
		'content' : ''
	})

	const onChange = (keyvalue, e) => {
		const { text } = e.nativeEvent
		setInputs({
			...inputs,
			[keyvalue]: text
		});
	}

	const onSumit = () => {
		console.log("sumit")
	}
	return (
		<View >
			<Text>제목</Text>
			<TextInput
				value={inputs.search}
				placeholder={'문의 제목을 입력해주세요'}
				placeholderTextColor='#C5C8CE'
				onChange={(e) => onChange("title", e)}
			/>
			<Text>내용</Text>
			<TextInput
				value={inputs.search}
				placeholder={'정확한 답변을 드릴 수 있도록 상세하게 내용을 작성해주세요.'}
				placeholderTextColor='#C5C8CE'
				onChange={(e) => onChange("content", e)}
			/>
		<TouchableOpacity onPress={() => onSumit}>
			<Text> 제출하기 </Text>
		</TouchableOpacity>
		</View>
	)
}
