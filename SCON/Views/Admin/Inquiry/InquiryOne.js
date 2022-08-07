import React, {useEffect, useState} from 'react'
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native'

import {DownIcon} from '../../../Assets/Icons'
import {Time} from '../../../Components/Time'

import styles from './InquiryOne.styles'

export function InquiryOne({data}) {
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
    setState(!state)
  }

  return (
    <View>
      <TouchableOpacity
        onPress={onExpand}
        style={styles.inquiryListElementWrapper}>
        <View style={styles.inquiryLeft}>
          <Text style={styles.qnaInfo}>
            {data.AnswerState ? '답변완료' : '접수'} {`>`} {data.InquiryTitle}
          </Text>
          <Text style={styles.qnaCreated}>
            <Time time={data.InquiryDateTime} separator="-" />
          </Text>
        </View>
        <Image
          source={DownIcon}
          style={expand ? styles.upIcon : styles.downIcon}
        />
      </TouchableOpacity>
      {expand && (
        <View style={styles.inquiryQnAWrapper}>
          <View style={styles.inquiryQuestion}>
            <Text style={styles.letter}>Q.</Text>
            <Text style={styles.content}>{data.InquiryContent} </Text>
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
              <TouchableOpacity onPress={onRegist} style={styles.button}>
                <Text style={styles.buttonText}>{state ? '수정' : '등록'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}
