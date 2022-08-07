import React, {Component} from 'react'

import {PlayerList} from './PlayerList'
import {UserList} from './UserList'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {SearchScreen} from '../../Search'

const RegistMemberStack = createMaterialTopTabNavigator()

export function RegistMemberTabScreen({navigation}) {
  return (
    <RegistMemberStack.Navigator>
      <RegistMemberStack.Screen name="일반 계정" component={PlayerList} />
      <RegistMemberStack.Screen name="선수 계정" component={UserList} />
    </RegistMemberStack.Navigator>
  )
}
