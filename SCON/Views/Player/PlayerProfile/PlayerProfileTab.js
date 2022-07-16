import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function PlayerProfileTab({ data }) {
	return (
	  <View style={{ flexDirection: 'row' }}>
		<Image source={{uri : data.backPic}} style={styles.image} />
		<Image source={{uri : data.profilePic}} style={styles.image} />
		<View style={{ flexDirection: 'column' }}>
		  <Text> {data.sport}</Text>
		  <Text> {data.belong}</Text>
		</View>
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
  