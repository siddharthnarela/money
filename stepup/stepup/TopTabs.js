// TopTabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dash from './dash';
import Profile from './profile';
import HeaderBar from './HeaderBar';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <>
      <HeaderBar title="StepUp" />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Dash" component={Dash} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabs;
