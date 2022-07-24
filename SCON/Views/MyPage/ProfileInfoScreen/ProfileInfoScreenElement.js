import React from 'react';
import {View, Text} from 'react-native';

import styles from './ProfileInfoScreenElement.styles';

function ProfileInfoScreenElement({label, text}) {
  return (
    <View style={styles.element}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default ProfileInfoScreenElement;
