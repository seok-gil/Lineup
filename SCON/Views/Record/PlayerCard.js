import React from 'react';
import {View, Text} from 'react-native';

const PlayerCard = ({record}) => {
  return (
    <View key={`record`} style={{flexDirection: 'column'}}>
      <Text>
        {record.host} {record.competition} {record.major} {record.game_detail}{' '}
        {record.score}
      </Text>
      <Text>
        {record.start} ~{record.end}
      </Text>
    </View>
  );
};

export default PlayerCard;
