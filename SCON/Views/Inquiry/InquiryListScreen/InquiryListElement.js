import React, {useState} from 'react'

import {View, Text, TouchableOpacity} from 'react-native'

import {ArrowIcon} from '../../../Assets/svgs'

import {Time} from '../../../Components/Time'
import InquiryListElementQnA from './InquiryListElementQnA'
import styles from './InquiryListElement.styles'

function InquiryListElement({data}) {
  const [expand, setExpand] = useState(false)
  const onClick = () => {
    setExpand(!expand)
  }

  if (!data) return <View />
  return (
    <View>
      <TouchableOpacity
        style={styles.inquiryListElementWrapper}
        onPress={onClick}>
        <View style={styles.inquiryLeft}>
          <View style={styles.title}>
            <Text style={styles.qnaInfo}>
              {data.state ? '답변완료' : '접수'}
            </Text>
            <ArrowIcon
              width={9}
              height={5}
              fill="#0E0E0E"
              style={styles.titleArrow}
            />
            <Text style={styles.qnaInfo}>{data.title}</Text>
          </View>
          <Text style={styles.qnaCreated}>
            <Time time={data.date} separator="-" />
          </Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={expand ? styles.upIcon : styles.downIcon}
        />
      </TouchableOpacity>
      <View>{expand && <InquiryListElementQnA data={data} />}</View>
    </View>
  )
}

export default InquiryListElement
