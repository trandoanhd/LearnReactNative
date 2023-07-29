// TextInputComponent.js
import React, { useState }  from 'react';
import { View, TextInput } from 'react-native';
import textInputStyles from '../styles/textInputStyles';

const TextInputComponent = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={textInputStyles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputComponent;
