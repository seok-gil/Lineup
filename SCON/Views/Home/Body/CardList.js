import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import styles from './Card.styles';
import {DefaultProfileImage} from '../../../Assets/Images';
import {AddIcon} from '../../../Assets/Icons';

export function CardList({Data, navigation}) {
  const follow = Data.follow;
  const card = [];
  const user_code = 1;
  const emptyData = {player_id: null};
  const [page, setPage] = useState(0);

  if (user_code == 1) card.push(Data.user);
  for (let i = 0; i < 3; i++) {
    if (follow[i]) card.push(follow[i]);
    else card.push(emptyData);
  }
  // TODO: 이부분 고쳐야함
  function PlayerCard({item}) {
    if (item) {
      if (item.user_name)
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Player')}
            style={[styles.cardWrapper, styles.playerMyCardWrapper]}>
            <Image
              source={DefaultProfileImage}
              style={styles.playerCardImage}
            />
            <Text style={styles.nameText}>이진우</Text>
            <Text style={styles.nameText}>수영선수</Text>
            <Text style={styles.nameText}>선수소속명</Text>
          </TouchableOpacity>
        );
      else if (item.player_id != null)
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Player')}
            style={[styles.cardWrapper, styles.playerCardWrapper]}>
            <Image
              source={DefaultProfileImage}
              style={styles.playerCardImage}
            />
            <Text style={styles.nameText}>{item.player_name}</Text>
          </TouchableOpacity>
        );
      else if (item.player_id == null) {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchStack')}
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

  function Indicator({focused}) {
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
      <View style={{flex: 1, flexDirection: 'row'}}>
        {Array.from({length: card.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i} />
        ))}
      </View>
    </View>
  );
}
