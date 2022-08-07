import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import { Followlist } from './Followlist';
import { Head } from './Head'
import AsyncStorage from "@react-native-community/async-storage"

export function FollowPage({ navigation, route }) {
  const [data, setData] = useState();
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/user-home/${route.params.userId}`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          setData(thing);
        })
  })
  }, []);

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={{ flex: 100 }}>
      <Head data={data} />
      <Text> 좋아하는 운동선수</Text>
      {
        data.followList.map((follow, index) => {
          return (<Followlist key={`follow-pages${index}`} data={follow} />)
        })
      }
    </SafeAreaView>
  );
}
