import React, { Component, useState } from 'react';
// import Modal from "react-native-modal";

import {
	Button,
	View,
	Text,
	StyleSheet,
	Modal,
	TouchableOpacity,
	SafeAreaView,
	CheckBox,

} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export function CompetitionResultDetail({ navigation }) {
	const Data = require('../../Assets/Data/CompetitionResultDetail.json').competition
	const [isSelected, setSelection] = useState(false);
	const [modal, setModal] = useState({
		open: false,
		modal_item: ''
	});

	const DetailOne = ({ item }) => {
		if (item.input)
			return (
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text>{item.name}</Text>
						<Text>({item.score} {item.score_detail})</Text>
					</View>
					<TouchableOpacity onPress={() => openModal(item)}>
						<Text>수정</Text>
					</TouchableOpacity>
				</View>
			)
		else
			return (
				<View style={{ flexDirection: 'row' }}>
					<Text>{item.name}</Text>
					<TouchableOpacity onPress={() => openModal(item)}>
						<Text>입력하기</Text>
					</TouchableOpacity>
				</View>
			)
	}
	const openModal = (item) => {
		if (item)
			setModal({
				open: true,
				modal_item: item
			})
		else
			setModal({
				open: false,
				modal_item: ''
			})
	}

	return (
		<SafeAreaView style={{ flex: 3 }}>
			<Text>대회</Text>
			<Text>{Data.name}</Text>
			<Text>종목</Text>
			{Data.detail.map((item, index) => {
				return (
					<View style={{ flexDirection: 'row' }}>
						<DetailOne item={item} key={index} />
					</View>
				)
			})}
			<Modal
				// animationType='slide'
				transparent={true}
				visible={modal.open}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text> 순위(필수입력)</Text>
						<View style={{ flexDirection: 'row' }}>
							<View>
								<Text> 1위 </Text>
								<Text> 금메달 </Text>
							</View>
							<View>
								<Text> 2위 </Text>
								<Text> 은메달 </Text>
							</View>
							<View>
								<Text> 3위 </Text>
								<Text> 동메달 </Text>
							</View>
							<View>
								<Text>
									직접입력
								</Text>
								<TextInput
									value={modal.open}
									placeholder={'예) 4위-30위'}
									placeholderTextColor='#C5C8CE'
									onChange={(e) => onChange("search", e)}
								>
								</TextInput>
							</View>
						</View>
						<View>
							<Text>
								기록, 스코어 등
							</Text>
							<TextInput
								value={modal.open}
								placeholder={'예) 27초 11.7'}
								placeholderTextColor='#C5C8CE'
								onChange={(e) => onChange("search", e)}
							>
							</TextInput>
						</View>
						<View>

						<CheckBox
							value={isSelected}
							onValueChange={setSelection}
							style={styles.checkbox}
							/>
						</View>
						<TouchableOpacity onPress={() => { openModal() }} >
							<Text> 결과를 입력하지 않겠습니다.</Text>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity onPress={() => { openModal() }} >
								<Text> 취소</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => { openModal() }} >
								<Text> 확인 </Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal >
		</SafeAreaView >
	);
}



const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		shadowColor: '#000',
		//그림자의 영역 지정
		shadowOffset: {
			width: 0,
			height: 2
		},
		//불투명도 지정
		shadowOpacity: 0.25,
		//반경 지정
		shadowRadius: 3.84,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	  },
	  checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	  },
	  checkbox: {
		alignSelf: "center",
	  },
	  label: {
		margin: 8,
	  },
})