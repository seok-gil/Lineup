import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import { View,TouchableOpacity, Image,TextInput } from 'react-native';

import { ViewMore } from "../../../Assets/Icons/"

export function CommentModal() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => onclick}>
				<Image source={ViewMore} />
			</TouchableOpacity>
		</View>
	);
}