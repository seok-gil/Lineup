import React, { useEffect, useState } from 'react';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import { TouchableOpacity, Text, View } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"

import styles from './CompetitionButton.styles';

function CompetitionButton({ data, navigation }) {
  console.log(data)
  const onPress = () => {
    AsyncStorage.getItem("accessToken")
    .then((thing) => {
      ApiFetch({
        method: 'POST',
        url: `http://15.164.100.211:8080/player/event`,
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + thing,
        },
        body : JSON.stringify(data)
      }).then(thing => {
        console.log("Feed", thing)
        navigation.navigate('StoryScreen')
      }).catch(error => {
        console.log("Login ERROR", error)
      })
  })
    navigation.navigate('StoryScreen')
  }


  const buttonStyle =
    data.endDate && data.location && data.eventName ? styles.filledButton : styles.notfillButton;

  const buttonTextStyle =
  data.endDate && data.location && data.eventName ? styles.filledText : styles.notfillText;
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={buttonStyle}>
      <Text style={buttonTextStyle}>확인</Text>
    </TouchableOpacity>
  );
}
export default CompetitionButton;