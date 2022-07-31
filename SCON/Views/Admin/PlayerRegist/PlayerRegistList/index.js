import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../../Components/API/ApiFetch';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { PlayerRegistListOne} from "./PlayerRegistListOne"
export function PlayerRegistList({ navigation, route }) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data;
  
  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/player-regists/${i}`,
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

  if (!data) return (<SafeAreaView/>)
  var list = data.filter((item) => (item && item.state == route.params.state))
  return (
    <SafeAreaView>
      {
        list.map((item, index) => {
          return ( <PlayerRegistListOne data={item} key={`playerRegistListOne-${index}`} navigation={navigation}/>)
        })
      }
    </SafeAreaView>
  );
}
