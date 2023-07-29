// globalStyles.js

import React ,{ useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default globalStyles;
