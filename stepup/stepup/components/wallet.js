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
  
export default function Wallet({navigation}) {


  return (
    <View>
    <LinearGradient
        colors={['#191717','#29323c']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.wallet}>
            
            <View style={{position:'absolute',top:-10,left:-5}}>

                <Text style={{color:'white',fontSize:25,fontWeight:'bold',backgroundColor:'#29323c',padding:15,borderRadius:10}}>WALLET</Text>
            </View>

            <View>
                <Text style={{color:'white',fontSize:40,fontWeight:'bold'}}>Rs. 12890</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Portfolio Balance - <Text  style={{color:'#32de84',fontSize:20,fontWeight:'bold'}}>890</Text></Text>
                {/* <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Rs. 12890</Text> */}
            </View>
        
      </LinearGradient>
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

