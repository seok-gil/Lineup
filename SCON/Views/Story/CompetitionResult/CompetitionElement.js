import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './CompetitionElement.styles';

const CompetitionElement = ({data, navigation}) => {
  console.log(data.input);
  let input = data.input;
  return (
    <View style={styles.competitionElementWrapper}>
      <View style={styles.competitionElementTexts}>
        <Text style={styles.dataName}> {data.name}</Text>
        <Text style={styles.dataDate}> {data.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CompetitionResultDetail', {
            names: ['Brent', 'Satya', 'Michaś'],
          })
        }>
        {input ? (
          <Text style={styles.modifyText}> 결과 입력</Text>
        ) : (
          <Text style={styles.modifyText}> 수정 하기</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CompetitionElement;
