import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigationState} from '@react-navigation/native';
import { AdminHome } from './AdminHome';
import { AdminMypage } from "./AdminMypage"
const AdminTab = createBottomTabNavigator();

export function AdminTabScreen({navigation}) {
  const index2 = useNavigationState(state => state.index);
  return (
    <AdminTab.Navigator
      screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#B2F0FA',
        //   },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarActiveTintColor: '#17D3F0',
		      tabBarInactiveTintColor: '#848484',
		//   tabBarInactiveBackgroundColor: '#848484',
          // headerShown: false,
        }}>
      <AdminTab.Screen name="AdminHomeScreen" component={AdminHome} />
      <AdminTab.Screen name="AdminMyPageScreen" component={AdminMypage} />
    </AdminTab.Navigator>
  );
}

