// styles_abus.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  personContainer: {
    marginBottom: 20,
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Half of the width and height to create a round cutout
    marginBottom: 10,
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  personRole: {
    fontSize: 16,
    color: 'gray',
  },
});

export default styles;
