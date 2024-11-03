import { View,TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Button from '../../Button';

import styles from "./ContentInputModal.styles"

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');
  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
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
          <TextInput
            placeholder="Mesaj yaz..."
            onChangeText={setText}
            multiline
          />
        </View>
        <Button title="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;

