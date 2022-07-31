import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import CompetitionResultModal from './CompetitionResultModal';
import DetailInfo from './DetailInfo';
import {competition} from '../../../Assets/Data/CompetitionResultDetail.json';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';

import styles from './CompetitionResultDetail.styles';

export function CompetitionResultDetail({navigation, route}) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  const [result, setResult] = useState([])
  const [modal, setModal] = useState({
    open: false,
    modal_item: '',
  });
  var temp = data;
  
  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/event-details/${i}`,
        headers: { "Authorization": "token" },
        body: null
      })
        .then((thing => {
          temp.push(thing)
        }))
    }
  }
  useEffect(() => {
    getApi().then(() => {
      setLastFeed(nextFeed)
      setData(temp)
    })
  }, [])

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
        <Text style={styles.leagueTitle}>{route.params.name}</Text>
        <Text style={styles.competitionLabels}>종목</Text>
        {data.map((item, index) => {
          return <DetailInfo data={item} key={index} openModal={openModal} />;
        })}
      </View>
      <CompetitionResultModal
        modal={modal}
        openModal={openModal}
        data={data}
        setData={setData}
      />
    </SafeAreaView>
  );
}
