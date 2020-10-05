import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItemInput = ({addListItem}) => {
  const [text, setText] = useState('');

  const handleChange = (text) => setText(text);

  const handleAddItem = () => {
    addListItem(text);
    setText('');
  };

  const styles = StyleSheet.create({
    addItemInput: {
      height: 60,
      margin: 5,
      padding: 8,
      fontSize: 16,
    },
    addBtn: {
      backgroundColor: '#ea95a8',
      padding: 9,
      margin: 5,
      borderRadius: 3,
    },
    addBtnText: {
      fontSize: 20,
      color: '#d7385e',
      textAlign: 'center',
    },
  });
  return (
    <View>
      <TextInput
        style={styles.addItemInput}
        placeholder="Add Item"
        autoFocus={true}
        onChangeText={handleChange}
        value={text}
      />
      <TouchableOpacity style={styles.addBtn} onPress={handleAddItem}>
        <Text style={styles.addBtnText}>
          <Icon name="plus" color="#d7385e" size={20} /> Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemInput;
