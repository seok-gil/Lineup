import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Head, Body } from './index';
import { ApiFetch } from '../../Components/API/ApiFetch';
import { useAsync } from 'react-async-hook';

export function HomeScreen({ navigation }) {
  const [data, setData] = useState([])

  //TODO HomeAPI
  // const api = useAsync(
  //   ApiFetch({
  //     method: 'GET',
  //     url: 'http://localhost:1337/api/homes',
  //     headers: { "Authorization": "token" },
  //     body: null
  //   })
  //     .then((thing => {
  //       setData(thing)
  //     }))
  // )
  useEffect(() => {
    ApiFetch({
      method: 'GET',
      url: 'http://localhost:1337/api/homes',
      headers: { "Authorization": "token" },
      body: null
    })
      .then((thing => {
        setData(thing)
      }))
  },[])
  if (data)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Head data={data} navigation={navigation} />
        <Body data={data} navigation={navigation} />
      </SafeAreaView>
    );
  else
    return (<SafeAreaView />)
}

