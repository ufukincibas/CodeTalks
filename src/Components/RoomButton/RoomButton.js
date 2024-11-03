import React from 'react';
import {Text,TouchableOpacity,View,} from 'react-native';
import {tr} from 'date-fns/locale';
import {formatDistance, parseISO} from 'date-fns';

import styles from "./RoomButton.styles";

function RoomButton({roomTitle, onPress}){
  const date = roomTitle.date;
  const username = roomTitle.username;
  // console.log('date', date);
  // console.log('username', username);
  const formattedDate = formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <TouchableOpacity style={styles.buton_container} onPress={onPress}>
      <View style={styles.title_contanier}>
        <Text style={styles.title}>{roomTitle.text}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{color: '#FFC83D', fontSize: 12}}>
          {username} oluşturdu
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoomButton;
