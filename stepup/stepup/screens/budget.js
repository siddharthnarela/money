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
  
export default function Budget({navigation}) {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
            <Image source={require('./assets/logo2.png')} resizeMode='contain' style={styles.logo} />
        </View>
        <View style={styles.profile}>
        <LinearGradient
            colors={['#29323c','#485563']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.card2}>

            <Image style={{width:200, height:200, borderRadius:100,}} source={require('./assets/postLogo.png')} />
            <View style={{display:'flex',height:200, flexDirection:'column',justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Username  :  userName</Text>
                <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Username  :  Unknown</Text>
                <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Username  :  Unknown</Text>
                <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Username  :  Unknown</Text>
                <TouchableOpacity onPress={()=>{signOut}} title='Logout' color='#191717' style={{top:70,height:60,width:200, backgroundColor:'#191717', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>
                    Logout
                  </Text>
                </TouchableOpacity>
            </View>
              
          </LinearGradient>
        </View>
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

