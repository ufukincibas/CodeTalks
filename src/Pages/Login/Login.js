import React, { useState } from "react";
import {  Text , View } from "react-native";

import { Formik } from "formik"
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";


import Input from "../../Components/Input";
import Button from "../../Components/Button";

import styles from "./Login.styles"

import authErrorMessageParser from "../../Utils/authErrorMessageParser";

const initialFormValues = {
    userMail : "" ,
    userPassword : "",
}

function Login({navigation}){
    const [loading , setLoading] = useState(false)

    function handleSignUp(){
        return(
            navigation.navigate("SignUpPage")
        )
    }

async function handleFormSubmit(formValues) {
    
    try {
        setLoading(true);
        await auth().signInWithEmailAndPassword(formValues.userMail , formValues.userPassword)
        navigation.navigate("RoomsPage")
        setLoading(false)
        
    } 
    catch (error) {
        console.log("Hata:", error); // Hata bilgisini konsola yazdır
        showMessage({
            message: authErrorMessageParser(error.code), 
            type: "danger",
        });
    } finally {
        setLoading(false); // Yükleme durumunu her durumda kapat
    }


}
    return(
        <View style={styles.container}>

            <View style={styles.header}>
           <Text style={styles.title}>CodeTalks</Text>
           </View>
           <View style={styles.body}>
           <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}> 
           { ({values , handleChange , handleSubmit}) => (
            <>
           
           
           <Input
           onChangeText={handleChange("userMail")} 
           value={values.userMail}
           placeholder="E-Postanızı giriniz..." />

           <Input 
           onChangeText={handleChange("userPassword")}
           value={values.userPassword}
           placeholder="Şifrenizi giriniz..." 
           secureTextEntry
           />
           
           <Button title="Giriş Yap" onPress={handleSubmit} loading={loading}/>
           </>
           )}
           </Formik>

           <Button title="Kayıt ol" theme="Secondary" onPress={handleSignUp}/>
           </View>
        </View>
    )
}

export default Login;