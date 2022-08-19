import React, {Component, useState} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {CheckSmallIcon} from '../../../Assets/Icons'

export function BirthForm({form, setForm, setMount}) {
    const [pickOn, setPickOn] = useState(false)
    const [text, setText] = useState()
    const showDatePicker = () => {
        setPickOn(true)
    }
    const handleConfirm = date => {
        let dateString =
      date.getFullYear() +
      '년' +
      (date.getMonth() + 1) +
      '월' +
      date.getDate() +
      '일'
        setText(dateString)
        setForm({...form, ['birth']: date})
        hideDatePicker()
        setMount('birth')
    }

    const hideDatePicker = () => {
        setPickOn(false)
    }
    return (
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity onPress={showDatePicker}>
                <Text>생년월일</Text>
                <TextInput
                    value={text}
                    placeholder={'생년월일을 선택해주세요'}
                    placeholderTextColor="#0E0E0E66"
                    editable={false}
                />
                <DateTimePickerModal
                    isVisible={pickOn}
                    mode="date"
                    confirmTextIOS="선택"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
        </View>
    )
}
