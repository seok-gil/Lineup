import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { View, Text, TouchableOpacity } from 'react-native';

export function AdminOne({ data, navigation }) {
  if (!data) return (<View />)
  return (
    <View>
      <Text>{data.NoticeTitle}</Text>
      <Text>{data.NoticeDateTime}</Text>
      <TouchableOpacity onPress={() => navigation.nvigate('/')}>
        <Text>수정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Admin 공지 삭제")}>
        <Text>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}
