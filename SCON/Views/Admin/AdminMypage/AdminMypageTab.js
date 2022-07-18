import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
export function AdminMypageTab({navigation}) {
  
  return (
    <View style={{flexDirection: 'column'}}>
      <TouchableOpacity onPress={() => navigation.navigate('RegistMemberTab')}>
        <Text>가입자목록</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AdminNotiTab')}>
        <Text>공지사항</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Report')}>
        <Text>신고 접수</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegistTab')}>
        <Text>선수 인증 승인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Inquiry')}>
        <Text>문의 내역</Text>
      </TouchableOpacity>
    </View>
  );
}
