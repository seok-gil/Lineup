import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

import { GoPlayer } from './GoPlayer';
import { CardList } from "./CardList"

import styles from './Body.styles';

export function Body({ data, navigation }) {
  if (!data) return <View />;
  const user_code = data.player ? 1 : 1 ;
  //TODO goPlayer
  const [goPlayer, setgoPlayer] = useState(true);

  return (
    <View style={styles.bodyWrapper}>
      {user_code === 1 && goPlayer === true && (
        <GoPlayer navigation={navigation} setgoPlayer={setgoPlayer} />
      )}
      <View style={styles.bodyTextWrapper}>
        {user_code === 1 ? (
          <Text style={styles.bodyTextLarge}>
            <Text style={styles.textImportant}>나만의 라인업</Text>을{'\n'}
            추가해보세요!
          </Text>
        ) : (
          <Text style={[styles.bodyTextLarge, styles.bodyTextPlayer]}>
            당신을 <Text style={styles.textImportant}>응원합니다!</Text>
          </Text>
        )}
        <Text style={styles.bodyTextSmall}>
          {user_code === 1
            ? '최대 3명까지 추가할 수 있어요'
            : '본인 계정관리는 물론 선수 3명을 팔로우 할 수 있습니다'}
        </Text>
      </View>
      <CardList data={data} navigation={navigation} />
    </View>
  );
}
