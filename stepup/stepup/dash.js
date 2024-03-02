// Dash.js
import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles/styles'; // Import your styles as needed

export default function Dash() {
  const isFocused = useIsFocused();

  return (
    <SafeAreaView>
    <View style={styles.container}>
      {isFocused ? (
        <ScrollView>
          {/* Your scrollable content for Dash */}
          <Text>Welcome to your Dashboard!</Text>
          {/* ... other scrollable content ... */}
        </ScrollView>
      ) : (
        <>
          {/* Non-scrollable content for Dash when not focused */}
          <Text>Loading...</Text>
          {/* ... other non-scrollable content ... */}
        </>
      )}
    </View>
    </SafeAreaView>
  );
}
