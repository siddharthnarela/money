import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';

export default function Start() {
  const [loaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  const navigation = useNavigation();

  if (!loaded) {
    return null;
  }
6
  const handleButtonPress = () => {
    navigation.navigate('Home1', { hideHeader: true });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={[styles.logo, { zIndex: 1 }]} />
      <Text style={styles.h1}>StepUp</Text>
      <Text style={styles.text}>Hello User,</Text>
      <Text style={styles.text}>Welcome to StepUp!</Text>
      <Text style={styles.text1}>Embark on a journey towards financial success with StepUp, your trusted companion in the world of personal finance. We understand that managing your money effectively is like navigating through the vast seas of financial choices, and that's where StepUp comes in.</Text>
      <Text style={styles.pp}>Do read our <Text style={{ color: '#26C81B', fontWeight: 'bold', textDecorationLine: 'underline' }}>Terms of Service</Text> and <Text style={{ color: '#26C81B', fontWeight: 'bold', textDecorationLine: 'underline' }}>Privacy Policy.</Text></Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
