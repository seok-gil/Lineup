import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './CompetitionElement.styles';
import { Time } from '../../../Components/Time';

const CompetitionElement = ({data, navigation}) => {
  if (!data) return <View/>
  return (
    <View style={styles.competitionElementWrapper}>
      <View style={styles.competitionElementTexts}>
        <Text style={styles.dataName}> {data.eventName}</Text>
        <Text style={styles.dataDate}> <Time time = {data.startDate} separator='-'/> </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CompetitionResultDetail', {
            data : data,
            type : data.existResult
          })
        }>
        {!data.existResult ? (
          <Text style={styles.modifyText}> 결과 입력</Text>
        ) : (
          <Text style={styles.modifyText}> 수정 하기</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CompetitionElement;
