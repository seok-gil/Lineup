import React, {Component, useState} from 'react';
import {
  Button,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {DownIcon} from '../../Assets/Icons';

function NotiOne({data}) {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <View>
      <Text> {data.title} </Text>
      <Text> {data.createdAt} </Text>
      <TouchableOpacity onPress={onClick}>
        {!expand && <Image source={DownIcon} />}
        {expand && <Image source={DownIcon} /> /* TODO: UPIcon: 180도 회전 */}
      </TouchableOpacity>
      {expand && <Text> {data.content} </Text>}
    </View>
  );
}

export function NotiScreen({navigation}) {
  const data = require('../../Assets/Data/Noti.json').noti;
  return (
    <View>
      {data.map((item, index) => {
        return <NotiOne key={index} data={item} />;
      })}
    </View>
  );
}
