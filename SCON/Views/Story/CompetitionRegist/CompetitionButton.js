import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './CompetitionButton.styles';

function CompetitionButton({ data, navigation }) {

  const onPress = () => {
    console.log(data)
    // navigation.navigate('StoryScreen')
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
