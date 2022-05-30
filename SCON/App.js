import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabScreen} from './Components/Tab';

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
}
