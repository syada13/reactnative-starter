import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';


const BoxScreen = () => {
    return (
     <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #1</Text>
     </View>

    );   
};


const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection:'row',
        height: 100,
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red'
    }
});

export default BoxScreen;