import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Start from './start';
import Home1 from './home1';
import Login from './login';
import Signup from './signup';
import Policy from './policy';
import Dash from './dash';
import TopTabNavigator from './TopTabNavigator';
import TopTabs from './TopTabs';

const Stack = createStackNavigator();

const LoadingIndicator = () => {
  // Implement your loading indicator UI here
  return null;
};

export default function App() {
  const [fontsLoaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Perform any additional initialization logic here
    // You may fetch data or perform other tasks before setting isLoading to false
    setIsLoading(false);
  }, []);

  if (isLoading || !fontsLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView
    style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }}
  >
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
            name="Policy"
            component={Policy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dash"
            component={Dash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TopTabNavigator"
            component={TopTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={TopTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
