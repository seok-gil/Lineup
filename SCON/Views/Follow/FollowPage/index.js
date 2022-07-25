import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { Followlist } from './Followlist';
import { Head } from './Head'
export function FollowPage({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    ApiFetchOne({
      method: 'GET',
      url: 'http://localhost:1337/api/follower-pages/1',
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);

  if (!data) return <SafeAreaView />
  // console.log(data)
  return (
    <SafeAreaView style={{ flex: 100 }}>
      <Head data={data} />
      <Text> 좋아하는 운동선수</Text>
      {
        data.follows.map((follow, index) => {
          return (<Followlist key={`follow-pages${index}`} data={follow} />)
        })
      }
    </SafeAreaView>
  );
}
