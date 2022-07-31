import React, {useEffect, useState} from 'react';
import {ApiFetchOne} from '../../../Components/API/ApiFetch';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './AdminNotiOne.styles';

export function AdminOne({data, navigation}) {
  if (!data) return <View />;
  return (
    <View style={styles.notiElementWrapper}>
      <View style={styles.notiElementLeft}>
        <Text style={styles.notiTitle}>{data.NoticeTitle}</Text>
        <Text style={styles.notiCreated}>{data.NoticeDateTime}</Text>
      </View>
      <View style={styles.notiElementRight}>
        <TouchableOpacity
          onPress={() => navigation.navigate('/')}
          style={styles.notiButton}>
          <Text style={styles.notiButtonText}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Admin 공지 삭제')}
          style={styles.notiButton}>
          <Text style={styles.notiButtonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
