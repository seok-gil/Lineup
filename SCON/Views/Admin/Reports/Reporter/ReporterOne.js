import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import styles from './ReporterOne.styles';

export function ReporterOne({data}) {
  return (
    <View style={styles.reporterOneWrapper}>
      <Image source={{uri: data.ProfilePic}} style={styles.image} />
      <Text style={styles.name}>{data.memberId}</Text>
      <Text style={styles.email}>{data.email}</Text>
    </View>
  );
}
