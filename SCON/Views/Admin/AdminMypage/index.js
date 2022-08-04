import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ApiFetch} from '../../../Components/API/ApiFetch';

import {AdminMypageTab} from './AdminMypageTab';
import {AdminProfile} from './AdminProfile';

import styles from './AdminMypage.styles';

export function AdminMypage({navigation}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    ApiFetch({
      method: 'GET',
      url: 'http://localhost:1337/api/admins',
      headers: {Authorization: 'token'},
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);

  if (!data) return <SafeAreaView />;
  return (
    <SafeAreaView style={styles.adminMypageWrapper}>
      <AdminProfile data={data} navigation={navigation} />
      <AdminMypageTab navigation={navigation} />
    </SafeAreaView>
  );
}
