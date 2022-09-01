import React from 'react'
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import {Time} from '../../../../Components/Time'

import styles from './PlayerRegistOne.styles'

export function PlayerRegistListOne({navigation, data, state}) {
  const birth =
    data.birth.slice(0, 4) + data.birth.slice(5, 7) + data.birth.slice(8, 10)
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PlayerReigstDetail', {
            playerRegistId: data.playerRegistId,
            state: state,
          })
        }
        style={styles.playerRegistOneWrapper}>
        <View style={styles.playerRegistOneTop}>
          <Text style={styles.playerRegistInfo}>
            {data.name} / {birth} / {data.gender} / {data.sport} / {data.belong}
          </Text>
        </View>
        <Text style={styles.playerRegistTime}>
          <Time time={data.registDate} separator="." />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
