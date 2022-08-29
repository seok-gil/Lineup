import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {ArrowIcon} from '../../Assets/svgs'

import styles from './NotiElement.styles'
import {Time} from '../../Components/Time'
function NotiElement({data}) {
  const [expand, setExpand] = useState(false)
  const onClick = () => {
    setExpand(!expand)
  }
  if (!data) return <View />
  return (
    <View>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.notiElementWrapper}>
          <View style={styles.notiElementLeft}>
            <Text style={styles.notiTitle}>{data.title}</Text>
            <Text style={styles.notiCreated}>
              <Time time={data.dateTime} separator="-" />
            </Text>
          </View>
          <ArrowIcon
            width={11}
            height={6}
            fill="#0E0E0E"
            style={expand ? styles.upIcon : styles.downIcon}
          />
        </View>
      </TouchableOpacity>
      {expand && (
        <View style={styles.expanded}>
          <Text style={styles.expandedContent}>{data.content}</Text>
        </View>
      )}
    </View>
  )
}

export default NotiElement
