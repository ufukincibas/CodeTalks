import React from "react";
import { Text , View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import FlashMessage from "react-native-flash-message";
import Rooms from "./Pages/Rooms";


const Stack = createNativeStackNavigator();

function App(){
  return(
   <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="RoomsPage" component={Rooms}/>
      <Stack.Screen name="LoginPage" component={Login}/>
      <Stack.Screen name="SignUpPage" component={SignUp}/>
     
    </Stack.Navigator>
    <FlashMessage position="top" /> {/* FlashMessage'ı ekle */}
   </NavigationContainer>
  )
}

export default App;