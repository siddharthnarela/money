import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Start from './start';
import Home1 from './home1'; 
import login from './login';
import Signup from './signup';
import Policy from './policy';
import Mfunds from './screens/mfunds';

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          ...TransitionPresets.SlideFromLeftIOS,
        }}
      >
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home1"
          component={Home1} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Policy"
          component={Policy} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mfunds"
          component={Mfunds} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
