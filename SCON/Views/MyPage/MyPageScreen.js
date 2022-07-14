import React, {Component} from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {DefaultProfileImage} from '../../Assets/Images';

export function Profile({navigation}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <Image source={DefaultProfileImage} style={styles.image} />
      <Text> 닉네임</Text>
      <Text> email</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="사용자 정보 수정"
      />
    </View>
  );
}

export function MypageTab({navigation}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Noti')}>
        <Text>공지사항</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SettingAlert')}>
        <Text>알림 설정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('InquiryTab')}>
        <Text>문의 하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
        <Text>계정 관리</Text>
      </TouchableOpacity>
    </View>
  );
}

export function MyPageScreen({navigation}) {
  return (
    <View>
      <Profile navigation={navigation} />
      <MypageTab navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
  },
});
