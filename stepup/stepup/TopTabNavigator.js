// TopTabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dash from './dash';
import Profile from './profile';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dash" component={Dash} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
