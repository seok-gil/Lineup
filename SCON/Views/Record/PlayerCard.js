import React from 'react';
import {View, Text} from 'react-native';

import styles from './PlayerCard.styles';

const PlayerCard = ({record}) => {
  return (
    <View key={`record`} style={styles.playerCardWrapper}>
      <Text style={styles.playerCardInfo}>
        {record.host} {record.competition} {record.major} {record.game_detail}{' '}
        {record.score}
      </Text>
      <Text style={styles.playerCardDate}>
        {record.start} ~ {record.end}
      </Text>
    </View>
  );
};

export default PlayerCard;
