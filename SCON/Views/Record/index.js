import React from 'react';
import {View, Text} from 'react-native';

import RecordHead from './RecordHead';
import PlayerCard from './PlayerCard';

import Data from '../../Assets/Data/Record.json';
import styles from './RecordScreen.styles';

export function RecordScreen({navigation}) {
  console.log(Data);
  return (
    <View style={styles.recordScreenWrapper}>
      <RecordHead medal={Data.Medal} />
      <View>
        {Data.Record.map(record => (
          <PlayerCard key={`player-card-${record.record_id}`} record={record} />
        ))}
      </View>
    </View>
  );
}
