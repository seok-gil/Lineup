import React, { useState, useEffect, useRef } from 'react';

import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Text
} from 'react-native';

import styles from './DetailEvent.styles';
import { XIcon, CircleAddIconBlue } from '../../../Assets/Icons';
import DetailInfo from '../CompetitionResultDetail/DetailInfo';

function DetailEventElement({ form, setForm, index, onDel }) {
  const [detail, setDetail] = useState(form.detailNames[index])
  const onInput = (e) => {
    const { text } = e.nativeEvent;
    setDetail(text)
    form.detailNames[index] = text
  };

  return (
    <View style={styles.detailEventWrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInputStyle}
          value={detail}
          placeholder={'예) 100m 달리기'}
          placeholderTextColor="#0E0E0E66"
          onChange={e => onInput(e)}
        />
        <TouchableOpacity onPress={() => onDel(index)} style={styles.xIconWrapper}>
          <Image source={XIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function DetailEvent({ form, setForm }) {
  const [index, setIndex] = useState(form.detailNames.length > 0 ? form.detailNames.length : 1)
  const [view, setView] = useState([])

  const onDel = (index) => {
    var res = []
    var temp = form
    for (var i = 0; i < index; ++i)
      res.push(form.detailNames[i])
    for (var i = index + 1; i < form.detailNames.length; ++i)
      res.push(form.detailNames[i])
    temp.detail = res
    setForm((form) => { return temp })
    makeView()
  }

  const onPluss = () => {
    var res = form.detailNames
    res.push('')
    setForm((form) => { return { ...form, ['detail'] : res } })
    makeView()
  }

  const makeView = () => {
    var temp = []
    for (var i = 0; i < form.detailNames.length; ++i)
      temp.push(
        <DetailEventElement
          key={`competition-${i}`}
          form={form}
          setForm={setForm}
          index={i}
          onDel={onDel}
        />
      )
    setView(() => { return temp })
  }

  useEffect(() => {
    makeView()
  }, [])

  return (
    <ScrollView>
      {view}
      <TouchableOpacity onPress={onPluss} style={styles.addIconWrapper}>
        <Image source={CircleAddIconBlue} style={styles.addIcon} />
      </TouchableOpacity>
    </ScrollView>
  )
}

