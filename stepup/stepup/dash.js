import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_dash';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import Toast from 'react-native-toast-message';
import MutualFunds from './MutualFunds'; 

export default function Dash({ route }) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [currentlyInvestedMFs, setCurrentlyInvestedMFs] = useState(0);
  const [isFontsLoaded] = useFonts({});
  const [enteredAmount, setEnteredAmount] = useState('');
  const [currentBalance, setCurrentBalance] = useState(0.0);
  const [totalIncome, setTotalIncome] = useState(0.0);
  const [totalExpense, setTotalExpense] = useState(0.0);
  const [profitPercentage, setProfitPercentage] = useState(0.0);
  const handleAddMF = () => {
    setCurrentlyInvestedMFs((prevInvestedMFs) => prevInvestedMFs + 1);
  };

  useEffect(() => {}, [isFontsLoaded]);

  const BankIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 48 48" id="Wallet--Streamline-Plump"><desc>Wallet Streamline Icon: https://streamlinehq.com</desc><g id="Wallet--Streamline-Plump"><path id="Union" fill="#fff" fill-rule="evenodd" d="M27.56 2.355c2.638 -0.65 5.493 0.315 6.946 2.798 0.373 0.638 0.782 1.382 1.215 2.238C32.683 7.19 28.176 7 22 7c-3.484 0 -6.436 0.06 -8.894 0.15 4.622 -1.93 9.651 -3.613 14.454 -4.795ZM8.057 46.089c2.977 0.206 7.548 0.411 13.943 0.411s10.966 -0.205 13.943 -0.411c3.278 -0.227 5.864 -2.717 6.133 -6.022 0.052 -0.632 0.102 -1.334 0.15 -2.111 -0.929 0.027 -2.001 0.044 -3.226 0.044 -1.674 0 -3.064 -0.032 -4.19 -0.077 -3.639 -0.146 -6.577 -2.933 -6.743 -6.667A73.64 73.64 0 0 1 28 28c0 -1.262 0.027 -2.343 0.067 -3.256 0.166 -3.734 3.104 -6.52 6.743 -6.667A104.84 104.84 0 0 1 39 18c1.225 0 2.297 0.017 3.226 0.044 -0.048 -0.777 -0.098 -1.48 -0.15 -2.11 -0.269 -3.306 -2.855 -5.796 -6.133 -6.023C32.966 9.705 28.395 9.5 22 9.5s-10.966 0.205 -13.943 0.411c-3.278 0.227 -5.864 2.717 -6.133 6.022C1.706 18.611 1.5 22.575 1.5 28s0.206 9.39 0.424 12.067c0.269 3.305 2.855 5.795 6.133 6.022Zm23.007 -14.966c0.095 2.13 1.737 3.717 3.866 3.802 1.085 0.044 2.434 0.075 4.07 0.075 1.636 0 2.985 -0.031 4.07 -0.075 2.13 -0.085 3.771 -1.672 3.866 -3.802 0.038 -0.867 0.064 -1.904 0.064 -3.123 0 -1.22 -0.026 -2.256 -0.064 -3.123 -0.095 -2.13 -1.737 -3.717 -3.866 -3.802A101.898 101.898 0 0 0 39 21c-1.636 0 -2.985 0.031 -4.07 0.075 -2.13 0.085 -3.771 1.672 -3.866 3.802A70.762 70.762 0 0 0 31 28c0 1.22 0.026 2.256 0.064 3.123ZM38 25.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1 -3 0v-2a1.5 1.5 0 0 1 1.5 -1.5Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
  `;

  const MFIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 48 48" id="Treasure-Chest--Streamline-Plump"><desc>Treasure Chest Streamline Icon: https://streamlinehq.com</desc><g id="Treasure-Chest--Streamline-Plump"><g id="Subtract"><path fill="#fff" d="M24 46.5c3.317 0 6.148 -0.098 8.552 -0.253a361.294 361.294 0 0 0 0.45 -7.534c0.234 -4.763 0.47 -11.232 0.495 -18.394 -1.283 0.047 -2.623 0.087 -4.006 0.118a92.373 92.373 0 0 1 -0.031 1.546c-0.07 2.382 -1.824 4.421 -4.368 4.5a35.164 35.164 0 0 1 -2.184 0c-2.544 -0.079 -4.299 -2.118 -4.368 -4.5a94.978 94.978 0 0 1 -0.031 -1.546 269 269 0 0 1 -4.007 -0.118 409.284 409.284 0 0 0 0.839 24.377c0.043 0.66 0.08 1.183 0.107 1.55A132.5 132.5 0 0 0 24 46.5Z" stroke-width="1"></path><path fill="#fff" d="M18.51 17.436a289.216 289.216 0 0 1 -15.525 -0.775 176.68 176.68 0 0 1 -1.347 -0.11c0.132 -3.484 0.336 -6.286 0.514 -8.268 0.237 -2.64 2.003 -4.968 4.78 -5.513C10.004 2.167 15.353 1.5 24 1.5c8.647 0 13.996 0.667 17.068 1.27 2.777 0.545 4.543 2.872 4.78 5.513 0.178 1.982 0.382 4.784 0.514 8.268 -0.314 0.026 -0.768 0.064 -1.347 0.11a289.208 289.208 0 0 1 -15.525 0.776 91.468 91.468 0 0 0 -0.03 -1.42c-0.07 -2.382 -1.824 -4.421 -4.368 -4.5a35.164 35.164 0 0 0 -2.184 0c-2.544 0.079 -4.299 2.118 -4.368 4.5 -0.012 0.423 -0.023 0.896 -0.03 1.42Z" stroke-width="1"></path><path fill="#fff" d="M41.068 45.23c-1.356 0.266 -3.157 0.545 -5.49 0.773 0.021 -0.31 0.047 -0.68 0.075 -1.11a412.04 412.04 0 0 0 0.845 -24.7 297.996 297.996 0 0 0 8.751 -0.541c0.492 -0.039 0.896 -0.072 1.202 -0.098 0.031 1.399 0.049 2.883 0.049 4.446 0 7.033 -0.36 12.473 -0.652 15.718 -0.237 2.64 -2.003 4.967 -4.78 5.512Z" stroke-width="1"></path><path fill="#fff" d="M1.5 24c0 -1.563 0.018 -3.047 0.049 -4.446a271.302 271.302 0 0 0 6.26 0.443c1.129 0.067 2.367 0.134 3.693 0.196a412.04 412.04 0 0 0 0.845 24.7c0.028 0.43 0.054 0.8 0.076 1.11 -2.334 -0.228 -4.135 -0.507 -5.491 -0.773 -2.777 -0.545 -4.543 -2.872 -4.78 -5.512C1.86 36.473 1.5 31.032 1.5 24Z" stroke-width="1"></path><path fill="#000" d="M21.539 16.105A99.687 99.687 0 0 0 21.5 19c0 1.157 0.016 2.117 0.039 2.895 0.028 0.96 0.663 1.565 1.462 1.59a32.221 32.221 0 0 0 1.998 0c0.799 -0.025 1.434 -0.63 1.462 -1.59 0.023 -0.778 0.039 -1.738 0.039 -2.895s-0.016 -2.117 -0.039 -2.895c-0.028 -0.96 -0.663 -1.565 -1.462 -1.59a31.893 31.893 0 0 0 -1.998 0c-0.799 0.025 -1.434 0.63 -1.462 1.59Z" stroke-width="1"></path></g></g></svg>
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

    const incomeAmount = parseFloat(enteredAmount);
  const newBalance = parseFloat(currentBalance) + incomeAmount;
  setTotalIncome((prevTotalIncome) => prevTotalIncome + incomeAmount);
  setCurrentBalance(newBalance);
  setEnteredAmount('');

    // Calculate and update profit percentage
  const profitPercentageValue = (totalIncome / totalExpense) * 100;
  setProfitPercentage(isFinite(profitPercentageValue) ? profitPercentageValue : 0);

  // Increment currently invested MFs
  setCurrentlyInvestedMFs((prevInvestedMFs) => prevInvestedMFs + 1);

  // Pass the updated balance and profit percentage to the Profile screen using navigation params
  navigation.navigate('Profile', { updatedBalance: newBalance, profitPercentage });
};

  const handleAddExpense = () => {
    if (!enteredAmount || isNaN(enteredAmount)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid amount',
      });
      return;
    }

    const expenseAmount = parseFloat(enteredAmount);
    if (expenseAmount > currentBalance) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Insufficient balance',
      });
      return;
    }

    const newBalance = parseFloat(currentBalance) - expenseAmount;
    setTotalExpense((prevTotalExpense) => prevTotalExpense + expenseAmount);
    setCurrentBalance(newBalance);
    setEnteredAmount('');

    // Calculate and update profit percentage
    const profitPercentageValue = (totalIncome / totalExpense) * 100;
    setProfitPercentage(isFinite(profitPercentageValue) ? profitPercentageValue : 0);

    navigation.navigate('Profile', { updatedBalance: newBalance, profitPercentage });
  };

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: '#FFFFFF' }]}>
      <View style={styles.cardscontainer}>
        <LinearGradient colors={['#477', 'lightgreen']} style={styles.credits_card}>
          <SvgXml
            xml={BankIcon}
            width="40"
            height="40"
            fill="#fff"
            outline="fff"
            style={{ margin: 10, marginLeft: 25, marginTop: 22, alignSelf: 'left' }}
          />
          <Text style={styles.profit}>Profit     Percentage</Text>
          <Text style={styles.profitpercent}>{profitPercentage.toFixed(1)}%</Text>
        </LinearGradient>
        <LinearGradient colors={['#677', 'black']} style={styles.modules_card}>
  <SvgXml
    xml={MFIcon}
    width="40"
    height="40"
    fill="#fff"
    outline="fff"
    style={{ margin: 10, marginLeft: 25, marginTop: 22, alignSelf: 'left' }}
  />
  <Text style={styles.modules}>Currently  Invested MFs</Text>
  <Text style={styles.modulesval}>{currentlyInvestedMFs}</Text>
</LinearGradient>
      </View>
      <View style={[styles.Imgcontainer, { marginVertical: isFocused ? 20 : 0 }]}>
        <View style={styles.container}>
          <View style={styles.portcard}>
            <Text style={styles.porttext}>Aditya Srivastava</Text>
            <Text style={styles.porttext}>Current Bal:</Text>
            <Text style={styles.balance}>Rs {currentBalance.toFixed(2)}</Text>
            <Text style={styles.porttext}>Current Investments: None</Text>
            <Text style={styles.portmod}>Current Holdings: None</Text>
          </View>
          <Text style={styles.space}></Text>
          <Text style={styles.text}>Money Tracker!</Text>
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