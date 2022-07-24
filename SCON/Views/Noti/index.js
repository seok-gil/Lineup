import React, {Component, useState} from 'react';
import {View} from 'react-native';

import NotiElement from './NotiElement';
import {noti as data} from '../../Assets/Data/Noti.json';

import styles from './Noti.styles';

export function NotiScreen({navigation}) {
  return (
    <View style={styles.notiWrapper}>
      {data.map((item, index) => {
        return <NotiElement key={index} data={item} />;
      })}
    </View>
  );
}
