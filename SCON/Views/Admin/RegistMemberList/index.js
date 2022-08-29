import React, {Component} from 'react'

import {UserList} from './UserList'
import {PlayerList} from './PlayerList'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const RegistMemberStack = createMaterialTopTabNavigator()

export function RegistMemberTabScreen() {
  return (
    <RegistMemberStack.Navigator
      screenOptions={{tabBarIndicatorStyle: {backgroundColor: '#17D3F0'}}}>
      <RegistMemberStack.Screen name="일반 계정" component={UserList} />
      <RegistMemberStack.Screen name="선수 계정" component={PlayerList} />
    </RegistMemberStack.Navigator>
  )
}
