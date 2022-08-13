import React, {useState} from 'react'
import {View, FlatList, Dimensions} from 'react-native'

import PlayerCard from './PlayerCard'

import styles from './CardList.styles'

export function CardList({ data, role, navigation }) {
    const follow = data.follows
    const card = []
    const emptyData = { playerId: null }
    const [page, setPage] = useState(0)
    if (role == 'ROLE_PLAYER') card.push(data.player)

    for (let i = 0; i < 3; i++) {
        if (follow && follow[i]) {
            card.push(follow[i])
        } else {
            card.push(emptyData)
        }
    }

    const onScroll = e => {
        const newPage = Math.round(
            e.nativeEvent.contentOffset.x / (pageWidth + gap),
        )
        setPage(newPage)
    }

    const screenWidth = Math.round(Dimensions.get('window').width)
    const pageWidth = 223
    const offset = 46
    const gap = (screenWidth - 223 - 46 * 2) / 2

    function Indicator({focused}) {
        if (focused === page) {
            return <View style={styles.activeDot} />
        } else {
            return <View style={styles.dot} />
        }
    }
    return (
        <View>
            <FlatList
                data={card}
                horizontal
                snapToAlignment="start"
                decelerationRate="fast"
                renderItem={({ item, index }) => (
                    <PlayerCard data={data} item={item} navigation={navigation} index={index} role={role} />
                )}
                onScroll={onScroll}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={pageWidth + gap}
                contentContainerStyle={{
                    paddingHorizontal: offset + gap / 2,
                }}
            />
            <View style={styles.indicatorWrapper}>
                {Array.from({length: card.length}, (_, i) => (
                    <Indicator key={`indicator_${i}`} focused={i} />
                ))}
            </View>
        </View>
    )
}
