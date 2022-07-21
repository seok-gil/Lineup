import React, { useEffect, useState } from 'react';
import { SafeAreaView, } from 'react-native';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { SearchId, SearchInput } from './FanScreen';

export function FanScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)

  useEffect(() => {
    const temp = data
    for (var i = lastFeed; i < nextFeed; ++i) {
      ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/followers/${i}`,
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
  console.log(data)
  return (
    <SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
      <SearchInput />
      {
        data.map((item, index) => {
          return (
            <SearchId data={item} key={`fan-${index}`}navigation={navigation} />
          )
        })
      }
    </SafeAreaView>
  );
}
