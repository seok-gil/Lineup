import React, {useState, useEffect} from 'react'
import {View, Image, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useIsFocused} from '@react-navigation/native'

import styles from './MypageProfile.styles'
import {ArrowIcon} from '../../Assets/svgs'

export function MypageProfile({navigation}) {
  const [data, setData] = useState()
  const isFocused = useIsFocused()
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/my-page',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else
        setData(thing)
      })
    })
  }, [isFocused])

  if (!data) return <View />
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileInnerWrapper}>
        <Image source={{uri: data.profilePic}} style={styles.profileImage} />
        <Text style={styles.nickname}>{data.name}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.modifyButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.modifyButtonText}>사용자 정보</Text>
          <ArrowIcon
            width={11}
            height={6}
            fill="#17D3F0"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
