import {View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Input from '../../Input';
import Button from '../../Button';

import styles from "./CreateRoomModal.styles"

const CreateRoomModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');
  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText("");
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <Input
            placeholder="Oda İsmi giriniz"
            onChangeText={setText}
            multiline
          />
        </View>
        <Button title="Oluştur" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default CreateRoomModal;

