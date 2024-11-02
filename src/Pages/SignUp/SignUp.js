import React from "react";
import { Button, Text , View } from "react-native";


function SignUp({navigation}){
    function switchPage(){
        return(
            navigation.navigate("LoginPage")
        )
    }
    return(
        <View>
            <Text>SignUp Page!</Text>
            <Button title= "switchPage" onPress={switchPage}/>
        </View>
    )
}

export default SignUp;