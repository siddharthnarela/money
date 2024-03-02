import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

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
  TouchableNativeFeedback} from 'react-native';
  import {NavigationContainer} from '@react-navigation/native';
  import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import {React} from 'react';
import Profile from './profile';
import Budget from './budget';

import Mfunds from './mfunds';
import Module from './module';
import Dashboard from './dashboard';
  

  
  const Tab = createBottomTabNavigator();
  
export default function Home() {

    console.log();

  return (
      <Tab.Navigator 
      initialRouteName='dashbord'
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'black',
      }}>
      
        <Tab.Screen options={{
          tabBarShowLabel:false,
          tabBarIcon : ({focused}) => {
            if(focused){
              return <MaterialIcons name="space-dashboard" style={styles.tab_button} size={35} color="#131834"/>
            }else{
              return <Ionicons name="home-outline" size={30} color="grey"/>
            }
          },
        }} name="feed" component={Dashboard}/>

        <Tab.Screen options={{
          tabBarShowLabel:false,
          tabBarIcon : ({focused}) => {
            if(focused){
              return <Ionicons name="chatbubble-ellipses"  size={40} color="#131834"/>
            }else{
              return <Ionicons name="chatbubble-ellipses-outline" size={35} color="grey"/>
            }
          }, 
        }} name="chat" component={Mfunds}/>


      <Tab.Screen options={{
        tabBarShowLabel:false,
        tabBarIcon : ({focused}) => {
          if(focused){
            return <Ionicons name="code-slash" style={styles.tab_button} size={40} color="#131834"/>
          }else{
            return <Ionicons name="code-slash-outline" size={30} color="grey"/>
          }
        },
      }} name="widget" component={Module}/>

        <Tab.Screen options={{
          tabBarShowLabel:false,
          tabBarIcon : ({focused}) => {
            if(focused){
              return <Ionicons name="person" style={styles.tab_button} size={35} color="#131834"/>
            }else{
              return <Ionicons name="person-outline" size={30} color="grey"/>
            }
          },
        }} name="profile" component={Profile}/>


      </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  login_container: {
    display:'flex',
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },

  h_username: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:'80%',
    borderRadius:15,
    fontSize: 18,
    color: 'black',
    textAlign:'center',
    },
   
  h_password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:'80%',
    borderRadius:15,
    fontSize: 18,
    color: 'black',
    textAlign:'center',
  },

  
  
});

