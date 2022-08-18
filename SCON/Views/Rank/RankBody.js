import React, {useState, useEffect} from 'react'
import {View, ScrollView, SafeAreaView, FlatList} from 'react-native'

import RankMedal from './RankMedal'
import ETC from './ETC'
import {ApiFetch} from '../../Components/API/ApiFetch'
import {player} from '../../Assets/Data/Rank.json'
import styles from './RankBody.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

function RankBody({navigation, route}) {
    var mod = route.params.mode
    const isFocused = useIsFocused()
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [data, setData] = useState()
    const [nextFeed, setNextFeed] = useState(10)

    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: `/rank/${mod}?page=${page}&size=${size}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(data => {
                setData(data.content)
            })
        })
    }, [isFocused])

    const onEndReached = () => {
        setNextFeed(nextFeed + 5)
    }

    var etc;
    if (!data) return <SafeAreaView />
    if (data.length < 3)
        etc = null
    else
        etc = data.slice(3)
    return (
        <SafeAreaView style={styles.rankBodyWrapper}>
            <View style={styles.rankMedalWrapper}>
                <RankMedal player={data[1]} rank={2} navigation={navigation} />
                <RankMedal player={data[0]} rank={1} navigation={navigation} />
                <RankMedal player={data[2]} rank={3} navigation={navigation} />
            </View>
            <FlatList
                data={etc}
                snapToAlignment="start"
                decelerationRate="fast"
                renderItem={({item, index}) => (
                    <ETC
                        player={item}
                        index={index}
                        key={`rankETC${index}`}
                        navigation={navigation}
                    />
                )}
                // onScroll={onScroll}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default RankBody
