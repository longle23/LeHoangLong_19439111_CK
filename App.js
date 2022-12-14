import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Screen_01 from './src/screens/Screen_01';
import Screen_02 from './src/screens/Screen_02';
import Screen_03 from './src/screens/Screen_03';



export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_01" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen_01" component={Screen_01} />

        <Stack.Screen name="Screen_02" component={Screen_02} />

        <Stack.Screen name="Screen_03" component={Screen_03} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

// export default () => {
//   return (
//     <Provider>
//       <App />
//     </Provider>
//   );
// };

const styles = StyleSheet.create({

});
