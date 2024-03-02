import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 20,
    marginLeft: 35,
    marginBottom: 8,
    fontWeight: 'bold',
  },


  text1: {
    fontSize: 15,
    marginLeft: 30,
    marginTop: 6,
    marginRight: 25,
    fontWeight: 'normal',
  },

  input: {
    height: 50,
    borderColor: '#D4D4D4',
    borderWidth: 1,
    marginLeft: 30,
    borderRadius: 12,
    marginRight: 30,
    marginTop: 20,
    paddingLeft: 20,
  },

  button: {
    backgroundColor: '#26C81B',
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 22,
    marginTop: 90,
    bottom: 15,
    position: 'fixed',
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logo: {
    width: 50,
    height: 50,
    marginTop: 65,
    marginLeft: 30,
    alignSelf: 'flex-start'
  },

  h1: {
    fontSize: 23,
    bottom: 40,
    alignSelf: 'flex-start',
    marginLeft: 85,
  },

});

export default styles;
