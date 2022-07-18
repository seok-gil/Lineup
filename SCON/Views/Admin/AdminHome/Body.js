import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export function Body({ data }) {
  if (!data) return <View />;
  var today = new Date();
  var year = today.getFullYear()
  var month = today.getMonth() + 1
  var day = today.getDate()
  return (
    <View>
      <Text> 인사이트</Text>
      <Text> (Today : {year}.{month}.{day})</Text>
      <View>
        <Text>가입자</Text>
        <Text>{data.YdayRegistMember}</Text>
        <Text>선수 등록</Text>
        <Text>{data.YdayRegistPlayer}</Text>
        <Text>팔로잉</Text>
        <Text>{data.YdayFollow}</Text>
        <Text>신규댓글</Text>
        <Text>{data.YdayComment}</Text>
        <Text>탈퇴</Text>
        <Text>{data.YdayComment}</Text>
      </View>
      <View>
        <Text>분석(전체)</Text>
        <Text>가입자</Text>
        <Text>{data.TotalMember}</Text>
        <Text>선수 등록</Text>
        <Text>{data.TotalPlayer}</Text>
      </View>
    </View>
  );
}
