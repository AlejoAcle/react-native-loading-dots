// example/App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoadingDots from '../src/LoadingDots';

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingDots dotColor="#007AFF" dotSize={12} dotSpacing={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
