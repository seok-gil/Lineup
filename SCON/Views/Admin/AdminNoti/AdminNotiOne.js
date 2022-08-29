import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './AdminNotiOne.styles'
import { Time } from '../../../Components'
import {AdminNotiDelModal } from "./AdminNotiDelModal"

export function AdminOne({ data, navigation, setMount }) {
  const [modal, setModal] = useState(false)
  if (!data) return <View />
  const onEdit = () => {
    navigation.navigate('공지사항 등록', { data: data })
  }
  const onDel = () => {
    setModal(true)
    setMount(new Date())
  }

  return (
    <View style={styles.notiElementWrapper}>
      <View style={styles.notiElementLeft}>
        <Text style={styles.notiTitle}>{data.title}</Text>
        <Text style={styles.notiCreated}>
          <Time time={data.dateTime} separator="-" />
        </Text>
      </View>
      <View style={styles.notiElementRight}>
        <TouchableOpacity onPress={() => onEdit()} style={styles.notiButton}>
          <Text style={styles.notiButtonText}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDel()} style={styles.notiButton}>
          <Text style={styles.notiButtonText}>삭제</Text>
        </TouchableOpacity>
        <AdminNotiDelModal modal={modal} setModal={setModal} navigation={navigation} data={data}/>
      </View>
    </View>
  )
}
