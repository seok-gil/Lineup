import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ApiFetch, ApiFetchOne } from '../../../Components/API/ApiFetch';
import { ReportOne } from "./ReportOne"


export function Reports({ navigation }) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)

  useEffect(() => {
    const temp = data
    for (var i = lastFeed; i < nextFeed; ++i) {
      ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/reports/${i}`,
        headers: { "Authorization": "token" },
        body: null
      })
        .then((thing => {
          temp.push(thing)
        }))
    }
    setLastFeed(nextFeed)
    setData(temp)
  }, [])
  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={{ flexDirection: 'column', }}>
      {data.map((item, index) => {
        return (<ReportOne key={`report-${index}`} data={item} navigation={navigation}/>)})
      }
    </SafeAreaView>
  );
}
