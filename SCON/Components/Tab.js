import React, { Component } from 'react'
import {
    Image,
    Button,
    View,
    StyleSheet,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigationState } from '@react-navigation/native'

import { HomeScreen } from '../Views/Home'
import { SearchScreen } from '../Views/Search'
import { RankScreen } from '../Views/Rank'
import { MyPageScreen } from '../Views/MyPage'
import { TabHomeFocusIcon, TabHomeIcon, TabSearchFocusIcon, TabSearchIcon, TabRankFocusIcon, TabRankIcon, TabETCFocusIcon, TabETCIcon} from'../Assets/Icons'
const Tab = createBottomTabNavigator()

export function TabScreen({ navigation }) {
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
                tabBarShowLabel:false,
            }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{

                    headerShown: false,
                    tabBarIcon : ({ focused }) => {
                        return ( <Image source={focused ? TabHomeFocusIcon : TabHomeIcon} style={{width: 25, height: 25}}/> )}}} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} 
            options={{
                title:'선수 목록',
                tabBarIcon : ({ focused }) => {
                    return ( <Image source={focused ? TabSearchFocusIcon : TabSearchIcon} style={{width: 25, height: 25}}/>)}}}/>
            <Tab.Screen name="RankScreen" component={RankScreen} 
            options={{
                title:'랭킹',
                tabBarIcon : ({ focused }) => {
                    return ( <Image source={focused ? TabRankFocusIcon : TabRankIcon} style={{width: 25, height: 25}}/>)}}}/>
            <Tab.Screen name="MyPageScreen" component={MyPageScreen} 
            options={{
                title:'마이페이지',
                tabBarIcon : ({ focused }) => {
                    return ( <Image source={focused ? TabETCFocusIcon : TabETCIcon} style={{width: 40, height: 40}}/>)}}}/>
        </Tab.Navigator>
    )
}

