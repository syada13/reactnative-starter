import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = () => {
    const myName = 'My name is Suresh'

    return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style ={styles.subHeaderStyle}>{myName}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: 'blue'
  },
  subHeaderStyle: {
    fontSize: 20,
    color: 'red'
  }
});


export default ComponentsScreen;