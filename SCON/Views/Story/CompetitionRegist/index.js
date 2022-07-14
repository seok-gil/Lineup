import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Calendar } from './Calender';

import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import calendarIMG from '../../../Assets/Images/calendar.png';

export function CompetitionRegist({ navigation }) {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [form, setForm] = useState({
		place: '',
		name: '',
		detail: [''],
	})
	const [calendar, setCalender] = useState(false)
	const onChange = (keyvalue, e) => {
		const { text } = e.nativeEvent
		setForm({
			...form,
			[keyvalue]: text
		});
	}

	return (
		<SafeAreaView style={{ flex: 3 }}>
			<View style={{ flexDirection: 'column'}}>
				<Text> 대회기간 </Text>
				<View >
					<TouchableOpacity onPress={() => {
						setCalender(true)
					}}
				style={{ flexDirection: 'row' }}>
						<TextInput
							value={startDate}
							placeholder={' YYYY / MM / DD'}
							placeholderTextColor='#C5C8CE'
							onChange={(e) => onChange("start", e)}
						/>
						<Text>
							{" "}~{" "}
						</Text>
						<TextInput
							value={endDate}
							placeholder={' YYYY / MM / DD'}
							placeholderTextColor='#C5C8CE'
							onChange={(e) => setCalender(false)}
						/>
						<Image source={calendarIMG} />
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
				<Text> 세부 종목</Text>
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
			<Calendar calendar={calendar} setCalender={setCalender} setStartDate={setStartDate} setEndDate={setEndDate} />

		</SafeAreaView>
	);
}

