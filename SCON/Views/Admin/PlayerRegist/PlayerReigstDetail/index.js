import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { ApiFetchOne } from "../../../../Components/API/ApiFetch"
import { PlayerRegistRefuse } from "./PlayerRegistRefuse"

export function PlayerReigstDetail({ route, navigation }) {
  const [data, setData] = useState();
  const gender = ["남자", "여자"]
  useEffect(() => {
    ApiFetchOne({
      method: 'GET',
      url: `http://localhost:1337/api/player-regist-details/${route.params.PlayerRegistId}`,
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);

  if (!data) return (<SafeAreaView />)
  return (
    <SafeAreaView>
      <Text>신청 계정</Text>
      <View>
        <Text>{data.Nickname}</Text>
        <Text>{data.Email}</Text>
      </View>
      <Text>등록 정보</Text>
      <Image source={{ uri: data.PlayerRegistPic }} style={styles.image} />
      <Text>이름</Text>
      <Text>{data.Name}</Text>
      <Text>생년월일</Text>
      <Text>{data.Birth.slice(0, 4)}년 {data.Birth.slice(5, 7)}월 {data.Birth.slice(8, 10)}일</Text>
      <Text>성별</Text>
      <Text>{gender[data.Gender]} </Text>
      <Text>종목</Text>
      <Text>{data.Sport}</Text>
      <Text>소속명</Text>
      <Text>{data.Belong}</Text>
      <PlayerRegistRefuse params={route.params}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
});
