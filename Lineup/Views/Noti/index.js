import React, { useEffect, useState } from 'react'
import { View, FlatList, ScrollView } from 'react-native'

import NotiElement from './NotiElement'
import { ApiFetch } from '../../Components/API/ApiFetch'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './Noti.styles'

export function NotiScreen({ navigation }) {
	const [data, setData] = useState([])
	const [size, setSize] = useState(10)
  const [lastId, setLastId] = useState(100000)
	const isFocused = useIsFocused()
	useEffect(() => {
		AsyncStorage.getItem('accessToken').then(thing => {
			ApiFetch({
				method: 'GET',
				url: `/notice?size=${size}&lastId=${lastId}`,
				headers: {
					'content-type': 'application/json',
					Authorization: 'Bearer ' + thing,
				},
				body: null,
			}).then(thing => {
				if (thing == 401) {
					navigation.navigate('RefreshTokenModal', { navigation: navigation })
				}
				else setData(thing.content)
			})
		})
	}, [isFocused, size])
	const onEndReached = () => {
		setSize(size + 5)
	}
	return (
		<View style={styles.notiWrapper}>
			<FlatList
          data={data}
          snapToAlignment="start"
          decelerationRate="fast"
          renderItem={({item, index}) => (
            <NotiElement
              key={`player-inquiry-${index}`}
              data={item}
            />
          )}
          onEndReached={e => onEndReached(e)}
          onEndReachedThreshold={0.9}
          showsHorizontalScrollIndicator={false}
        />
			{/* <ScrollView>
				{data.map((item, index) => {
					return <NotiElement key={index} data={item} />
				})}
			</ScrollView> */}
		</View>
	)
}

