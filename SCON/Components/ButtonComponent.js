import React, { Component, useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ButtonBig({onPress}) {
  return (
    <View>
		<TouchableOpacity onPress={onPress}>
			<Text>
			ButtonBig
			</Text>
		</TouchableOpacity>
    </View>
  );
}