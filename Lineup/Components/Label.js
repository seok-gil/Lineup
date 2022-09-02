import React from 'react'
import {View, Text} from 'react-native'
import {LabelIcon} from '../Assets/svgs'
import styles from './Label.styles'

export function Label({labelText}) {
  return (
    <View style={styles.labelWrapper}>
      <LabelIcon width={34} height={45} style={styles.labelIcon} />
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
  )
}
