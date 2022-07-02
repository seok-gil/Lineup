import React from 'react';
import {View, Image, Text} from 'react-native';

import Gold from '../../Assets/Images/GoldMedal.png';
import Silver from '../../Assets/Images/SilverMedal.png';
import Bronze from '../../Assets/Images/BronzeMedal.png';
import styles from './RecordHead.styles';

function RecordHead({medal}) {
  return (
    <View style={styles.recordHeadWrapper}>
      <Text style={styles.recordHeadTitle}>선수 전적</Text>
      <View style={styles.recordHeadMedals}>
        <Image source={Gold} style={styles.medalImage}></Image>
        <Text style={styles.medalNum}>{medal.gold}</Text>
        <Image source={Silver} style={styles.medalImage}></Image>
        <Text style={styles.medalNum}>{medal.silver}</Text>
        <Image source={Bronze} style={styles.medalImage}></Image>
        <Text style={styles.medalNum}>{medal.bronze}</Text>
      </View>
    </View>
  );
}

export default RecordHead;
