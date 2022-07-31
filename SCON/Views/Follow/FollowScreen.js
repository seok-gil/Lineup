import React, { useEffect, useState } from 'react';
import { SafeAreaView, } from 'react-native';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { SearchId, SearchInput } from './SearchScreen';

export function FollowScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data

  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/followers/${i}`,
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
  
  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
      <SearchInput />
      {
        data.map((item, index) => {
          return (
            <SearchId data={item} key={`Follow-${index}`}navigation={navigation} />
          )
        })
      }
    </SafeAreaView>
  );
}
