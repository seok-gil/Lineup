import React from 'react';
import {View, StyleSheet} from 'react-native';

import MypageProfile from './MypageProfile';
import MypageTab from './MypageTab';

import styles from './MypageScreen.styles';

export function MyPageScreen({navigation}) {
  return (
    <View style={styles.mypageScreenWrapper}>
      <MypageProfile navigation={navigation} />
      <MypageTab navigation={navigation} />
    </View>
  );
}
