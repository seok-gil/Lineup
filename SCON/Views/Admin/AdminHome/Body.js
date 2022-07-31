import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Body.styles';

export function Body({data}) {
  if (!data) return <View />;
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  return (
    <View style={styles.bodyWrapper}>
      <Text style={styles.insightText}>인사이트</Text>
      <Text style={styles.dateText}>
        (Today : {year}.{month}.{day})
      </Text>
      <View style={styles.bodyCard}>
        <View style={styles.bodyCardTop}>
          <Text style={styles.cardTitle}>분석(어제)</Text>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>가입자</Text>
            <Text style={styles.textRight}>{data.YdayRegistMember}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>선수 등록</Text>
            <Text style={styles.textRight}>{data.YdayRegistPlayer}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>팔로잉</Text>
            <Text style={styles.textRight}>{data.YdayFollow}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>신규댓글</Text>
            <Text style={styles.textRight}>{data.YdayComment}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>탈퇴</Text>
            <Text style={styles.textRight}>{data.YdayComment}</Text>
          </View>
        </View>
        <View style={styles.bodyCardBottom}>
          <Text style={styles.cardTitle}>분석(전체)</Text>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>가입자</Text>
            <Text style={styles.textRight}>{data.TotalMember}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textLeft}>선수 등록</Text>
            <Text style={styles.textRight}>{data.TotalPlayer}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
