import { Text, View} from 'react-native';
import React from 'react';
import {tr} from 'date-fns/locale';
import {formatDistance, parseISO} from 'date-fns';

import styles from "./RoomTalksCard.styles"


function RoomTalksCard({item}) {

  const formattedDate = formatDistance(parseISO(item.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text>{item.username}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <View style={styles.footer_container}>
        <Text style={{color: 'black', fontWeight: '600'}}>{item.text}</Text>
      </View>
    </View>
  );
};

export default RoomTalksCard;
