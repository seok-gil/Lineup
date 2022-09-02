import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigationState} from '@react-navigation/native'
import {AdminHome} from './AdminHome'
import {AdminMypage} from './AdminMypage'
const AdminTab = createBottomTabNavigator()

import {TabHomeIcon, TabEllipsisIcon} from '../../Assets/svgs'

export function AdminTabScreen({navigation}) {
  const index2 = useNavigationState(state => state.index)
  return (
    <AdminTab.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        tabBarShowLabel: false,
      }}>
      <AdminTab.Screen
        name="AdminHomeScreen"
        component={AdminHome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabHomeIcon
              width={25}
              height={25}
              fill={focused ? '#17D3F0' : '#0E0E0E66'}
            />
          ),
        }}
      />

      <AdminTab.Screen
        name="AdminMyPageScreen"
        component={AdminMypage}
        options={{
          title: '마이페이지',
          tabBarIcon: ({focused}) => (
            <TabEllipsisIcon
              width={25}
              height={25}
              fill={focused ? '#17D3F0' : '#0E0E0E66'}
            />
          ),
        }}
      />
    </AdminTab.Navigator>
  )
}
