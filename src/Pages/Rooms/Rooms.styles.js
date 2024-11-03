import { StyleSheet } from "react-native";


export default StyleSheet.create ({
    container: {
        flex: 5,
        margin: 10,
      },
      flatListContent: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Sığmayanları aşağı kaydır
        justifyContent: 'flex-start',
      },
      floating: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
   
})