import React, {Component, useState} from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {CheckSmallIcon} from '../../../Assets/Icons'
export function GenderForm({form, setForm}) {
  const onChange = value => {
    setForm({
      ...form,
      ['gender']: value,
    })
  }
  return (
    <View>
      <Text>성별</Text>
      <RNPickerSelect
        placeholder={{
          label: '여자/남자 선택해주세요',
          value: null,
        }}
        onValueChange={value => onChange(value)}
        items={[
          {label: 'male', value: 'male'},
          {label: 'fmale', value: 'fmale'},
        ]}
      />
      <Image source={CheckSmallIcon} />
    </View>
  )
}
