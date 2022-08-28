import React, {useState} from 'react'
import {Calendar} from './Calender'

import {View, Text} from 'react-native'

import styles from './CompetitionRegistLabel.styles'

const CompetitionRegistLabel = ({text}) => {
  return (
    <View style={styles.labelWrapper}>
      <Text style={styles.inputLabelStyle}>{text}</Text>
      {<Text style={styles.asterisk}>*</Text>}
    </View>
  )
}

export default CompetitionRegistLabel
