import React, { Component } from 'react';
import { Button, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { DefaultProfileImage } from '../../../Assets/Images';

export function AdminProfile({ data, navigation }) {
  if (!data) return <View />
  return (
    <View style={{ flexDirection: 'column' }}>
      <Image source={DefaultProfileImage} style={styles.image} />
      <Text> 관리자</Text>
      <Text> {data.Email} </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
  },
});
