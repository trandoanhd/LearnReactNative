// ListScreen.js
import React , { useState }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ListScreen = ({ route }) => {
  const { fullName, birthYear } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Danh sách:</Text>
      <Text style={globalStyles.text}>Họ tên: {fullName}</Text>
      <Text style={globalStyles.text}>Năm sinh: {birthYear}</Text>
    </View>
  );
};

export default ListScreen;
