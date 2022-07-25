import React, { Component, useState, useRef } from 'react';

import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput, SafeAreaView } from 'react-native';

export function Head({ data }) {
  if (!data) return <View />
  return (
    <View style={{ flex: 100 }}>
      <Image source={{ uri: data.backPic }} style={{ flex: 1, width: '20%', height: '10%' }} />
      <Image source={{ uri: data.profilePic }} style={{ flex: 1, width: '20%', height: '10%' }} />
    </View>
  );
}
