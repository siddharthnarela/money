// Home.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles/styles';
import { useNavigation } from '@react-navigation/native';
import Login from './login';
import 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  const [isFontsLoaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  const fadeInAnim1 = useRef(new Animated.Value(0)).current;
  const fadeInAnim2 = useRef(new Animated.Value(0)).current;
  const fadeInAnim3 = useRef(new Animated.Value(0)).current;
  const fadeInAnim4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFontsLoaded) {
      Animated.timing(fadeInAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeInAnim2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, 500);

      setTimeout(() => {
        Animated.timing(fadeInAnim3, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, 1200);

      setTimeout(() => {
        Animated.timing(fadeInAnim4, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, 1200);
    }
  }, [isFontsLoaded, fadeInAnim1, fadeInAnim2, fadeInAnim3, fadeInAnim4]);

  if (!isFontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Animated.Text style={{ ...styles.text, opacity: fadeInAnim1 }}>Hey!</Animated.Text>
      <Animated.Text style={{ ...styles.text, opacity: fadeInAnim2 }}>Are you new here?</Animated.Text>
      <Text style={styles.space}> </Text>

      <Pressable onPress={() => navigation.navigate('Policy', { someKey: 'someValue' })}>
        <Animated.Text style={{ ...styles.text, opacity: fadeInAnim3, color: '#26C81B', fontWeight: 'bold', textDecorationLine: 'underline' }}>
          Yes! I'm new to StepUp.
        </Animated.Text>
      </Pressable>

      <Text style={styles.space}> </Text>

      <Pressable onPress={() => navigation.navigate('Login', { anotherKey: 'anotherValue' })}>
        <Animated.Text style={{ ...styles.text, opacity: fadeInAnim4, color: '#26C81B', fontWeight: 'bold', textDecorationLine: 'underline' }}>
          No! I already have an account.
        </Animated.Text>
      </Pressable>
    </View>
  );
}
