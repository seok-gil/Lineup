import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import styles from './Card.styles';
import { DefaultProfileImage } from '../../../Assets/Images';
import { AddIcon } from '../../../Assets/Icons';

export function CardList({ data, navigation }) {
  if (!data) return (<View/>)
  
  const follow = data.follow;
  const card = [];
  const user_code = data.player ? 1 : 1;
  const emptyData = { playerId: null };
  const [page, setPage] = useState(0);
  if (user_code == 1) card.push(data.player);
  
  for (let i = 0; i < 3; i++) {
    if (follow && follow[i]) card.push(follow[i]);
    else card.push(emptyData);
  }

  function PlayerCard({ item }) {
    if (item) {
      if (item.playerId && !item.profilePic) // Myplayer
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Player', {playerId : item.playerId})}
            style={[styles.cardWrapper, styles.playerMyCardWrapper]}>
            <Image
              source={{uri: item.profilePic}} //TODO player url
              style={styles.playerCardImage}
            />
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.nameText}>{item.sport}</Text>
            <Text style={styles.nameText}>{item.belong}</Text>
          </TouchableOpacity>
        );
      else if (item.playerId != null)
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Player', {playerId : item.playerId})}
            style={[styles.cardWrapper, styles.playerCardWrapper]}>
            <Image
              source={{uri: item.profilePic}} //TODO player url
              style={styles.playerCardImage}
            />
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.nameText}>{item.sport}</Text>
            <Text style={styles.nameText}>{item.belong}</Text>
          </TouchableOpacity>
        );
      else if (item.playerId == null) {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchScreen')}
            style={[styles.cardWrapper, styles.emptyCardWrapper]}>
            <Image source={AddIcon} style={styles.emptyCardImage} />
          </TouchableOpacity>
        );
      }
    }
  }

  const onScroll = e => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  const screenWidth = Math.round(Dimensions.get('window').width);
  const pageWidth = 223;
  const offset = 46;
  const gap = (screenWidth - 223 - 46 * 2) / 2;

  function Indicator({ focused }) {
    if (focused === page) return <View style={styles.activeDot} />;
    else return <View style={styles.dot} />;
  }

  return (
    <View>
      <FlatList
        data={card}
        horizontal
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={PlayerCard}
        onScroll={onScroll}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={pageWidth + gap}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
      />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {Array.from({ length: card.length }, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i} />
        ))}
      </View>
    </View>
  );
}
