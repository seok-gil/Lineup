import React, {useState} from 'react';

import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';


import styles from './InquiryListElementQnA.styles';

function InquiryListElementQnA({data}) {
  return (
    <View style={styles.inquiryQnAWrapper}>
      <View style={styles.inquiryQuestion}>
        <Text style={styles.letter}>Q.</Text>
        <Text style={styles.content}>{data.InquiryContent}</Text>
      </View>
      {data.AnswerState && (
        <View style={styles.inquiryQuestion}>
          <Text style={styles.letter}>A.</Text>
          <Text style={styles.content}>{data.AnswerContent}</Text>
        </View>
      )}
    </View>
  );
}

export default InquiryListElementQnA;
