// HomeScreen.js
import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import TextInputComponent from '../components/TextInputCmponent';
import ButtonComponent from '../components/ButtonComponent';
import globalStyles from '../styles/globalStyles';


const HomeScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('Tran van doan');
  const [birthYear, setBirthYear] = useState('');

  const handlePress = () => {
    navigation.navigate('ListScreen', { fullName, birthYear });
  };

  return (
    
    <View style={globalStyles.container}>
      <TextInputComponent
        placeholder="Họ tên"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInputComponent
        placeholder="Năm sinh"
        value={birthYear}
        onChangeText={setBirthYear}
      />
      <ButtonComponent title="Xác nhận" onPress={handlePress} />
    </View>
    
  );
};

export default HomeScreen;
