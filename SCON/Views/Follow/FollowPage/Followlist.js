import React, { Component, useState, useRef } from 'react';

import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput, SafeAreaView } from 'react-native';

export function Followlist({ data }) {
  if (!data) return <View />
  console.log(data)
  return (
    <View style={{ flex: 100, flexDirection: 'row' }}>
      <Image source={{ uri: data.profilePic }} style={{ flex: 1, width: '10%', height: '10%' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text>{data.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>{data.sport}/</Text>
            <Text>{data.belong}</Text>
          </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text>11</Text>
              <Text>전적</Text>
            </View>
            <View>
              <Text>11</Text>
              <Text>순위</Text>
            </View>
            <View>
              <Text>11</Text>
              <Text>팬</Text>
            </View>
        </View>
      </View>
    </View>
  );
}
