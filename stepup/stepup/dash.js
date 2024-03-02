import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_dash';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Dash() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  // Load fonts using useFonts hook
  const [isFontsLoaded] = useFonts({
    // Add your font imports here
  });

  useEffect(() => {
    // Add logic or side effects here
  }, [isFontsLoaded]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={[styles.Imgcontainer, { marginVertical: isFocused ? 20 : 0 }]}>
        <View style={styles.container}>
          <View style={styles.portcard}>
            <Text style={styles.porttext}>Aditya Srivastava</Text>
            <Text style={styles.porttext}>Current Bal:</Text>
            <Text style={styles.balance}>$32,341.59</Text>
            <Text style={styles.porttext}>Current Investments: None</Text>
            <Text style={styles.porttext}>Current Holdings: None</Text>
          </View>
          <Text style={styles.space}></Text>
          <Text style={styles.text}>Recent Stats!</Text>
          <View style={styles.cardscontainer}>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
