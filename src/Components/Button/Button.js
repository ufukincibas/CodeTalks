import React from "react";
import { View , TouchableOpacity , Text} from "react-native";
import styles from "./Button.styles"

function Button({title , onPress , disabled = false , theme = "Primary"}){
    return(
        
        <TouchableOpacity 
        style={[styles[theme].button
          , disabled ? styles.buttonDisabled : null]} 
        onPress={onPress} 
        disabled={disabled} // Buton devre dışıysa basılamaz.
      >
        <Text style={styles[theme].buttonText}>{title}</Text> 
      </TouchableOpacity>
     
    )
}

export default Button;