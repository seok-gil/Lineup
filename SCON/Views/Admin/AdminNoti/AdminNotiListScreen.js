import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { SafeAreaView, View, Text } from 'react-native';

import { AdminOne } from "./AdminNotiOne"

export function AdminNotiListScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data

  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/notices/${i}`,
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

  if (!data) return (<SafeAreaView />)
  return (
    <SafeAreaView>
      {data.map((item, index) => {
        return <AdminOne key={index} data={item} navigation={navigation} />;
      })}
    </SafeAreaView>
  );
}
