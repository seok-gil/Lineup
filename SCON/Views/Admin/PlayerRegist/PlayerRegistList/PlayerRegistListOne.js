import React from 'react'
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import {Time} from '../../../../Components/Time'

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
        }>
        <View style={{flexDirection: 'row'}}>
          <Text>{data.name}</Text>
          <Text> / {birth}</Text>
          <Text> / {data.gender}</Text>
          <Text> / {data.sport}</Text>
          <Text> / {data.belong}</Text>
        </View>
        <Text>
          <Time time={data.registDate} separator="." />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
