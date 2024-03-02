import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles_main.js';

export default function Start() {
  const [loaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  const navigation = useNavigation();

  if (!loaded) {
    return null;
  }

  const handleButtonPress = () => {
    navigation.navigate('Screen1', { hideHeader: true });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={[styles.logo, { zIndex: 1 }]} />
      <Text style={styles.h1}>CollegeMates</Text>
    </View>
  );
}
