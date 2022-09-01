import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './SportForm.styles'

export function SportForm({form, setForm, setMount, open, setOpen}) {
  // const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const sport = [
    '근대5종',
    '농구',
    '레슬링',
    '롤러',
    '배구',
    '배드민턴',
    '복싱',
    '볼링',
    '사격',
    '세팍타크로',
    '수영',
    '핀수영',
    '스쿼시',
    '씨름',
    '야구',
    '소프트볼',
    '양궁',
    '역도',
    '우슈',
    '유도',
    '육상',
    '자전거',
    '조정',
    '철인3종',
    '체조',
    '축구',
    '카누',
    '컬링',
    '탁구',
    '태권도',
    '테니스',
    '펜싱',
    '하키',
    '합기도',
    '핸드볼',
  ]
  var item = []
  for (i in sport) {
    item.push({label: sport[i], value: sport[i]})
  }
  useEffect(() => {
    setForm({
      ...form,
      ['sport']: value,
    })
    setMount('sport')
  }, [value])
  // export type ListModeType = 'DEFAULT' | 'FLATLIST' | 'SCROLLVIEW' | 'MODAL';

  return (
    <View style={styles.sportWrapper}>
      <Text style={styles.label}>종목</Text>
      <View style={styles.inputWrapper}>
        <DropDownPicker
          listMode="MODAL"
          scrollViewProps={{
            nestedScrollEnabled: true,
          }}
          scrollEnabled={open}
          zIndex={9}
          open={open}
          value={value}
          defaultIndex={0}
          dropDownDirection="TOP"
          setOpen={setOpen}
          setValue={setValue}
          placeholder="종목을 선택해주세요"
          dropDownContainerStyle={styles.dropdownContainerStyle}
          style={styles.dropdownStyle}
          textStyle={styles.textStyle}
          onChangeItem={value => console.log('a', value)}
          items={item}
        />
      </View>
    </View>
  )
}
