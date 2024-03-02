import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Switch,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  SafeAreaView} from 'react-native';
  import {React} from 'react';
  import Wallet from '../components/wallet';
  
export default function Dashboard({navigation}) {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.walletContainer}>
          <View style={styles.walletTextContainer}>
            <Wallet/>

          </View>
        </View>

        <View>

        </View>
      </View>
    <StatusBar hidden={false} />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  
});

