import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ApiFetch } from '../../Components/API/ApiFetch';
import { SearchId, SearchInput } from './SearchScreen';
import AsyncStorage from "@react-native-community/async-storage"

export function FollowScreen({ navigation, route }) {
  const [data, setData] = useState();
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/player-home/${route.params.playerId}/followers?page=${page}&size=${size}`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log("thing", thing.content)
          setData(thing.content);
        })
  })
  }, []);
  const onEndReached = () => {
setSize(size + 5)
}
  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
      <SearchInput />
			<FlatList
				data={data}
				snapToAlignment="start"
				decelerationRate="fast"
				renderItem={({ item, index }) => (
					<SearchId
          data={item}
          key={`Follow-${index}`}
          navigation={navigation}
					/>
					)}
				// onScroll={onScroll}
				onEndReached={onEndReached}
				onEndReachedThreshold={0.1}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
					/>
    </SafeAreaView>
  );
}
