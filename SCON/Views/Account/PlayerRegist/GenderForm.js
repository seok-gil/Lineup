import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

import styles from './GenderForm.styles'

export function GenderForm({form, setForm, setMount}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (value == '남자') code = '0'
    else code = '1'
    setForm({
      ...form,
      ['gender']: code,
    })
    setMount('gender')
  }, [value])

  return (
    <View style={styles.genderWrapper}>
      <Text style={styles.label}>성별</Text>
      <View style={styles.inputWrapper}>
        <DropDownPicker
          listMode='MODAL'
          zIndex={10}
          open={open}
          value={value}
          defaultIndex={0}
          setOpen={setOpen}
          setValue={setValue}
          dropDownDirection="TOP"
          placeholder="여자 / 남자 선택해주세요"
          dropDownContainerStyle={styles.dropdownContainerStyle}
          style={styles.dropdownStyle}
          textStyle={styles.textStyle}
          onChangeItem={value => console.log('a', value)}
          items={[
            {label: '남자', value: '남자'},
            {label: '여자', value: '여자'},
          ]}
        />
      </View>
    </View>
  )
}
