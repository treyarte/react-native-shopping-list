import React, {useState, useMemo} from 'react';
import {v4 as uuid} from 'uuid';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItemInput from './components/AddItemInput';

const App = () => {
  const INITIAL_STATE = {
    [uuid()]: {
      text: 'milk',
    },
    [uuid()]: {
      text: 'eggs',
    },
    [uuid()]: {
      text: 'bread',
    },
    [uuid()]: {
      text: 'juice',
    },
  };
  const [items, setItems] = useState(INITIAL_STATE);

  const addListItem = (text) => {
    !text
      ? Alert.alert('Invalid Input', 'Please enter an item')
      : setItems({...items, [uuid()]: {text}});
  };

  const deleteListItem = (id) => {
    const copyItems = items;

    delete copyItems[id];
    setItems({...copyItems});
  };

  const listItems = useMemo(() =>
    Object.entries(items).map(([key, val]) => ({id: key, ...val})),
  );

  console.log(listItems);
  const renderItem = ({item}) => (
    <ListItem item={item} deleteListItem={deleteListItem} />
  );

  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#f8efd4'},
  });
  return (
    <View style={styles.container}>
      <Header title="My Shopping List" />
      <AddItemInput addListItem={addListItem} />
      <FlatList data={listItems} renderItem={renderItem} />
    </View>
  );
};

export default App;
