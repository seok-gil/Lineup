import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ApiFetchOne} from '../../../Components/API/ApiFetch';
import {ReportOne} from './ReportOne';
import styles from './Report.styles';

export function Reports({navigation}) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1);
  const [nextFeed, setNextFeed] = useState(10);

  var temp = data;
  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/reports/${i}`,
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

  if (!data) return <SafeAreaView />;
  return (
    <SafeAreaView style={styles.reportWrapper}>
      {data &&
        data.map((item, index) => {
          return (
            <ReportOne
              key={`report-${index}`}
              data={item}
              navigation={navigation}
            />
          );
        })}
    </SafeAreaView>
  );
}
