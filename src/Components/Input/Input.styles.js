import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        marginBottom: 16,
    } ,

    Input:{
        height: 48, // Input yüksekliği.
        borderBottomWidth: 1, // Çevresinde kenar çizgisi.
        borderColor: "white", // Kenar çizgisi rengi gri.
        borderRadius: 8, // Köşeleri yuvarlak yapar.
        paddingHorizontal: 12, // İç yatay boşluk.
        fontSize: 16, // Input metni boyutu.
        color: "#333", // Kullanıcının girdiği metnin rengi.
    },
})