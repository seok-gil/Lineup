import React, {useState} from 'react'
import {TouchableOpacity, View, Text, FlatList} from 'react-native'

import ViewUser from './ViewUser'

import styles from './SearchID.styles'

function SearchID({inputs, setInputs, data, navigation}) {
    const [more, setMore] = useState(false)
    const [nextFeed, setNextFeed] = useState(10)
    const onClickMore = () => {
        if (!more) {
            onEndReached()
            setMore(true)
        } else setMore(false)
    }
    const onEndReached = () => {
        setNextFeed(nextFeed + 5)
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
                renderItem={({item, index}) => (
                    <ViewUser
                        key={`view${index}`}
                        user={item}
                        navigation={navigation}
                    />
                )}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.01}
                showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity onPress={() => onClickMore()}>
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
