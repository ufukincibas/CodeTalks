import { StyleSheet , Dimensions} from "react-native";

const {width} = Dimensions.get('window');
export default StyleSheet.create({
    buton_container: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'col', // yatayda hizalama için
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: width * 0.42,
        width: width * 0.42,
        margin: 10,
        borderRadius: 10,
        borderColor: 'lightgray',
      },
      title_contanier: {
        flex: 6, // Eklendi
        justifyContent: 'center', // Metni yatayda hizalar
      },
      title: {
        color: 'orange',
        textAlign: 'center', // Metni merkezi hizalar
      },
})