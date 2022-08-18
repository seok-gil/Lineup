import React, {Component, useState} from 'react'
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {DownIcon} from '../../../Assets/Icons'
import styles from './BirthForm.styles'

export function BirthForm({form, setForm, validate}) {
  const [pickOn, setPickOn] = useState(false)
  const [text, setText] = useState()
  const showDatePicker = () => {
    setPickOn(true)
  }
  const handleConfirm = date => {
    let dateString =
      date.getFullYear() +
      '년 ' +
      (date.getMonth() + 1) +
      '월 ' +
      date.getDate() +
      '일'
    console.log(date)
    setText(dateString)
    setForm({...form, ['birth']: date})
    hideDatePicker()
  }

  const hideDatePicker = () => {
    setPickOn(false)
  }
  return (
    <View style={styles.birthWrapper}>
      <Text style={styles.label}>생년월일</Text>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.inputWrapper}>
          <Text style={styles.input}>
            {text ? text : '생년월일을 선택해주세요'}
          </Text>
          <Image source={DownIcon} style={styles.downIcon} />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={pickOn}
        mode="date"
        confirmTextIOS="선택"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}
