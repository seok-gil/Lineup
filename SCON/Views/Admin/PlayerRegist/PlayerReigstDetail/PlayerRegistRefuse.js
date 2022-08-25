import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from '../../../../Components'

import styles from './PlayerRegistRefuse.styles'

export function PlayerRegistRefuse({navigation, params}) {
  const [isSelected, setSelection] = useState(false)
  const [refuseContent, setRefuseComment] = useState()
  const state = params.state
  const onInput = e => {
    const {text} = e.nativeEvent
    setRefuseComment(text)
  }
  const onAccept = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'POST',
        url: `/admin/player-regist-detail/${params.playerRegistId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(() => {
        navigation.navigate('ModalPage', {
          text: '승인 처리가 완료되었어요!',
          page: 'AdminMyPageScreen',
        })
      })
    })
  }
  const onRefuse = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'PUT',
        url: `/admin/player-regist-detail/${params.playerRegistId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: JSON.stringify({
          refuseContent,
        }),
      }).then(() => {
        navigation.navigate('ModalPage', {
          text: '플레이어 등록처리가\n반려되었습니다!',
          page: 'AdminMyPageScreen',
        })
      })
    })
  }
  const onClick = () => {
    setSelection(!isSelected)
  }

  return (
    <View style={styles.refuseWrapper}>
      {state != 1 && (
        <View style={styles.refuseTop}>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={isSelected}
              boxType="square"
              style={styles.checkbox}
              onValueChange={() => onClick()}
            />
            <Text style={styles.label}>반려 사유</Text>
          </View>
          <TextInput
            style={isSelected ? styles.textInput : styles.textInputNotShown}
            disabled={!isSelected}
            multiline={true}
            value={refuseContent}
            placeholder={'내용을 입력해주세요.'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput(e)}
          />
        </View>
      )}
      {state == 0 && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            disabled={isSelected}
            onPress={() => onAccept()}
            style={{...styles.button, ...styles.acceptButton}}>
            <Text style={styles.buttonText}>승인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isSelected}
            onPress={() => onRefuse()}
            style={styles.button}>
            <Text style={styles.buttonText}>반려</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
