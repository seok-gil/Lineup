import React, {useState} from 'react';
import {Calendar} from './Calender';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './CompetitionRegist.styles';
import {CalendarImage} from '../../../Assets/Images';
import DetailEventElement from './DetailEventElement';
import CompetitionRegistLabel from './CompetitionRegistLabel';

export function CompetitionRegist({navigation}) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [form, setForm] = useState({
    place: '',
    name: '',
    detail: [''],
  });
  const [calendar, setCalender] = useState(false);
  const onChange = (keyvalue, e) => {
    const {text} = e.nativeEvent;
    setForm({
      ...form,
      [keyvalue]: text,
    });
  };

  return (
    <SafeAreaView style={styles.competitionRegistWrapper}>
      <View style={styles.competitionRegistInner}>
        <CompetitionRegistLabel text="대회 기간" isAsterisk />
        <TouchableOpacity
          style={styles.dateRangeWrapper}
          onPress={() => {
            setCalender(true);
          }}>
          <TextInput
            style={styles.rangeInputStyle}
            value={startDate}
            placeholder={' YYYY / MM / DD'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onChange('start', e)}
          />
          <Text style={styles.waveText}>~</Text>
          <TextInput
            style={styles.rangeInputStyle}
            value={endDate}
            placeholder={' YYYY / MM / DD'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => setCalender(false)}
          />
          <Image source={CalendarImage} style={styles.calendarImageStyle} />
        </TouchableOpacity>
        <CompetitionRegistLabel text="대회 장소" isAsterisk />
        <TextInput
          style={styles.inputStyle}
          value={form.place}
          placeholder={'예) 인천문학박태환수영장'}
          placeholderTextColor="#0E0E0E66"
          onChange={e => onChange('place', e)}
        />
        <CompetitionRegistLabel text="대회명" isAsterisk />
        <TextInput
          style={styles.inputStyle}
          value={form.name}
          placeholder={'예) 제 22회 대통령배 종합수영경기'}
          placeholderTextColor="#0E0E0E66"
          onChange={e => onChange('name', e)}
        />
        <View style={styles.borderLine} />
        <CompetitionRegistLabel text="세부 종목" isAsterisk />

        <DetailEventElement form={form} />
        <DetailEventElement form={form} />
        <DetailEventElement form={form} isLastOne />
      </View>
      <Calendar
        calendar={calendar}
        setCalender={setCalender}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </SafeAreaView>
  );
}
