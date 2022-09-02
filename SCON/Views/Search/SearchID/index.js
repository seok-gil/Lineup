import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'

import ViewPlayer from './ViewPlayer'

import styles from './SearchID.styles'

function SearchID({ inputs, setInputs, data, navigation }) {
    const { search } = inputs
    const [more, setMore] = useState(false)
    const onClickMore = () => {
        if (!more) {
            onEndReached()
            setMore(true)
        } else setMore(false)
    }

    const onEndReached = (e) => {
        setMore(false)
        setInputs({
            ...inputs,
            ['size']: inputs.size + 3,
        })
    }

    return (
        <View style={styles.searchBodyWrapper}>
            <FlatList
                data={data}
                snapToAlignment="start"
                decelerationRate="fast"
                renderItem={({ item, index }) => (
                    <ViewPlayer
                        key={`view${index}`}
                        player={item}
                        navigation={navigation}
                    />
                )}
                onEndReached={(e) => onEndReached(e)}
                onEndReachedThreshold={0.9}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity onPress={(f) => onClickMore(f)}>
                <View style={styles.searchExpand}>
                    {more ? (
                        <Text style={styles.expandText}>결과 접기</Text>
                    ) : (
                        <Text style={styles.expandText}>결과 모두 보기</Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchID
