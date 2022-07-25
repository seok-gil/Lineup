import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import RecordHead from './RecordHead';
import PlayerCard from './PlayerCard';

import Data from '../../Assets/Data/Record.json';
import styles from './RecordScreen.styles';

export function RecordScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.recordScreenWrapper}>
      <ScrollView>
        <RecordHead medal={Data.Medal} />
        <View>
          {Data.Record.map(record => (
            <PlayerCard key={`player-card-${record.record_id}`} record={record} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
