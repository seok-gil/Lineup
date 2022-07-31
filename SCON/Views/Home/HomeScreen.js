import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Head, Body } from './index';
import { ApiFetch } from '../../Components/API/ApiFetch';

export function HomeScreen({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    ApiFetch({
      method: 'GET',
      url: 'http://15.164.100.211:8080/home',
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);
  if (!data) return <SafeAreaView />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Head data={data} navigation={navigation} />
      <Body data={data} navigation={navigation} />
    </SafeAreaView>
  );
}
