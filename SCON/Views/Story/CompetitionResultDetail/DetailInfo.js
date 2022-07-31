import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './DetailInfo.styles';
import { CircleAddIcon } from '../../../Assets/Icons';

const DetailInfo = ({ data, openModal }) => {
  if (!data) return <View />
  console.log(data)
  var ranking = data.ranking ? data.ranking : ''
  var score = data.score ? data.score : ''
  return (
    <View style={styles.detailWrapper}>
      <Text style={styles.leagueTypeText}>
        {data.detailName}
        { !data.noAnswer ? `(${data.ranking}위 ${data.score}) ` : ''}
      </Text>
      <TouchableOpacity
        style={styles.inputButtonWrapper}
        onPress={() => openModal(data)}>
        <Image source={CircleAddIcon} style={styles.addIcon} />
        <Text style={styles.buttonInnerText}>{!data.noAnswer ? '입력하기' : '수정 ' }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailInfo;
