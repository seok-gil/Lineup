import React from 'react';

import {View} from 'react-native';
import InquiryListElement from './InquiryListElement';
import {inquriy as data} from '../../../Assets/Data/Inquiry.json';

import styles from './InquiryListScreen.styles';

export function InquiryListScreen() {
  return (
    <View style={styles.inquiryScreenWrapper}>
      {data.map((item, index) => {
        return <InquiryListElement key={index} data={item} />;
      })}
    </View>
  );
}
