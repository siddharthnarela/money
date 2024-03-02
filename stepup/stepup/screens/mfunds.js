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
import ModuleCard from '../components/moduleCard';
  
export default function Wallet({navigation}) {


  return (
    <View>
    <ModuleCard/>
      </View>
    
    
    
  )
}

const styles = StyleSheet.create({
  wallet:{
    height:300,
    width:350,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,   /////
    marginLeft:20     //////
  }
});

