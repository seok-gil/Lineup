import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native'
import {ScrollView, TextInput} from 'react-native-gesture-handler'

import {ApiFetch} from '../../../../Components/API/ApiFetch'
import {PlayerRegistRefuse} from './PlayerRegistRefuse'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './PlayerRegistDetail.styles'

export function PlayerReigstDetail({route, navigation}) {
  const [data, setData] = useState()

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/admin/player-regist-detail/${route.params.playerRegistId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else setData(thing)
      })
    })
  }, [])

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.playerDetailWrapper}>
        <ScrollView contentContainerStyle={styles.scrollWrapper}>
          <Text style={styles.label}>신청 계정</Text>
          <View style={styles.accountWrapper}>
            <Text style={styles.accountName}>{data.nickname}</Text>
            <Text style={styles.accountEmail}>{data.email}</Text>
          </View>
          <Text style={styles.label}>등록 정보</Text>
          <View style={styles.imageWrapper}>
            <Image source={{uri: data.certificate}} style={styles.image} />
          </View>
          <Text style={styles.label}>이름</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{data.name}</Text>
          </View>
          <Text style={styles.label}>생년월일</Text>
          <View style={styles.textWrapper}>
            {data.birth ? (
              <Text style={styles.text}>
                {data.birth.slice(0, 4)}년 {data.birth.slice(5, 7)}월{' '}
                {data.birth.slice(8, 10)}일
              </Text>
            ) : (
              <Text style={styles.text}>생년월일입력을 하지 않았습니다.</Text>
            )}
          </View>
          <Text style={styles.label}>성별</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{data.gender} </Text>
          </View>
          <Text style={styles.label}>종목</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{data.sport}</Text>
          </View>
          <Text style={styles.label}>소속명</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{data.belong}</Text>
          </View>
        </ScrollView>
      </View>
      <PlayerRegistRefuse navigation={navigation} params={route.params} />
    </SafeAreaView>
  )
}
