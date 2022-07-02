import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form'
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';

export function CompetitionRegist({ navigation }) {
	const [form, setForm] = useState({
		start: '',
		end: '',
		place: '',
		name: '',
		detail: [''],
	})
	const onChange = (keyvalue, e) => {
		const { text } = e.nativeEvent
		setForm({
			...form,
			[keyvalue]: text
		});
		console.log(form)
	}

	return (
		<SafeAreaView>
			<View style={{ flexDirection: 'column' }}>
				<Text> 대회기간 </Text>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						value={form.start}
						placeholder={' YYYY / MM / DD'}
						placeholderTextColor='#C5C8CE'
						onChange={(e) => onChange("start", e)}
					/>
					<Text>
						{" "}~{" "}
					</Text>
					<TextInput
						value={form.end}
						placeholder={' YYYY / MM / DD'}
						placeholderTextColor='#C5C8CE'
						onChange={(e) => onChange("end", e)}
					/>
					<TouchableOpacity>
						<Text> 달력 </Text>
					</TouchableOpacity>
				</View>
				<Text> 대회 장소</Text>
				<TextInput
					value={form.place}
					placeholder={'예) 인천문학박태환수영장'}
					placeholderTextColor='#C5C8CE'
					onChange={(e) => onChange("place", e)}
				/>
				<Text> 대회 명</Text>
				<TextInput
					value={form.name}
					placeholder={'예) 제 22회 대통령배 종합수영경기'}
					placeholderTextColor='#C5C8CE'
					onChange={(e) => onChange("name", e)}
				/>
				<Text> 대회 장소</Text>
				<TextInput
					value={form.detail}
					placeholder={'예) 100m 달리기'}
					placeholderTextColor='#C5C8CE'
					onChange={(e) => onChange("detail", e)}
				/>
				<TouchableOpacity>
					<Text> X </Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> + </Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

