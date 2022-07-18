import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';

export function ReporterOne({ data }) {
  console.log(data)
  return (
    <View style={{flexDirection:'row'}}>
      <Image source={{uri:data.ProfilePic}} style={styles.image}/>
      <Text>{data.MemberId}</Text>
      <Text>{data.Email}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
  },
});
