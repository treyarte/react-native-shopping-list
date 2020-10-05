import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteListItem}) => {
  const styles = StyleSheet.create({
    listItem: {
      backgroundColor: '#edc988',
      marginBottom: 1,
      padding: 15,
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemText: {
      fontSize: 18,
    },
  });

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={25}
          color="#d7385e"
          onPress={() => deleteListItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
