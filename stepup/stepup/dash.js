import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_dash';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
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
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" id="Currency-Exchange--Streamline-Guidance"><desc>Currency Exchange Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" d="M12 9h-1a1 1 0 0 0 -1 1l0 0.375a1 1 0 0 0 0.72 0.96l2.56 0.747a1 1 0 0 1 0.72 0.96L14 14a1 1 0 0 1 -1 1l-1 0m0 -6h1a1 1 0 0 1 1 1v0.5M12 9V7.5m0 7.5 -1 0a1 1 0 0 1 -1 -1v-0.5m2 1.5v1.5M1 3h12a8 8 0 0 1 8 8M1 3c0.41 0 0.99 -0.247 1.41 -0.503a5.633 5.633 0 0 0 1.458 -1.305C4.186 0.792 4.5 0.318 4.5 0M1 3c0.41 0 0.99 0.247 1.41 0.503a5.64 5.64 0 0 1 1.458 1.305c0.318 0.4 0.632 0.874 0.632 1.192M23 21l-12 0a8 8 0 0 1 -8 -8m20 8c-0.41 0 -0.99 0.247 -1.41 0.503a5.636 5.636 0 0 0 -1.458 1.305c-0.318 0.4 -0.632 0.874 -0.632 1.192m3.5 -3c-0.41 0 -0.99 -0.247 -1.41 -0.503a5.636 5.636 0 0 1 -1.458 -1.305c-0.318 -0.4 -0.632 -0.874 -0.632 -1.192M18 12a6 6 0 1 0 -12 0 6 6 0 0 0 12 0Z" stroke-width="1"></path></svg>


`;
  const handleAddMoney = () => {
    if (!enteredAmount || isNaN(enteredAmount)) {
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
              colors={['#477', 'lightgreen']}
              style={styles.credits_card}
            >
              <SvgXml xml={BankIcon} width="40" height="40" fill="#fff" outline="fff" style={{ margin: 10, marginLeft:25, marginTop:22, alignSelf:"left" }} />
              <Text style={styles.profit}>Profit    Percentage</Text>
              <Text style={styles.profitpercent}>3.21%</Text>
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
