import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './AdminNotiOne.styles'
import {Time} from '../../../Components'
import AsyncStorage from '@react-native-community/async-storage'

export function AdminOne({data, navigation}) {
  if (!data) return <View />
  const onEdit = () => {
    navigation.navigate('공지사항 등록', {data: data})
  }
  const onDel = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'DELETE',
        url: `/admin/notice`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        console.log('thing', thing)
      })
    })
  }

  return (
    <View style={styles.notiElementWrapper}>
      <View style={styles.notiElementLeft}>
        <Text style={styles.notiTitle}>{data.title}</Text>
        <Text style={styles.notiCreated}>
          <Time time={data.dateTime} separator="-" />
        </Text>
      </View>
      <View style={styles.notiElementRight}>
        <TouchableOpacity onPress={() => onEdit()} style={styles.notiButton}>
          <Text style={styles.notiButtonText}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDel()} style={styles.notiButton}>
          <Text style={styles.notiButtonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
