import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import {Time, ApiFetch} from '../../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ArrowIcon} from '../../../Assets/svgs'
import styles from './InquiryOne.styles'

export function InquiryOne({data, setMount}) {
  if (!data) return <View />

  const [expand, setExpand] = useState(false)
  const [answer, setAnswer] = useState(data.AnswerContent)
  const [state, setState] = useState(false)

  const onExpand = () => {
    setExpand(!expand)
  }

  const onInput = e => {
    const {text} = e.nativeEvent
    setAnswer(text)
  }
  const onRegist = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'PUT',
        url: `/admin/inquiry/${data.id}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: JSON.stringify({
          answerContent: answer,
        }),
      }).then((thing) => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        setMount(new Date())
        setState(!state)
      })
    })
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => onExpand()}
        style={styles.inquiryListElementWrapper}>
        <View style={styles.inquiryLeft}>
          <Text style={styles.qnaInfo}>
            {data.state ? '답변완료' : '접수'} {'>'} {data.title}
          </Text>
          <Text style={styles.qnaCreated}>
            <Time time={data.date} separator="-" />
          </Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={expand ? styles.upIcon : styles.downIcon}
        />
      </TouchableOpacity>
      {expand && (
        <View style={styles.inquiryQnAWrapper}>
          <View style={styles.inquiryQuestion}>
            <Text style={styles.letter}>Q.</Text>
            <Text style={styles.content}>{data.inquiryContent} </Text>
          </View>
          <View style={styles.inquiryQuestion}>
            <Text style={styles.letter}>A.</Text>
            {state ? (
              <Text style={styles.content}>{answer}</Text>
            ) : (
              <TextInput
                style={styles.inquiryInput}
                value={answer}
                placeholder={'내용을 입력해주세요.'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput(e)}
              />
            )}
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => onRegist()}
                style={styles.button}>
                <Text style={styles.buttonText}>{state ? '수정' : '등록'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}
