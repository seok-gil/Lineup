import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigationState} from '@react-navigation/native'

import {HomeScreen} from '../Views/Home'
import {SearchScreen} from '../Views/Search'
import {RankScreen} from '../Views/Rank'
import {MyPageScreen} from '../Views/MyPage'
import {
  TabHomeIcon,
  TabSearchIcon,
  TabRankingIcon,
  TabEllipsisIcon,
} from '../Assets/svgs'
const Tab = createBottomTabNavigator()

export function TabScreen({navigation}) {
  const index2 = useNavigationState(state => state.index)
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        tabBarActiveTintColor: '#17D3F0',
        tabBarInactiveTintColor: '#848484',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabHomeIcon
              width={25}
              height={25}
              fill={focused ? '#17D3F0' : '#0E0E0E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: '선수 목록',
          tabBarIcon: ({focused}) => (
            <TabSearchIcon
              width={25}
              height={25}
              fill={focused ? '#17D3F0' : '#0E0E0E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RankScreen"
        component={RankScreen}
        options={{
          title: '랭킹',
          tabBarIcon: ({focused}) => (
            <TabRankingIcon
              width={25}
              height={25}
              fill={focused ? '#17D3F0' : '#0E0E0E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({focused}) => (
            <TabEllipsisIcon
              width={25}
              height={25}
              fill={focused ? '#17D3F0' : '#0E0E0E'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
