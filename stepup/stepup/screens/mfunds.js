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
  
export default function Mfunds({navigation}) {


  return (
    <SafeAreaView style={styles.container}>
        
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center',
    
  },
  
  profile:{
    width:'100%',
    height:500,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:50,
    top:-20,
    // alignItems:'flex-start',
    // top:50,
    
  },

  header:{
    backgroundColor:'#191717',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    height:50,
    alignItems:'center',
    width:'100%',
    borderBottomEndRadius:100,
    borderBottomStartRadius:100,
    marginBottom:10,

  },

  logo:{
    width:150,
  },
  card2:{
    width:320,
    height:520,
    borderRadius:15,
    padding:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
});

