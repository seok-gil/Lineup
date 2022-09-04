import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from './DetailInfo.styles'
import {CircleAddIcon} from '../../../Assets/svgs'

const DetailInfo = ({data, openModal, type}) => {
  if (!data) return <View />
  // var ranking = data.ranking ? data.ranking + '위 ' : ''
  // var score = data.score ? data.score : ''

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
          <CircleAddIcon
            style={styles.addIcon}
            width={12}
            height={12}
            fill="#060606"
          />
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
        {data ? (
          <TouchableOpacity
            style={styles.inputButtonWrapperModify}
            onPress={() => openModal(data)}>
            <Text style={styles.buttonInnerTextModify}>수정</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.inputButtonWrapper}
            onPress={() => openModal(data)}>
            <CircleAddIcon
              style={styles.addIcon}
              width={12}
              height={12}
              fill="#060606"
            />
            <Text style={styles.buttonInnerText}>입력하기</Text>
          </TouchableOpacity>
        )}
      </View>
    )
}

export default DetailInfo
