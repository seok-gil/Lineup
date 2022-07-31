import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DefaultProfileImage} from '../../../Assets/Images';

import styles from './ReportOne.styles';

export function ReportOne({data, navigation}) {
  if (!data) return <View />;
  return (
    <View style={styles.reportOneWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={DefaultProfileImage} style={styles.profileImage} />
      </View>
      <View style={styles.elementLeft}>
        <Text style={styles.title}>{data.Nickname} 3분전</Text>
        <Text style={styles.comment}>{data.Comment}</Text>
      </View>
      <View style={styles.elementRight}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Reporter', {reportId: data.ReportId})
          }>
          <Text style={styles.buttonText}>신고자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('신고허용')}>
          <Text style={styles.buttonText}>허용</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('신고허용')}>
          <Text style={styles.buttonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
