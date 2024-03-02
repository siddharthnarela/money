// HeaderBar.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeaderBar = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Image source={require('./assets/icon.png')} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default HeaderBar;
