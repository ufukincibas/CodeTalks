import React from "react";
import {  Text , View } from "react-native";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import styles from "./SignUp.styles"



function SignUp({navigation}){
    function switchPage(){
        return(
            navigation.navigate("LoginPage")
        )
    }
    return(
        <View style={styles.container}>

            <View style={styles.header}>
           <Text style={styles.title}>CodeTalks</Text>
           </View>
           
            <View style={styles.body}>
           <Input placeholder="E-Postanızı giriniz..." />

           <Input placeholder="Şifrenizi giriniz..." 
           secureTextEntry
           />
           <Input placeholder="Şifrenizi Tekrar Giriniz..."
           secureTextEntry
           />
           <Button title="Kayıt ol"/>
           <Button title="Geri" theme="Secondary"/>
           </View>
        </View>
    )
}

export default SignUp;