import React, {useState} from 'react';
import {Calendar} from './Calender';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './DetailEventElement.styles';
import {XIcon, CircleAddIconBlue} from '../../../Assets/Icons';

function DetailEventElement({form, isLastOne}) {
  return (
    <View style={styles.detailEventWrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInputStyle}
          value={form.detail}
          placeholder={'예) 100m 달리기'}
          placeholderTextColor="#0E0E0E66"
          onChange={e => onChange('detail', e)}
        />
        <TouchableOpacity style={styles.xIconWrapper}>
          <Image source={XIcon} />
        </TouchableOpacity>
      </View>
      {isLastOne && (
        <TouchableOpacity style={styles.addIconWrapper}>
          <Image source={CircleAddIconBlue} style={styles.addIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default DetailEventElement;
