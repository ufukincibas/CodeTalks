import React from "react";
import { Text , View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

const Stack = createNativeStackNavigator();

function App(){
  return(
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignUpPage" component={SignUp}/>
      <Stack.Screen name="LoginPage" component={Login}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;