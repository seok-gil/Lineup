import React from 'react'
import { TouchableOpacity, SafeAreaView, ScrollView, View, Text, Modal, Touchable } from 'react-native'
import { Privacy } from './Assets/Privacy'
import { Service } from './Assets/Service'
export function AcceptModal({ modal, setModal, accept }) {
  
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
            <TouchableOpacity onPress={() => onPress()}>
              <Text>X</Text>
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

