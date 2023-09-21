import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from './components/Searchbar';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Web Series Search App</Text>
      <SearchBar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

