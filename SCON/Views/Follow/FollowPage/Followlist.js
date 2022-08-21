import React, {Component, useState, useEffect} from 'react'

import {View, Text, Image} from 'react-native'

export function Followlist({data}) {
  if (!data) return <View />
  const [rank, setRank] = useState({
    type: 'ALL',
    rank: '0',
  })
  useEffect(() => {
    const ranks = data.rank
    const arr = []
    for (var i in ranks) arr.push([i, ranks[i]])
    arr.sort(function (a, b) {
      return a[1] - b[1]
    })
    if (arr[0]) {
      setRank({
        type: arr[0][0],
        rank: arr[0][1],
      })
    }
  }, [])
  return (
    <View style={{flex: 100, flexDirection: 'row'}}>
      <Image
        source={{uri: data.profilePic}}
        style={{flex: 1, width: '10%', height: '10%'}}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <Text>{data.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>{data.sport}/</Text>
            <Text>{data.belong}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>{data.recordeCnt}</Text>
            <Text>전적</Text>
          </View>
          <View>
            <Text>{rank.rank}위</Text>
            <Text>순위({rank.type.toUpperCase()})</Text>
          </View>
          <View>
            <Text>{data.followerCnt}</Text>
            <Text>팬</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
