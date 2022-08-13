import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'

import ViewPlayer from './ViewPlayer'

import styles from './SearchID.styles'
import AsyncStorage from '@react-native-community/async-storage'
import { ApiFetch } from '../../../Components/API/ApiFetch'

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
        console.log(e)
            console.log(e)
            setMore(false)
            setInputs({
                ...inputs,
                ['size']: inputs.size + 3,
            })
    }

    return (
        <View>
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
                // onScroll={onScroll}
                onEndReached={(e) => onEndReached(e)}
                onEndReachedThreshold={0.1}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                pagingEnabled
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
