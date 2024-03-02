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
  });

  const [enteredAmount, setEnteredAmount] = useState('');
  const [currentBalance, setCurrentBalance] = useState(0.0);

  useEffect(() => {
  }, [isFontsLoaded]);

  const BankIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logout"><path d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"></path></svg>
`;
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

  const handleAddExpense = () => {
    if (!enteredAmount || isNaN(enteredAmount)) {
      // Display a toast message for no input on amount
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid amount',
      });
      return;
    }

    const expenseAmount = parseFloat(enteredAmount);
    if (expenseAmount > currentBalance) {
      // Display a toast message for insufficient balance
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Insufficient balance',
      });
      return;
    }

    const newBalance = parseFloat(currentBalance) - expenseAmount;
    setCurrentBalance(newBalance);
    setEnteredAmount('');

    // You can add additional logic here, e.g., save the expense transaction

    // Optionally, you can also update the balance in the Profile screen using navigation params
    navigation.navigate('Profile', { updatedBalance: newBalance });
  };

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: '#FFFFFF' }]}>
      <View style={styles.cardscontainer}>
            <LinearGradient
              colors={['#677', 'black']}
              style={styles.credits_card}
            >
              <Text style={styles.credits}>Credits     Available</Text>
              <Text style={styles.creditsval}>321</Text>
            </LinearGradient>
            <LinearGradient
              colors={['#677', 'black']}
              style={styles.modules_card}
            >
              <Text style={styles.modules}>Modules Completed</Text>
              <Text style={styles.modulesval}>5</Text>
            </LinearGradient>
          </View>
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
              <Text style={styles.addMoneyButtonText}>Add Income</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addMoneyButton} onPress={handleAddExpense}>
              <Text style={styles.addMoneyButtonText}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
