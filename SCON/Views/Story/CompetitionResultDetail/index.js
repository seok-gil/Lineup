import React, {useState} from 'react';

import {View, Text, SafeAreaView} from 'react-native';
import CompetitionResultModal from './CompetitionResultModal';
import {competition} from '../../../Assets/Data/CompetitionResultDetail.json';
import DetailInfo from './DetailInfo';

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
    <SafeAreaView style={{flex: 3}}>
      <Text>대회</Text>
      <Text>{competition.name}</Text>
      <Text>종목</Text>
      {competition.detail.map((item, index) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <DetailInfo item={item} key={index} />
          </View>
        );
      })}
      <CompetitionResultModal
        modal={modal}
        openModal={openModal}
        isSelected={isSelected}
      />
    </SafeAreaView>
  );
}
