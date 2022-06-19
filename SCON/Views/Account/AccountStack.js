import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Button,
	View,
	StyleSheet,
} from 'react-native';

import { AccountScreen, PasswordChange, PlayerRegist, Withdrawal  } from './index';

const AccountStack = createStackNavigator();

export function AccountStackScreen() {
	return (
	  <AccountStack.Navigator>
		<AccountStack.Screen name="Account" component={AccountScreen} />
		<AccountStack.Screen name="PasswordChange" component={PasswordChange} />
		<AccountStack.Screen name="PlayerRegist" component={PlayerRegist} />
		<AccountStack.Screen name="Withdrawal" component={Withdrawal} />
	  </AccountStack.Navigator>
	);
}