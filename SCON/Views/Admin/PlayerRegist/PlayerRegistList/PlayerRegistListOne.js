import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../../Components/API/ApiFetch';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Time } from "../../../../Components"


export function PlayerRegistListOne({ navigation, data }) {
  if (!data) return (<SafeAreaView />)
  const Birth = data.Birth.slice(0, 4) + data.Birth.slice(5, 7) + data.Birth.slice(8, 10)
  return (
    <SafeAreaView >
      <TouchableOpacity onPress={() =>
        navigation.navigate('PlayerReigstDetail', {
          PlayerRegistId: data.PlayerRegistId,
          state: data.state
        })} >
        <View style={{ flexDirection: "row" }}>
          <Text>{data.Name}</Text>
          <Text> / {Birth}</Text>
          <Text> / {data.Sport}</Text>
          <Text> / {data.Belongs}</Text>
        </View>
        < Time time={data.RegistDateTime} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
