import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, 
  },

  Imgcontainer: {
    flex: 1,
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

  cardscontainer: {
    marginTop: 24,
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

  credits_card: {
    width: '47%',
    height: 140,
    borderRadius: 22,
  },

  credits: {
    color: 'white',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },
  creditsval: {
    color: 'white',
    fontSize: 32,
    marginLeft: 25,
    marginTop: 6,
    fontWeight: 'bold',
  },

  modules_card: {
    width: '47%',
    height: 140,
    borderRadius: 22,
  },

  modules: {
    color: 'white',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },

  modulesval: {
    color: 'white',
    fontSize: 32,
    marginLeft: 25,
    marginTop: 6,
    fontWeight: 'bold',
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

  balancecard: {
    height: "15%",
    alignSelf: 'center',
    width: '85%',
    borderRadius: 15,
    backgroundColor: 'black',
    marginTop: 15, 
  },

  balancetext: {
    color: 'white',
    fontSize: 16,
    marginLeft: 25, 
    marginTop: 20,
    fontWeight: 'bold',
},

balance: {
  color: 'white',
  fontSize: 16,
  marginLeft: 25, 
  marginTop: 5,
  fontSize: 32,
  fontWeight: 'bold',
},

});

export default styles;
