import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import {DownIcon} from '../../../Assets/Icons';

import InquiryListElementQnA from './InquiryListElementQnA';
import styles from './InquiryListElement.styles';

function InquiryListElement({data}) {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.inquiryListElementWrapper}
        onPress={onClick}>
        <View style={styles.inquiryLeft}>
          <Text style={styles.qnaInfo}>
            {data.answer ? '답변완료' : '접수'} {`>`} {data.title}
          </Text>
          <Text style={styles.qnaCreated}>{data.createdAt}</Text>
        </View>
        <Image
          source={DownIcon}
          style={expand ? styles.upIcon : styles.downIcon}
        />
      </TouchableOpacity>
      <View>{expand && <InquiryListElementQnA data={data} />}</View>
    </>
  );
}

export default InquiryListElement;
