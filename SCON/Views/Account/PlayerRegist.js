import React, { Component } from 'react';
import { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export function PlayerRegist({ navigation }) {
	const [form, setForm] = useState({
		name: '',
		birth: '',
		gender: '',
		major: '',
		belong: '',
	})
	const [validate, setValidate] = useState({
		name: '',
		birth: '',
		gender: '',
		major: '',
		belong: '',
	})
	const onInput = (key, e) => {
		const { text } = e.nativeEvent;
		setForm({
			...form,
			[key]: text,
		});
	}
	return (
		<View style={{ flexDirection: 'column', }}>
			<Text>운동선수 확인을 시작합니다.</Text>
			<Text>확인된 내용이 실제와 다르면 이용이 제한됩니다.</Text>
			<Text>이름</Text>
			<TextInput
				value={form.name}
				placeholder={'이름을 입력해주세요'}
				placeholderTextColor="#C5C8CE"
				onChange={e => onInput('name', e)}
			/>
			<Text>생년월일</Text>
			<TextInput
				value={form.name}
				placeholder={'생년월일을 선택해주세요'}
				placeholderTextColor="#C5C8CE"
				onChange={e => onInput('name', e)}
			/>
			<Text>성별</Text>
			<TextInput
				value={form.name}
				placeholder={'여자/남자 선택해주세요'}
				placeholderTextColor="#C5C8CE"
				onChange={e => onInput('name', e)}
			/>
			<Text>종목</Text>
			<TextInput
				value={form.name}
				placeholder={'종목을 선택해주세요'}
				placeholderTextColor="#C5C8CE"
				onChange={e => onInput('name', e)}
			/>
			<Text>소속</Text>
			<TextInput
				value={form.name}
				placeholder={'소속명을 입력해주세요'}
				placeholderTextColor="#C5C8CE"
				onChange={e => onInput('name', e)}
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '30%',
		resizeMode: 'contain'
	},
});
