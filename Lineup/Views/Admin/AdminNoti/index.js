import React from 'react'

import {AdminNotiRegist} from './AdminNotiRegist'
import {AdminNotiListScreen} from './AdminNotiListScreen'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const AdminNotiStack = createMaterialTopTabNavigator()

export function AdminNotiTabScreen() {
  return (
    <AdminNotiStack.Navigator
      screenOptions={{tabBarIndicatorStyle: {backgroundColor: '#17D3F0'}}}>
      <AdminNotiStack.Screen
        name="공지사항 목록"
        component={AdminNotiListScreen}
      />
      <AdminNotiStack.Screen name="공지사항 등록" component={AdminNotiRegist} />
    </AdminNotiStack.Navigator>
  )
}
