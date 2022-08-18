import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigationState } from '@react-navigation/native'
import { Image } from 'react-native'
import { AdminHome } from './AdminHome'
import { AdminMypage } from './AdminMypage'
const AdminTab = createBottomTabNavigator()
import { TabHomeFocusIcon, TabHomeIcon, TabSearchFocusIcon, TabSearchIcon, TabRankFocusIcon, TabRankIcon, TabETCFocusIcon, TabETCIcon } from '../../Assets/Icons'

export function AdminTabScreen({ navigation }) {
    const index2 = useNavigationState(state => state.index)
    return (
        <AdminTab.Navigator
            screenOptions={{
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                tabBarShowLabel:false,

            }}>
            <AdminTab.Screen name="AdminHomeScreen" component={AdminHome}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (<Image source={focused ? TabHomeFocusIcon : TabHomeIcon} style={{ width: 25, height: 25 }} />)
                    }
                }} />

            <AdminTab.Screen name="AdminMyPageScreen" component={AdminMypage}
                options={{
                    title: '마이페이지',
                    tabBarIcon: ({ focused }) => {
                        return (<Image source={focused ? TabETCFocusIcon : TabETCIcon} style={{ width:40, height:40 }} />)
                    }
                }} />
        </AdminTab.Navigator>
    )
}
