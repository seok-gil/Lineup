import React, { useState } from 'react';

import { SafeAreaView } from 'react-native';
import { Head, Body } from './index';
import { ApiFetch } from '../../Components/API/ApiFetch';
import { useAsync } from 'react-async-hook';

export function HomeScreen({ navigation }) {
	const [data, setData] = useState([])

	//TODO HomeAPI
    useAsync(
      ApiFetch({
        method: 'GET',
        url: 'http://localhost:1337/api/homes',
        headers: { "Authorization": "token" },
        body: null
      })
        .then((thing => {
          setData(thing)
        }))
    )
	return (
		<SafeAreaView style={{flex:1}}>
			<Head data={data[0]} navigation={navigation} />
			<Body data={data[0]} navigation={navigation} />
		</SafeAreaView>
	);
}

