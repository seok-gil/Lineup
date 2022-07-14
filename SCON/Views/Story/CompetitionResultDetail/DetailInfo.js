import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './DetailInfo.styles';
import {CircleAddIcon} from '../../../Assets/Icons';

const DetailInfo = ({item, openModal}) => {
  return (
    <View style={styles.detailWrapper}>
      <Text style={styles.leagueTypeText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.inputButtonWrapper}
        onPress={() => openModal(item)}>
        <Image source={CircleAddIcon} style={styles.addIcon} />
        <Text style={styles.buttonInnerText}>입력하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailInfo;
