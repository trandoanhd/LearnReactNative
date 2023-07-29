// ButtonComponent.js
import React ,{ useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../styles/buttonStyles';

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.buttonContainer}>
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
