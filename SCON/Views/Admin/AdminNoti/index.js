import React, { Component } from 'react';


import { AdminNotiRegist } from './AdminNotiRegist'; 
import { AdminNotiListScreen } from './AdminNotiListScreen'; 

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const AdminNotiStack = createMaterialTopTabNavigator();

export function AdminNotiTabScreen({ navigation }) {
	return (
		<AdminNotiStack.Navigator>
			<AdminNotiStack.Screen name="공지사항 목록" component={AdminNotiListScreen} />
			<AdminNotiStack.Screen name="공지사항 등록" component={AdminNotiRegist} />
		</AdminNotiStack.Navigator>
	);
}
