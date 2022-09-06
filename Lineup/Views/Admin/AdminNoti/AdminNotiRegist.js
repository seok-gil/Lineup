import React, { useState, useEffect } from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './AdminNotiRegist.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../../Components'
import { useIsFocused } from '@react-navigation/native';

export function AdminNotiRegist({ navigation, route }) {
  const isFocused = useIsFocused();
  var method = route.params ? 'PUT' : 'POST'
  const [apiUrl, setApiUrl] = useState('/admin/notice')
  // var apiUrl = '/admin/notice'
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  })

  // console.log("id", route.params.data.id)
  useEffect(() => {
    if (route && route.params && route.params.data) {
      setInputs({
        title: route.params.data.title,
        content: route.params.data.content,
      })
      method = 'PUT'
      setApiUrl(`/admin/notice/${route.params.data.id}`)
    }
  }, [route.params])

  const onChange = (keyvalue, e) => {
    const { text } = e.nativeEvent
    setInputs({
      ...inputs,
      [keyvalue]: text,
    })
  }

  const onSumit = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: method,
        url: apiUrl,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: JSON.stringify(inputs),
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else {
          setInputs({
            title: '',
            content: '',
          })
          navigation.navigate('ModalPage',
            {
              text: "공지사항이 등록되었어요.",
              page: '공지사항 목록'
            })
        }
      })
    })
  }

  return (
    <View style={styles.notiRegistWrapper}>
      <View style={styles.notiRegistInner}>
        <Text style={styles.notiRegistLabel}>제목</Text>
        <TextInput
          style={styles.titleInput}
          value={inputs.title}
          placeholder={'공지사항 제목을 입력해주세요'}
          placeholderTextColor="#C9C9C9"
          onChange={e => onChange('title', e)}
        />
        <Text style={styles.notiRegistLabel}>내용</Text>
        <TextInput
          style={styles.contentInput}
          value={inputs.content}
          placeholder={'상세 내용을 입력해주세요'}
          placeholderTextColor="#C9C9C9"
          onChange={e => onChange('content', e)}
        />
      </View>
      <TouchableOpacity onPress={() => onSumit()} style={styles.registButton}>
        <Text style={styles.registButtonText}>공지사항 등록</Text>
      </TouchableOpacity>
    </View>
  )
}
