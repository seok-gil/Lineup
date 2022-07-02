import React from 'react';
import {View, Image, Text} from 'react-native';

import Gold from '../../Assets/Images/GoldMedal.png';
import Silver from '../../Assets/Images/SilverMedal.png';
import Bronze from '../../Assets/Images/BronzeMedal.png';

function RecordHead({medal}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>선수전적</Text>
      <View style={{flexDirection: 'row'}}>
        <Image source={Gold}></Image>
        <Text> {medal.gold}</Text>
        <Image source={Silver}></Image>
        <Text> {medal.silver}</Text>
        <Image source={Bronze}></Image>
        <Text> {medal.bronze}</Text>
      </View>
    </View>
  );
}

export default RecordHead;
