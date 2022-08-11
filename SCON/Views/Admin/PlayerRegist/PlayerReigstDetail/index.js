import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { ApiFetch } from '../../../../Components/API/ApiFetch'
import { PlayerRegistRefuse } from './PlayerRegistRefuse'
import AsyncStorage from '@react-native-community/async-storage'

export function PlayerReigstDetail({ route, navigation }) {
  const [data, setData] = useState()

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/admin/player-regist-detail/${route.params.playerRegistId}`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log(thing)
          setData(thing)
        })
      })
  }, []);
  if (!data) return (<SafeAreaView />)
  return (
    <SafeAreaView>
      <Text>신청 계정</Text>
      <View>
        <Text>{data.nickName}</Text>
        <Text>{data.email}</Text>
      </View>
      <Text>등록 정보</Text>
      <Image source={{ uri: data.certificate }} style={styles.image} />
      <Text>이름</Text>
      <Text>{data.name}</Text>
      <Text>생년월일</Text>
      {data.birth ?
        <Text>
          {data.birth.slice(0, 4)}년 {data.birth.slice(5, 7)}월{' '}
          {data.birth.slice(8, 10)}일
        </Text>
        :
        <Text>
        생년월일입력을 하지 않았습니다.
      </Text>
      }
      <Text>성별</Text>
      <Text>{data.gender} </Text>
      <Text>종목</Text>
      <Text>{data.sport}</Text>
      <Text>소속명</Text>
      <Text>{data.belong}</Text>
      <PlayerRegistRefuse navigation={navigation} params={route.params} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
})
