import React, { Component, useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export function BirthForm({ form, setForm }) {
  const [pickOn, setPickOn] = useState(false)

  const showDatePicker = () => {
    setPickOn(true)
    console.log(pickOn)
  }
  const handleConfirm = (date) => {
    let dateString = 
    date.getFullYear() + '년' + 
    (date.getMonth() + 1) + '월' +
    date.getDate() + '일'
    setForm({...form, birth : dateString})
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setPickOn(false);
  };
  return (
    <View style={{ flexDirection: 'column', }}>
      <TouchableOpacity onPress={showDatePicker}>
      <Text>생년월일</Text>
        <TextInput
          value={form.birth}
          placeholder={'생년월일을 선택해주세요'}
          placeholderTextColor="#C5C8CE"
        />
      <DateTimePickerModal
        isVisible={pickOn}
        mode="date"
        confirmTextIOS='선택'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        />
        </TouchableOpacity>
    </View>
  );
}