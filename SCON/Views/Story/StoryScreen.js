import React, {Component} from 'react';

import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import StoryElement from './StoryElement';

import styles from './StoryScreen.styles';
import FeedIcon from './assets/feedIcon.png';
import ResultIcon from './assets/resultIcon.png';
import ScheduleIcon from './assets/scheduleIcon.png';

export function StoryScreen({navigation}) {
  return (
    <SafeAreaView style={styles.storyScreenWrapper}>
      <StoryElement
        text="피드"
        imageSrc={FeedIcon}
        navlink={'FeedRegist'}
        names={['Brent', 'Satya', 'Michaś']}
      />
      <StoryElement
        text="대회 일정"
        imageSrc={ScheduleIcon}
        navlink={'CompetitionRegist'}
        names={['Brent', 'Satya', 'Michaś']}
      />
      <StoryElement
        text="대회 결과"
        imageSrc={ResultIcon}
        navlink={'CompetitionResult'}
        names={['Brent', 'Satya', 'Michaś']}
      />
    </SafeAreaView>
  );
}
