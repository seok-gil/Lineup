import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import CompetitionResultModal from './CompetitionResultModal';
import DetailInfo from './DetailInfo';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import styles from './CompetitionResultDetail.styles';
import AsyncStorage from "@react-native-community/async-storage"
import { CompetitionResultButton } from "./CompetitionResultButton"

export function CompetitionResultDetail({navigation, route}) {
  console.log(route.params.existResult)
  const [data, setData] = useState();
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  const [result, setResult] = useState([])
  
  const [modal, setModal] = useState({
    open: false,
    modal_item: '',
  });

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `http://15.164.100.211:8080/player/event/record/${route.params.data.eventId}`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log("event result", thing)
          setData(thing);
        })
  })
  }, []);

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
  console.log(data)
  if (!data) return <SafeAreaView/>
  return (
    <SafeAreaView style={styles.competitionResultWrapper}>
      <View style={styles.competitionResultInner}>
        <Text style={styles.competitionLabels}>대회</Text>
        <Text style={styles.leagueTitle}>{route.params.data.name}</Text>
        <Text style={styles.competitionLabels}>종목</Text>
        {data.map((item, index) => {
          return <DetailInfo data={item} result={route.params.existResult} key={index} openModal={openModal} />;
        })}
      </View>
      <CompetitionResultModal
        modal={modal}
        openModal={openModal}
        data={data}
        setData={setData}
      />
      {/* <CompetitionResultButton data={data} navigation={navigation}/> */}
    </SafeAreaView>
  );
}
