import React, {useState} from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import PlayerCard from './PlayerCard';

import styles from './CardList.styles';

export function CardList({data, navigation}) {
  if (!data) return <View />;
  const follow = data.follow;
  const card = [];
  const user_code = data.player ? 1 : 1;
  const emptyData = {playerId: null};
  const [page, setPage] = useState(0);
  if (user_code == 1) card.push(data.player);

  for (let i = 0; i < 3; i++) {
    if (follow && follow[i]) card.push(follow[i]);
    else card.push(emptyData);
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
      <View style={styles.indicatorWrapper}>
        {Array.from({length: card.length}, (_, i) => (
          <Indicator key={`indicator_${i}`} focused={i} />
        ))}
      </View>
    </View>
  );
}
