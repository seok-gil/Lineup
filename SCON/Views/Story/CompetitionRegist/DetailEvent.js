import React, {useState, useEffect} from 'react'

import {View, TextInput, TouchableOpacity, ScrollView} from 'react-native'

import styles from './DetailEvent.styles'

import {XIcon, CircleAddIcon} from '../../../Assets/svgs'

function DetailEventElement({form, setForm, index, onPlus, onDel}) {
  const [detail, setDetail] = useState(form.detailNames[index])
  const onInput = e => {
    const {text} = e.nativeEvent
    if (text)
      setDetail(text)
    console.log(form)
    var temp = form
    temp.detailNames[index] = text
    // setForm({
    //   ...form,
    //   temp
    // })
  }

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
        <TouchableOpacity
          onPress={() => onDel(index)}
          style={styles.xIconWrapper}>
          <XIcon width={10} height={10} />
        </TouchableOpacity>
      </View>
      {index === form.detailNames.length - 1 && (
        <TouchableOpacity onPress={onPlus} style={styles.addIconWrapper}>
          <CircleAddIcon
            width={20}
            height={20}
            fill="#17D3F0"
            style={styles.addIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export function DetailEvent({form, setForm}) {
  const [index, setIndex] = useState(
    form.detailNames.length > 0 ? form.detailNames.length : 1,
  )
  const [view, setView] = useState([])

  const onDel = index => {
    var res = []
    var temp = form
    for (var i = 0; i < index; ++i) res.push(form.detailNames[i])
    for (var i = index + 1; i < form.detailNames.length; ++i)
      res.push(form.detailNames[i])
    temp.detail = res
    setForm(form => {
      return temp
    })
    makeView()
  }

  const onPluss = () => {
    var res = form.detailNames
    res.push('')
    setForm(form => {
      return {...form, ['detailNames']: res}
    })
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
          onPlus={onPluss}
        />,
      )
    setView(() => {
      return temp
    })
  }

  useEffect(() => {
    makeView()
  }, [])

  return <ScrollView>{view}</ScrollView>
}
