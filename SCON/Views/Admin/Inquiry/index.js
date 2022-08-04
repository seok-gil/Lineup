import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ApiFetchOne} from '../../../Components/API/ApiFetch';
import styles from './Inquiry.styles';
import {InquiryOne} from './InquiryOne';

export function Inquiry({navigation}) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1);
  const [nextFeed, setNextFeed] = useState(10);
  var temp = data;

  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/inquiries/${i}`,
        headers: {Authorization: 'token'},
        body: null,
      }).then(thing => {
        temp.push(thing);
      });
    }
  }
  useEffect(() => {
    getApi().then(() => {
      setLastFeed(nextFeed);
      setData(temp);
    });
  }, []);

  return (
    <SafeAreaView style={styles.inquiryWrapper}>
      {data.map((item, index) => {
        return <InquiryOne data={item} key={`inquiry-${index}`} />;
      })}
    </SafeAreaView>
  );
}
