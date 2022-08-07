import React, { useState, useEffect } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
	Modal,
	SafeAreaView,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import {LogoutModal}from './LogoutModal'
import {ApiFetch } from "../../Components"
import { DownIcon } from "../../Assets/Icons"

export function AccountScreen({ navigation }) {
	const [modal, setModal] = useState(false)
	const [data, setData] = useState()
	const onLogout = () => {
		setModal(true)
	}

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/acc-manage`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          setData(thing);
        })
  })
  }, []);
	if (!data) return <View/>
	return (
		<SafeAreaView style={{ flexDirection: 'column', }}>
			<TouchableOpacity onPress={onLogout}>
				<Text>로그아웃</Text>
				<Text>{data.email}</Text>
			<Image
				source={DownIcon}
			/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('PasswordChange')}>
				<Text>비밀번호변경</Text>
				<Image
				source={DownIcon}
			/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('PlayerRegist')}>
				<Text>선수 등록</Text>
				<Image
				source={DownIcon}
			/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Withdrawal')}>
				<Text>회원 탈퇴</Text>
				<Image
				source={DownIcon}
			/>
			</TouchableOpacity>
			<LogoutModal modal={modal} setModal={setModal} navigation={navigation}/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '30%',
		resizeMode: 'contain'
	},
});
