import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import { Head } from './Head';
import { Body } from "./Body"

export function AdminHome({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    ApiFetch({
      method: 'GET',
      url: 'http://localhost:1337/api/admin-homes',
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);
  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={{ flexDirection: 'column', }}>
      <Head data={data.Admin} />
      <Body data={data} />
    </SafeAreaView>
  );
}
