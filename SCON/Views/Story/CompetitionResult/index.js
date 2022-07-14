import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import CompetitionElement from './CompetitionElement';
import Calendar from './Calendar';
import ResultModal from './ResultModal';

import {competition} from '../../../Assets/Data/CompetitionResultList.json';
import styles from './CompetitionResult.styles';

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
      <ResultModal />
    </SafeAreaView>
  );
}
