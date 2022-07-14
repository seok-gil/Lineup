import React, {useState} from 'react';
import {View, Text, Modal, SafeAreaView} from 'react-native';

import {competition} from '../../../Assets/Data/CompetitionResultList.json';
import CompetitionElement from './CompetitionElement';

import styles from './CompetitionResult.styles';

export function Calendar({startDay, endDay}) {
  return (
    <View>
      <Text>aa</Text>
    </View>
  );
}

export function CompetitionResult({navigation}) {
  const [calendar, setCalendar] = useState({
    open: false,
    start: '',
    end: '',
  });

  return (
    <SafeAreaView style={styles.competitionResultWrapper}>
      {competition.map((item, index) => {
        return <CompetitionElement data={item} key={index} />;
      })}
      <Modal
        // animationType='slide'
        transparent={true}
        visible={calendar.open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Calendar />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
