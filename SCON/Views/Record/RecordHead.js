import React from 'react';
import {View, Image, Text} from 'react-native';

import {
  GoldMedalImage,
  SilverMedalImage,
  BronzeMedalImage,
} from '../../Assets/Images';

import styles from './RecordHead.styles';

function RecordHead({medal}) {
  return (
    <View style={styles.recordHeadWrapper}>
      <Text style={styles.recordHeadTitle}>선수 전적</Text>
      <View style={styles.recordHeadMedals}>
        <Image source={GoldMedalImage} style={styles.medalImage}></Image>
        <Text style={styles.medalNum}>{medal.gold}</Text>
        <Image source={SilverMedalImage} style={styles.medalImage}></Image>
        <Text style={styles.medalNum}>{medal.silver}</Text>
        <Image source={BronzeMedalImage} style={styles.medalImage}></Image>
        <Text style={styles.medalNum}>{medal.bronze}</Text>
      </View>
    </View>
  );
}

export default RecordHead;
