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
import styles from './NotiElement.styles';

function NotiElement({data}) {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.notiElementWrapper}>
          <View style={styles.notiElementLeft}>
            <Text style={styles.notiTitle}>{data.title} </Text>
            <Text style={styles.notiCreated}>{data.createdAt} </Text>
          </View>
          <Image
            style={expand ? styles.upIcon : styles.downIcon}
            source={DownIcon}
          />
        </View>
      </TouchableOpacity>
      {expand && (
        <View style={styles.expanded}>
          <Text style={styles.expandedContent}>{data.content}</Text>
        </View>
      )}
    </>
  );
}

export default NotiElement;
