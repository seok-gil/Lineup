import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import CompetitionResultModal from './CompetitionResultModal';
import DetailInfo from './DetailInfo';
import {competition} from '../../../Assets/Data/CompetitionResultDetail.json';

import styles from './CompetitionResultDetail.styles';

export function CompetitionResultDetail({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    modal_item: '',
  });

  const openModal = item => {
    if (item)
      setModal({
        open: true,
        modal_item: item,
      });
    else
      setModal({
        open: false,
        modal_item: '',
      });
  };

  return (
    <SafeAreaView style={styles.competitionResultWrapper}>
      <View style={styles.competitionResultInner}>
        <Text style={styles.competitionLabels}>대회</Text>
        <Text style={styles.leagueTitle}>{competition.name}</Text>
        <Text style={styles.competitionLabels}>종목</Text>
        {competition.detail.map((item, index) => {
          return <DetailInfo item={item} key={index} openModal={openModal} />;
        })}
      </View>
      <CompetitionResultModal
        modal={modal}
        openModal={openModal}
        isSelected={isSelected}
      />
    </SafeAreaView>
  );
}
