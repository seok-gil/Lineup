import React from 'react';
import {View, Text} from 'react-native';

import RecordHead from './RecordHead';
import PlayerCard from './PlayerCard';
import Data from '../../Assets/Data/Record.json';

export function RecordScreen({navigation}) {
  console.log(Data);
  return (
    <View style={{flexDirection: 'column'}}>
      <RecordHead medal={Data.Medal} />
      <View>
        {Data.Record.map(record => (
          <PlayerCard record={record} />
        ))}
      </View>
    </View>
  );
}
