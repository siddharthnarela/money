//policy.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles_policy';

export default function Start() {
    const [loaded] = useFonts({
      TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
    });
  
    const navigation = useNavigation();
  
    if (!loaded) {
      return null;
    }
  
    const handleButtonPress = () => {
      navigation.navigate('Signup', { hideHeader: true });
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('./assets/icon.png')} style={[styles.logo, { zIndex: 1 }]} />
        <Text style={styles.h1}>StepUp</Text>
        <Text style={styles.text}>Terms & Conditions</Text>
        <Text style={styles.text1}>Welcome to StepUp! Our finance-assisting app is designed to empower users with effective financial management tools. By using our services, you agree to provide accurate information and use the app responsibly. While we strive for accuracy, users are encouraged to verify financial data independently. Use of the app for illegal activities is strictly prohibited. Your privacy is important to us; please review our privacy policy for details. Non-compliance may result in account termination. Thank you for choosing StepUp!</Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>I agree</Text>
        </TouchableOpacity>
      </View>
    );
  }
  