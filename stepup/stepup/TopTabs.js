import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dash from './dash';
import Profile from './profile';
import MutualFunds from './MutualFunds';
import Copilot from './copilot';
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
          labelStyle: { fontSize: 14, flex: 1, textAlign: 'center' }, // Set flex and textAlign to center
          tabStyle: { width: 'auto' }, // Allow tabs to take the necessary width
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dash}
          options={{
            tabBarLabel: 'Dashboard',
          }}
        />
        <Tab.Screen
          name="Mutual Funds"
          component={MutualFunds}
          options={{
            tabBarLabel: 'Mutual Funds',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        <Tab.Screen
          name="AI"
          component={Copilot}
          options={{
            tabBarLabel: 'AI',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TopTabs;
