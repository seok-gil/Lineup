import React, { Component, useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ButtonBig({text,onPress}) {
  return (
    <View>
		<TouchableOpacity onPress={onPress}>
			<Text>
				{text}
			</Text>
		</TouchableOpacity>
    </View>
  );
}

export function ButtonMiddleOn({text,onPress}) {
	return (
	  <View>
		  <TouchableOpacity onPress={onPress}>
			  <Text>
				  {text}
			  </Text>
		  </TouchableOpacity>
	  </View>
	);
  }

export function ButtonMiddleOff({text,onPress}) {
	return (
	  <View>
		  <TouchableOpacity onPress={onPress}>
			  <Text>
				  {text}
			  </Text>
		  </TouchableOpacity>
	  </View>
	);
  }