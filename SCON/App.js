import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabScreen } from './Components';

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
}
