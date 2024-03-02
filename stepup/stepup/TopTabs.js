// TopTabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dash from './dash';
import Profile from './profile';
import { StatusBar, SafeAreaView } from 'react-native'; // Import StatusBar

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Tab.Navigator>
        <Tab.Screen name="Dash" component={Dash} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
}
