import React from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "./Button.styles";

function Button({ title, onPress, loading = false, disabled = false, theme = "Primary" }) {
  return (
    <TouchableOpacity 
      style={[styles[theme].button, disabled ? styles.buttonDisabled : null]} 
      onPress={onPress} 
      disabled={disabled || loading} // Buton devre dışıysa ve yükleme varsa basılamaz
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" /> // Yükleme simgesi
      ) : (
        <Text style={styles[theme].buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
