import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatingButton from '../../Components/FloatingButton';
import RoomTalksCard from '../../Components/RoomTalksCard';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';
import parseContentData from '../../Utils/parseContentData';
import ContentInputModal from '../../Components/Modal/ContentInputModal';

import styles from "./CustomRoom.styles";

const CustomRoom = props => {
  const [customRoomData, setCustomRoomData] = useState(
    props.route.params.roomName,
  );

  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList2, setContentList2] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${customRoomData.id}/${customRoomData.text}/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        parsedData = parseContentData(contentData || {});
        setContentList2(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }
  // console.log(customOdaData.text);
  function sendContent(content) {
    const userMail = auth().currentUser.email; // Kullanıcının login olup olmadığını kontrol eder
    const contentObject = {
      // Firebaseye kayıt edilirken olan obje
      text: content,
      username: userMail.split('@')[0], // mail adresinden @ işareti olan yere kadar olan kısmı alır
      date: new Date().toISOString(),
    };
    database()
      .ref(`rooms/${customRoomData.id}/${customRoomData.text}/`)
      .push(contentObject);
  }

  const renderContent = ({item}) => {
    return <RoomTalksCard item={item} />;
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>
            {customRoomData.text} odası kuruldu!
          </Text>
        </View>
        <FlatList data={contentList2} renderItem={renderContent} />
      </View>

      <FloatingButton iconName="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle} // burada onClose ile aslında burada bir fonksiyon oluşturup yukarıda, o fonksiyonu contentInputModal da çağırıyoruz true ve false yolluyoruz
        onSend={handleSendContent} // ContentInputModal ile iletişime bak
      />
    </>
  );
};

export default CustomRoom;

