import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import Service from "./components/Service";
import SearchedService from "./components/SearchedService";
// import * as Font from 'expo-font';

export default function App() {
  const Stack = createNativeStackNavigator();
  // const [fontLoaded, setFontLoaded] = useState(false);
  // useEffect(
  //   () => {
  //     const getFont = async () => {
  //       await Font.loadAsync({
  //         "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //         "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  //       });
  //       setFontLoaded(true);
  //     }
  //     getFont();
  //   }
  //   , [fontLoaded])

  // if (fontLoaded) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           name="Home"
  //           component={Home}
  //         />
  //         <Stack.Screen
  //           name="Current service"
  //           component={Service}
  //         />
  //         <Stack.Screen
  //           name="searched"
  //           component={SearchedService}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // } else {
  //   return (
  //     <View><Text>Loading...</Text></View>
  //   )
  // }
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
        <Stack.Screen
          name="searched"
          component={SearchedService}
          options={({ route }) => ({ title: route.params.searchTerm })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


