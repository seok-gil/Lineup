import React, {Component} from 'react';

import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import styles from './StoryScreen.styles';
import FeedIcon from './assets/feedIcon.png';
import ResultIcon from './assets/resultIcon.png';
import ScheduleIcon from './assets/scheduleIcon.png';

export function StoryScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 3}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FeedRegist', {
            names: ['Brent', 'Satya', 'Michaś'],
          })
        }>
        <Image source={FeedIcon} style={styles.storyIcon} />
        <Text>피드</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CompetitionRegist', {
            names: ['Brent', 'Satya', 'Michaś'],
          })
        }>
        <Image source={ScheduleIcon} style={styles.storyIcon} />
        <Text>대회 일정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CompetitionResult', {
            names: ['Brent', 'Satya', 'Michaś'],
          })
        }>
        <Image source={ResultIcon} style={styles.storyIcon} />
        <Text>대회 결과</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
