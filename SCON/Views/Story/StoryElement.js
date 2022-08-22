import React from 'react'
import {Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import styles from './StoryElement.styles'
import {FeedIcon, ResultIcon, ScheduleIcon} from './assets'
import {ArrowIcon} from '../../Assets/svgs'

const StoryElement = ({navigation, navlink, props, text, imageSrc}) => {
  const icon = [
    <FeedIcon width={18} height={18} style={styles.storyIcon} />,
    <ResultIcon width={18} height={18} style={styles.storyIcon} />,
    <ScheduleIcon width={18} height={18} style={styles.storyIcon} />,
  ]

  return (
    <TouchableOpacity
      style={styles.storyElementWrapper}
      onPress={() => navigation.navigate(navlink, props)}>
      {icon[imageSrc]}
      <View style={styles.storyTextWrapper}>
        <Text style={styles.storyText}>{text}</Text>
      </View>
      <ArrowIcon width={11} height={6} style={styles.rightIcon} />
    </TouchableOpacity>
  )
}

export default StoryElement
