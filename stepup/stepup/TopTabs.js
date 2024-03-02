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
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: { backgroundColor: 'green' },
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen name="Dashboard" component={Dash} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabs;
