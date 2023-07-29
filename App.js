// App.js
import React , { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import các thành phần khác (Drawer, BottomTabs, v.v.) nếu bạn sử dụng chúng
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


