import React, { useEffect, useState } from 'react'
import { ApiFetch } from '../../../Components/API/ApiFetch'
import { SafeAreaView, FlatList } from 'react-native'

import { AdminOne } from './AdminNotiOne'
import styles from './AdminNotiListScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

export function AdminNotiListScreen({ navigation }) {
    const [data, setData] = useState([])
    const [mount, setMount] = useState()
    const [lastId, setLastId] = useState(100000)
    const [size, setSize] = useState(10)
    const isFocused = useIsFocused()

    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: `/admin/notice?size=${size}&lastId=${lastId}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                if (thing == 401) {
                    navigation.navigate('RefreshTokenModal', { navigation: navigation })
                }
                else
                    setData(thing.content)
            })
        })
    }, [isFocused, mount, size])

    const onEndReached = () => {
        setSize(size + 2)
    }
    return (
        <SafeAreaView style={styles.notiScreenWrapper}>
            <FlatList
                data={data}
                snapToAlignment="start"
                decelerationRate="fast"
                renderItem={({ item, index }) => (
                    <AdminOne
                        key={`admin-noti-${index}`}
                        data={item}
                        navigation={navigation}
                        setMount={setMount}
                    />
                )}
                onEndReached={e => onEndReached(e)}
                onEndReachedThreshold={1}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}
