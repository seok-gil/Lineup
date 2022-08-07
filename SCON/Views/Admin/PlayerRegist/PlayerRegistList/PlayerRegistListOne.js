import React, {useEffect, useState} from 'react'
import {ApiFetchOne} from '../../../../Components/API/ApiFetch'
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import {Time} from '../../../../Components/Time'

export function PlayerRegistListOne({navigation, data}) {
  if (!data) return <SafeAreaView />
  const Birth =
    data.Birth.slice(0, 4) + data.Birth.slice(5, 7) + data.Birth.slice(8, 10)
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PlayerReigstDetail', {
            PlayerRegistId: data.playerRegistId,
            state: data.state,
          })
        }>
        <View style={{flexDirection: 'row'}}>
          <Text>{data.name}</Text>
          <Text> / {Birth}</Text>
          <Text> / {data.gender}</Text>
          <Text> / {data.sport}</Text>
          <Text> / {data.belong}</Text>
        </View>
        <Text>
          <Time time={data.RegistDateTime} separator="." />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
