import React, {useEffect, useState} from 'react';
import {ApiFetchOne} from '../../../Components/API/ApiFetch';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './CompetitionButton.styles';

function CompetitionButton({data, navigation}) {
  
  const onPress = () => {
    console.log(data)
    // navigation.navigate('StoryScreen')
  }

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.followButton}>
      <Text style={styles.followText}> 확인</Text>
    </TouchableOpacity>
  );
}

export default CompetitionButton;
