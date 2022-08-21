import React, {useState} from 'react'
import {Calendar} from './Calender'

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

import styles from './CompetitionRegist.styles'
import {CalendarIcon} from '../assets'
import {DetailEvent} from './DetailEvent'
import CompetitionRegistLabel from './CompetitionRegistLabel'
import CompetitionButton from './CompetitionButton'

export function CompetitionRegist({navigation}) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [form, setForm] = useState({
    startDate: '',
    endDate: '',
    location: '',
    eventName: '',
    detailNames: [''],
  })
  const [calendar, setCalender] = useState(false)

  const onChange = (key, e) => {
    const {text} = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
  }
  return (
    <SafeAreaView style={styles.competitionRegistWrapper}>
      <View style={styles.competitionRegistInner}>
        <CompetitionRegistLabel text="대회 기간" isAsterisk />
        <TouchableOpacity
          style={styles.dateRangeWrapper}
          onPress={() => {
            setCalender(true)
          }}>
          <TextInput
            style={styles.rangeInputStyle}
            value={startDate}
            editable={false}
            placeholder={' YYYY / MM / DD'}
            placeholderTextColor="#0E0E0E66"
          />
          <Text style={styles.waveText}>~</Text>
          <TextInput
            style={styles.rangeInputStyle}
            value={endDate}
            editable={false}
            placeholder={' YYYY / MM / DD'}
            placeholderTextColor="#0E0E0E66"
          />
          <CalendarIcon style={styles.calendarImageStyle} />
        </TouchableOpacity>
        <CompetitionRegistLabel text="대회 장소" isAsterisk />
        <TextInput
          style={styles.inputStyle}
          value={form.location}
          placeholder={'예) 인천문학박태환수영장'}
          placeholderTextColor="#0E0E0E66"
          onChange={e => onChange('location', e)}
        />
        <CompetitionRegistLabel text="대회명" isAsterisk />
        <TextInput
          style={styles.inputStyle}
          value={form.eventName}
          placeholder={'예) 제 22회 대통령배 종합수영경기'}
          placeholderTextColor="#0E0E0E66"
          onChange={e => onChange('eventName', e)}
        />
        <View style={styles.borderLine} />
        <CompetitionRegistLabel text="세부 종목" isAsterisk />
        <DetailEvent form={form} setForm={setForm} />
      </View>
      <CompetitionButton data={form} navigation={navigation} />
      <Calendar
        calendar={calendar}
        setCalender={setCalender}
        form={form}
        setForm={setForm}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </SafeAreaView>
  )
}
