import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: '#132743',
    },
    text: {
      fontSize: 23,
      textAlign: 'center',

      color: '#fff',
    },
  });
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
