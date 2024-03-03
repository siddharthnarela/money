//copilot.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles/styles_main';

export default function Start( ) {
  const [loaded] = useFonts({
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')} style={[styles.logo, { zIndex: 1 }]} />
      <Text style={styles.space}> </Text>
      <Text style={styles.text}>Hey There,</Text>
      <Text style={styles.text1}>StepUp is a Finance Assistant App which is in its development phase and has really many new and cool features that will be comin in further updates.This is the Section where User can directly interact with ai and can discuss about the current trends. Our platform Provides you a reatime trading expiernce with fake money and it is really very usefull for beginers who want to become traders.</Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}>We will for sure update this section and make it working soon!!</Text>
    </View>
  );
}
