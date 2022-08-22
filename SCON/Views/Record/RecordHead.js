import React from 'react'
import {View, Text} from 'react-native'

import {MedalIcon} from '../../Assets/svgs'

import styles from './RecordHead.styles'

function RecordHead({data}) {
  const gold = data.filter(gold => gold.ranking == 1).length
  const silver = data.filter(silver => silver.ranking == 2).length
  const bronze = data.filter(bronze => bronze.ranking == 3).length

  return (
    <View style={styles.recordHeadWrapper}>
      <Text style={styles.recordHeadTitle}>선수 전적</Text>
      <View style={styles.recordHeadMedals}>
        <MedalIcon
          width={20}
          height={20}
          fill="#FFA800"
          style={styles.medalImage}
        />
        <Text style={styles.medalNum}>{gold}</Text>
        <MedalIcon
          width={20}
          height={20}
          style={styles.medalImage}
          fill="#A0A0A0"
        />
        <Text style={styles.medalNum}>{silver}</Text>
        <MedalIcon
          width={20}
          height={20}
          style={styles.medalImage}
          fill="#AF4A00"
        />
        <Text style={styles.medalNum}>{bronze}</Text>
      </View>
    </View>
  )
}

export default RecordHead
