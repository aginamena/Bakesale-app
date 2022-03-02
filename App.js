import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import Service from "./components/Service";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Current service"
          component={Service}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


