import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Time } from '../../../Components';

export function ReportOne({ data, navigation }) {
  if (!data) return <View />
  return (
    <View>
      <Text>{data.Nickname}</Text>
      <Text>{data.Comment}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Reporter', { reportId : data.ReportId})}>
        <Text>신고자</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("신고허용")}>
        <Text>허용</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("신고허용")}>
        <Text>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}
