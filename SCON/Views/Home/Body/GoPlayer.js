import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './GoPlayer.styles';
import {AlertIcon, XIcon} from '../../../Assets/Icons';

export function GoPlayer({setgoPlayer, navigation}) {
  const onClick = () => {
    setgoPlayer(false);
  };

  return (
    <View style={styles.goPlayerWrapper}>
      <TouchableOpacity
        style={[styles.touchable, styles.touchableLeft]}
        onPress={() => navigation.navigate('PlayerRegist')}>
        <Image source={AlertIcon} style={styles.alertImage} />
        <Text style={styles.alertText}>선수로 등록하시겠어요?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchable, styles.touchableRight]}
        onPress={() => onClick()}>
        <Image source={XIcon} />
      </TouchableOpacity>
    </View>
  );
}
