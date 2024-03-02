import React, { useState, forwardRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles_sign';
import Profile from './profile';

export default function Signup() {
  const [loaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!loaded) {
    return null;
  }

  const handleButtonPress = () => {
    if (!name || !username || !phoneNumber || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: 'Please fill in all fields to proceed',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: 'Passwords do not match. Please re-enter.',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      navigation.navigate('Login', { hideHeader: true });
    }
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Image source={require('./assets/icon.png')} style={[styles.logo, { zIndex: 1 }]} />
        <Text style={styles.h1}>StepUp</Text>
        <Text style={styles.text}>Signup</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <TextInput
          style={styles.input}
          placeholder="Choose a Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>

        <Toast ref={(ref) => Toast.setRef(ref)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
