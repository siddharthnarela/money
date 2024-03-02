import React, { useState, forwardRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles_log';


export default function Start() {
  const [loaded] = useFonts({
    TechnicBold: require('./assets/fonts/TechnicBold.ttf'),
  });

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!loaded) {
    return null;
  }

  const handleButtonPress = () => {
    if (!username || !password) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: 'Please enter both username and password to proceed',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      try {
        navigation.navigate('Home', { hideHeader: true });
      } catch (error) {
        console.error('Authentication Error:', error.message);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Authentication Error',
          text2: error.message,
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image source={require('./assets/icon.png')} style={[styles.logo, { zIndex: 1 }]} />
          <Text style={styles.h1}>StepUp</Text>
          <Text style={styles.text}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleButtonPress}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>

          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
