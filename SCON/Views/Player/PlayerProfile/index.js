import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { PlayerProfileTab } from "./PlayerProfileTab"
import { PlayerData } from './PlayerData';

export function PlayerProfile({ data, navigation }) {
	return (
	  <View>
		<View style={{ flexDirection: 'row' }}>
		  <PlayerProfileTab data={data} />
		  <PlayerData data={data} navigation={navigation} />
		</View>
	  </View>
	);
  }
  