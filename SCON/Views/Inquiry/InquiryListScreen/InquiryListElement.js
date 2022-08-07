import React, {useState} from 'react'

import {View, Text, TouchableOpacity, Image} from 'react-native'

import {DownIcon} from '../../../Assets/Icons'
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
          <Text style={styles.qnaInfo}>
            {data.state ? '답변완료' : '접수'} {`>`} {data.title}
          </Text>
          <Text style={styles.qnaCreated}>
            <Time time={data.date} separator="-" />
          </Text>
        </View>
        <Image
          source={DownIcon}
          style={expand ? styles.upIcon : styles.downIcon}
        />
      </TouchableOpacity>
      <View>{expand && <InquiryListElementQnA data={data} />}</View>
    </View>
  )
}

export default InquiryListElement
