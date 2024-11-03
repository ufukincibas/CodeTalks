import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RoomButton from '../../Components/RoomButton';
import FloatingButton from '../../Components/FloatingButton';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../Utils/parseContentData';
import CreateRoomModal from '../../Components/Modal/CreateRoomModal';
import {useNavigation} from '@react-navigation/native';

import styles from "./Rooms.styles"

function Rooms() {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('Rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToogle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToogle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('Rooms/').push(contentObject);
  }

  const navigation = useNavigation();
  const goRoom = item => {
    navigation.navigate('CustomRoom', {roomName: item});
    // console.log('item', item);
  };
  const renderRoom = ({item}) => {
    return <RoomButton roomTitle={item} onPress={() => goRoom(item)} />;
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={contentList}
          renderItem={renderRoom}
          contentContainerStyle={styles.flatListContent}
        />
        <CreateRoomModal
          visible={inputModalVisible}
          onClose={handleInputToogle}
          onSend={handleSendContent}
        />
      </View>
      <View style={styles.floating}>
        <FloatingButton iconName="plus" onPress={handleInputToogle} />
      </View>
    </>
  );
};

export default Rooms;

