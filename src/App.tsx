import React from "react";
import { Text , View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import FlashMessage from "react-native-flash-message";
import Rooms from "./Pages/Rooms";
import CustomRoom from "./Pages/CustomRoom";


const Stack = createNativeStackNavigator();

function App(){
  return(
   <NavigationContainer>
    <Stack.Navigator>

     <Stack.Screen name="LoginPage" component={Login} options={{
      headerShown:false
     }} />
     <Stack.Screen name="SignUpPage" component={SignUp} options={{
      headerShown:false
     }}/>
      <Stack.Screen name="RoomsPage" component={Rooms}/>
     <Stack.Screen name ="CustomRoom" component={CustomRoom}  options={{
      headerShown:false
     }}/>
      
     
    </Stack.Navigator>
    <FlashMessage position="top" /> {/* FlashMessage'ı ekle */}
   </NavigationContainer>
  )
}

export default App;