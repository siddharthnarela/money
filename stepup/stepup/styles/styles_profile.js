import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
  },

  Imgcontainer: {
    flex: 1,
    marginTop: 60,
  },

  text: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 15,
    marginTop: 6,
    marginLeft: 30,
    marginRight: 25,
    fontWeight: 'normal',
  }, 

  h1: {
    fontSize: 23,
    position: 'absolute',
    top: 180,
    left: 30,
    fontFamily: 'TechnicBold',
  },

  space: {
    fontSize: 19,
  },

  button: {
    backgroundColor: '#E54040',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 22,
    marginBottom: 22,
    marginTop: 20, 
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },

  accountBalanceContainer: {
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  accountBalanceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  bal_card: {
    width: '47%',
    height: 240,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bal_card2: {
    width: '47%',
    height: 240,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bal_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  profileImage: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    marginLeft: 25,
    position: 'absolute',
    top: 10, 
  },
  redirectorsContainer: {
    backgroundColor: '#ECECEC',
    width: '90%',
    padding: 15,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 25,
  },
  redirector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  redirectorText: {
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});

export default styles;