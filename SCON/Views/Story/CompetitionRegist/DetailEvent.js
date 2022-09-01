import React, {useState, useEffect} from 'react'

import {View, TextInput, TouchableOpacity, ScrollView} from 'react-native'

import styles from './DetailEvent.styles'

import {XIcon, CircleAddIcon} from '../../../Assets/svgs'

function DetailEventElement({data, mount, dataOne, onDetail, index, onPlus, onDel}) {
  const [elemnt, setElement] = useState()
  
  useEffect(() => {
    setElement(dataOne)
  },[mount])
  
  const onInput = e => {
    const {text} = e.nativeEvent
    data[index] = text
    setElement(text)
  }
  
  return (
    <View style={styles.detailEventWrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInputStyle}
          value={elemnt}
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
      {index === data.length - 1&& (
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

export function DetailEvent({form, setFormDetail, mount, setMount}) {
  const [view, setView] = useState([])
  let data = form.detailNames
  
  const onDel = index => {
    if (data.length <= 1) 
      return ;
    var del = []
    for (var i = 0; i < index; ++i) {
      del.push(data[i])
    }
    for (var i = index + 1; i < data.length; ++i)
      del.push(data[i])
    data = del
    makeView()
    setMount(new Date())
  }

  const onPlus = () => {
    data.push('')
    makeView()
    setMount(new Date())
  }

  const onDetail = (index, text) => {
    data[index] = text
  }

  const makeView = () => {
    var view = []
    var length = data.length > 0 ? data.length : 1
    for (var i = 0; i < length; ++i)
      view.push(
        <DetailEventElement
          key={`competition-${i}`}
          dataOne={data[i]}
          data={data}
          onDetail={onDetail}
          index={i}
          mount={mount}
          onDel={onDel}
          onPlus={onPlus}
        />,
      )
    setFormDetail(data)
    setView(view)
  }

  useEffect(() => {
    makeView()
    console.log("form",form)
  }, [data])

  return <ScrollView>{view}</ScrollView>
}
