import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from './DetailInfo.styles'
import {CircleAddIcon} from '../../../Assets/svgs'

const DetailInfo = ({data, openModal, type}) => {
  if (!data) return <View />
  // console.log(data)
  var ranking = data.ranking ? data.ranking + '위 ' : ''
  var score = data.score ? data.score : ''

  if (!type)
    return (
      <View style={styles.detailWrapper}>
        <Text style={styles.leagueTypeText}>
          {data.detailName}
          {data.ranking ? `(${data.ranking}위` : data.score ? '(' : ''}
          {data.score ? `${data.score})` : data.ranking ? ')' : ''}
        </Text>
        <TouchableOpacity
          style={styles.inputButtonWrapper}
          onPress={() => openModal(data)}>
          <CircleAddIcon style={styles.addIcon} />
          <Text style={styles.buttonInnerText}>입력하기</Text>
        </TouchableOpacity>
      </View>
    )
  else
    return (
      <View style={styles.detailWrapper}>
        <Text style={styles.leagueTypeText}>
          {data.detailName}
          {data.ranking ? `(${data.ranking}위 ${data.score}) ` : ''}
        </Text>
        <TouchableOpacity
          style={styles.inputButtonWrapper}
          onPress={() => openModal(data)}>
          <CircleAddIcon style={styles.addIcon} />
          <Text style={styles.buttonInnerText}>
            {data ? '수정하기 ' : '입력하기'}
          </Text>
        </TouchableOpacity>
      </View>
    )
}

export default DetailInfo
