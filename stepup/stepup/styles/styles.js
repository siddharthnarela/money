import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 15,
    marginLeft: 30,
    marginTop: 6,
    marginRight: 25,
    fontWeight: 'normal',
  }, 

  button: {
    backgroundColor: '#26C81B',
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 22,
    marginTop: 20,
    bottom: 75,
    position: 'absolute',
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 90,
    left: 20,
  },

  h1: {
    fontSize: 23,
    position: 'absolute',
    top: 180,
    left: 30,
    fontFamily: 'TechnicBold',
  },

  pp: {
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 22,
    bottom: 10,
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  space: {
    fontSize: 9,
  },
});

export default styles;
