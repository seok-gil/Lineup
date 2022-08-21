import React, {useState} from 'react'
import {Calendar} from './Calender'

import {View, Text} from 'react-native'

import styles from './CompetitionRegistLabel.styles'

const CompetitionRegistLabel = ({text, isAsterisk}) => {
  return (
    <View style={styles.labelWrapper}>
      <Text style={styles.inputLabelStyle}>{text}</Text>
      {isAsterisk && <Text style={styles.asterisk}>*</Text>}
    </View>
  )
}

export default CompetitionRegistLabel
