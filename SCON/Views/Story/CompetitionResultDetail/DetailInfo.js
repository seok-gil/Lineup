import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './DetailInfo.styles';
import { CircleAddIcon } from '../../../Assets/Icons';

const DetailInfo = ({ data, openModal, result }) => {
  if (!data) return <View />
  // console.log(data)
  var ranking = data.ranking ? data.ranking : ''
  var score = data.score ? data.score : ''
  
  return (
    <View style={styles.detailWrapper}>
      <Text style={styles.leagueTypeText}>
        {data.detailName}
        { result ? `(${data.ranking}위 ${data.score}) ` : ''}
      </Text>
      <TouchableOpacity
        style={styles.inputButtonWrapper}
        onPress={() => openModal(data)}>
        <Image source={CircleAddIcon} style={styles.addIcon} />
        <Text style={styles.buttonInnerText}>{result ? '수정 ' : '입력하기' }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailInfo;
