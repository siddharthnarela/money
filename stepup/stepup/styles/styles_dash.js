import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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

  accountText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },

  portcard: {
    height: "auto",
    alignSelf: 'center',
    width: '85%',
    borderRadius: 15,
    backgroundColor: '#F2FFFE',
  },

  porttext: {
    color: 'black',
    fontSize: 16,
    marginLeft: 25, 
    marginTop: 20,
    fontWeight: 'bold',
},

balance: {
  color: 'black',
  fontSize: 16,
  marginLeft: 25, 
  marginTop: 5,
  marginBottom:"3%",
  fontSize: 32,
  fontWeight: 'bold',
},

});

export default styles;
