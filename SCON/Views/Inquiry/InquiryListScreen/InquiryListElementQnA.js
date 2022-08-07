import React, {useState} from 'react'

import {View, Text} from 'react-native'

import styles from './InquiryListElementQnA.styles'

function InquiryListElementQnA({data}) {
  return (
    <View style={styles.inquiryQnAWrapper}>
      <View style={styles.inquiryQuestion}>
        <Text style={styles.letter}>Q.</Text>
        <Text style={styles.content}>{data.inquiryContent}</Text>
      </View>
      {data.state && (
        <View style={styles.inquiryQuestion}>
          <Text style={styles.letter}>A.</Text>
          <Text style={styles.content}>{data.answerContent}</Text>
        </View>
      )}
    </View>
  )
}

export default InquiryListElementQnA
