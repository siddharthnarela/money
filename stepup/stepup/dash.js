import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_dash';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function Dash({ route }) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [isFontsLoaded] = useFonts({
    // Add your font imports here
  });

  const [enteredAmount, setEnteredAmount] = useState('');
  const [currentBalance, setCurrentBalance] = useState(32341.59); // Initial balance, replace with your actual initial balance

  useEffect(() => {
    // Add logic or side effects here
  }, [isFontsLoaded]);

  const handleAddMoney = () => {
    if (!enteredAmount || isNaN(enteredAmount)) {
      // Display a toast message for no input on amount
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid amount',
      });
      return;
    }

    const newBalance = parseFloat(currentBalance) + parseFloat(enteredAmount);
    setCurrentBalance(newBalance);
    setEnteredAmount('');

    // Pass the updated balance to the Profile screen using navigation params
    navigation.navigate('Profile', { updatedBalance: newBalance });
  };

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={[styles.Imgcontainer, { marginVertical: isFocused ? 20 : 0 }]}>
        <View style={styles.container}>
          <View style={styles.portcard}>
            <Text style={styles.porttext}>Aditya Srivastava</Text>
            <Text style={styles.porttext}>Current Bal:</Text>
            <Text style={styles.balance}>${currentBalance.toFixed(2)}</Text>
            <Text style={styles.porttext}>Current Investments: None</Text>
            <Text style={styles.portmod}>Current Holdings: None</Text>
          </View>
          <Text style={styles.space}></Text>
          <Text style={styles.text}>Add Money!</Text>
          <View style={styles.cardscontainer}>
            <TextInput
              style={styles.amountInput}
              placeholder="Enter Amount"
              keyboardType="numeric"
              value={enteredAmount}
              onChangeText={(text) => setEnteredAmount(text)}
            />
            </View>
            <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.addMoneyButton} onPress={handleAddMoney}>
    <Text style={styles.addMoneyButtonText}>Add Money</Text>
  </TouchableOpacity>
</View>
<Text style={styles.textexp}>Add Expense!</Text>
          </View>
        </View>
    </ScrollView>
  );
}
