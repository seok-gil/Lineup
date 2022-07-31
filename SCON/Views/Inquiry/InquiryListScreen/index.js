import React, {useState, useEffect}from 'react';
import {ScrollView} from 'react-native';
import InquiryListElement from './InquiryListElement';
import {ApiFetchOne } from '../../../Components/API/ApiFetch';

import styles from './InquiryListScreen.styles';

export function InquiryListScreen() {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data;

  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/inquiry-users/${i}`,
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
  return (
    <ScrollView style={styles.inquiryScreenWrapper}>
      {data.map((item, index) => {
        return <InquiryListElement key={index} data={item} />;
      })}
    </ScrollView>
  );
}
