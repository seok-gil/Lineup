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
import {ApiFetchArr} from '../../../../Components/API/ApiFetch';
import {ReporterOne} from './ReporterOne';

import styles from './Reporter.styles';

export function Reporter({navigation, route}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiFetchArr({
      method: 'GET',
      url: `http://localhost:1337/api/reporters/${route.params.reportId}`,
      headers: {Authorization: 'token'},
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);

  if (!data) return <SafeAreaView />;
  return (
    <SafeAreaView style={styles.reporterWrapper}>
      {data.map((item, index) => {
        return <ReporterOne data={item} key={`report-${index}`} />;
      })}
    </SafeAreaView>
  );
}
