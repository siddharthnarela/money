import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_mf';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function Dash() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();

  const [isFontsLoaded] = useFonts({
    // Add your font imports here
  });

  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    if (route.params?.updatedBalance !== undefined) {
      setCurrentBalance(route.params.updatedBalance);
    }
  }, [route.params?.updatedBalance]);

  const handleButtonPress = () => {
    navigation.navigate('Start', { hideHeader: true });
    console.log('Button pressed!');
  };

  if (!isFontsLoaded) {
    return null;
  }

  const handleRedirect = (screen) => {
    if (screen === 'History') {
      navigation.navigate('History', { history });
    }
  };

  return (
    <ScrollView>
    <Text style={styles.Name}>Sample Card Format</Text>
      <LinearGradient
        colors={['#333', '#111']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>Stock Name</Text>
        <Text style={styles.price}>INR 00.00</Text>
        <Text style={styles.text}>1 Year Return</Text>
        <Text style={styles.text}>Growth</Text>
        <Text style={styles.risk}>Risks</Text>
      </LinearGradient>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        />
      </View>
      <Text style={styles.Name}>Mutual Funds</Text>
      <LinearGradient
        colors={['#2C3E50', '#34495E']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>Vanguard Stock Mkt Idx Instl Pls</Text>
        <Text style={styles.price}>INR 230.91</Text>
        <Text style={styles.text}>1.12%	YTD</Text>
        <Text style={styles.text}>+0.80%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#4A4A4A', '#2F4F4F']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>HDFC Equity Savings IDCW-R</Text>
        <Text style={styles.price}>INR 12.86</Text>
        <Text style={styles.text}>1.74% YTD</Text>
        <Text style={styles.text}>+0.55%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#383838', '#34495E']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>ICICI Pru Life-Maximiser V</Text>
        <Text style={styles.price}>INR 46.99</Text>
        <Text style={styles.text}>1.74% YTD</Text>
        <Text style={styles.text}>-0.13%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#2F4F4F', '#483D8B']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>American Funds Growth</Text>
        <Text style={styles.price}>INR 69.03</Text>
        <Text style={styles.text}>+1.35% YTD</Text>
        <Text style={styles.text}>1.77%	</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#2F4F4F']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>SBI Life-Bond</Text>
        <Text style={styles.price}>INR 44.48</Text>
        <Text style={styles.text}>0.93% YTD</Text>
        <Text style={styles.text}>+0.11%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#556B2F']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>SBI Life-Equity</Text>
        <Text style={styles.price}>INR 178.27</Text>
        <Text style={styles.text}>1.30% YTD</Text>
        <Text style={styles.text}>+1.46%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#31026C']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>Tata Treasury Advantage</Text>
        <Text style={styles.price}>INR 3,561.09</Text>
        <Text style={styles.text}>0.60% YTD</Text>
        <Text style={styles.text}>+0.01%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#6C0202']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>PIMCO Income Fund</Text>
        <Text style={styles.price}>INR 10.52</Text>
        <Text style={styles.text}>0.59% YTD</Text>
        <Text style={styles.text}>+0.29%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#703E69']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>Nippon India Money Market</Text>
        <Text style={styles.price}>INR 3,791.92</Text>
        <Text style={styles.text}>0.65% YTD</Text>
        <Text style={styles.text}>+0.03%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#3E3378']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>American Funds New Perspective F1</Text>
        <Text style={styles.price}>INR 58.54</Text>
        <Text style={styles.text}>0.41% YTD</Text>
        <Text style={styles.text}>+1.20%</Text>
        <Text style={styles.risk}>No Risks</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#1E1E1E', '#7B3626']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>Vanguard Small Cap Index</Text>
        <Text style={styles.price}>INR 105.27</Text>
        <Text style={styles.text}>-2.63% YTD</Text>
        <Text style={styles.text}>+0.74%	</Text>
        <Text style={[styles.risk, { color: '#FC6161' }]}>Yes Risky</Text>
      </LinearGradient>
      

    </ScrollView>
  );
}
