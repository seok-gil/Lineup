import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ApiFetch } from '../../../Components/API/ApiFetch';

import { AdminMypageTab } from './AdminMypageTab';
import { AdminProfile } from "./AdminProfile"

export function AdminMypage({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    ApiFetch({
      method: 'GET',
      url: 'http://localhost:1337/api/admins',
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);
  if (!data) return <SafeAreaView/>
  return (
    <SafeAreaView>
      <AdminProfile data={data} navigation={navigation} />
      <AdminMypageTab navigation={navigation} />
    </SafeAreaView>
  );
  
}
