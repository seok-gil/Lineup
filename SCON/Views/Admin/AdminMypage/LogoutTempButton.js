import React, {useState} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {LogoutModal} from '../../Account/LogoutModal'

export function LogoutTempButton({navigation}) {
  const [modal, setModal] = useState(false)
  return (
    <>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Text>로그아웃임시버튼(나중에삭제)</Text>
      </TouchableOpacity>
      <LogoutModal modal={modal} setModal={setModal} navigation={navigation} />
    </>
  )
}
