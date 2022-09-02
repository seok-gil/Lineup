import React from 'react'
import { TouchableOpacity, SafeAreaView, ScrollView, View, Text, Modal, Touchable } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { Privacy } from './Assets/Privacy'
import { Service } from './Assets/Service'
export function AcceptModal({ modal, setModal, value, setValue, accept }) {
  
  const onPress = () => {
    setModal(false)
  }
  return (
    <Modal visible={modal}>
      <SafeAreaView>
        <ScrollView>
          <Text style={{ flexShrink: 1, flexWrap: 'wrap' }}>
            {accept == 'service' ? <Service type={'title'}/> : <Privacy type={'title'}/>}
          </Text>
          <Text style={{ flexShrink: 1, flexWrap: 'wrap' }}>
            {accept == 'service' ? <Service type={'body'}/> : <Privacy type={'body'}/>}
          </Text>
            <Text>동의</Text>
            <CheckBox
              value={value}
              boxType="square"
              onValueChange={() => setValue(!value)}
            />
            <TouchableOpacity onPress={() => onPress()}>
              <Text>X</Text>
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

