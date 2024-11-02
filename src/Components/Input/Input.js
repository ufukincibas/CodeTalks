import React from "react";
import { TextInput, View } from "react-native";
import styles from "./Input.styles";

function Input({placeholder , value , onChangeText , secureTextEntry}){
    return(
    <View style={styles.container}>

        <TextInput 
        style={styles.Input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="white"/>
    </View>
)
}

export default Input;