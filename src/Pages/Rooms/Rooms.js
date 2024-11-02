import React from "react";
import { Text , View } from "react-native";

import styles from "./Rooms.styles"
import FloatingButton from "../../Components/FloatingButton";

function Rooms(){
    return(
        <View style={styles.container}>
    <FloatingButton iconName='plus' />
        </View>
    )
}

export default Rooms;