import React from 'react'

import {SafeAreaView, View} from 'react-native'

import StoryElement from './StoryElement'

import styles from './StoryScreen.styles'

export function StoryScreen({navigation}) {
  return (
    <SafeAreaView style={styles.storyScreenWrapper}>
      <StoryElement
        navigation={navigation}
        text="피드"
        imageSrc={0}
        navlink={'FeedRegist'}
        props={{type: 'POST'}}
      />
      <StoryElement
        navigation={navigation}
        text="대회 일정"
        imageSrc={1}
        navlink={'CompetitionRegist'}
        props={{type: 'POST'}}
      />
      <StoryElement
        navigation={navigation}
        text="대회 결과"
        imageSrc={2}
        navlink={'CompetitionResult'}
        props={{type: 'POST'}}
      />
    </SafeAreaView>
  )
}
