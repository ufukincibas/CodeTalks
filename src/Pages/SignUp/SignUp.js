import React from "react";
import {  Text , View } from "react-native";

import { Formik } from "formik"
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";


import Input from "../../Components/Input";
import Button from "../../Components/Button";

import styles from "./SignUp.styles"
import authErrorMessageParser from "../../Utils/authErrorMessageParser";

const initialFormValues = {
    userMail : "" ,
    userPassword : "",
    rePassword : "",
}

function SignUp({navigation}){
    function handleLogin(){
        return(
            navigation.navigate("LoginPage")
        )
    }

async function handleFormSubmit(formValues) {
    
  
    if (formValues.userPassword !== formValues.rePassword) {
        showMessage({
            message: "Şifreler Aynı değil",
            description: "Lütfen Şifreleri Kontrol ediniz",
            type: "danger",
          })
        return;
    }

    try {
        await auth().createUserWithEmailAndPassword(formValues.userMail , formValues.userPassword)
        navigation.navigate("LoginPage")
         showMessage({
             message: "kullanıcı oluşturuldu",    
             type: "success",
            
           });
           

     } catch (error) {
         showMessage ({
             message: authErrorMessageParser(error.code) , 
             type : "danger"
         })
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
           <Input
           onChangeText={handleChange("rePassword")}
           value={values.rePassword} 
           placeholder="Şifrenizi Tekrar Giriniz..."
           secureTextEntry
           />
           <Button title="Kayıt ol" onPress={handleSubmit}/>
           </>
           )}
           </Formik>

           <Button title="Geri" theme="Secondary" onPress={handleLogin}/>
           </View>
        </View>
    )
}

export default SignUp;