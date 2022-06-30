import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';


const TextScreen = () => {

    const [name,SetName] = useState('');

    return <View>
        <Text>Enter Name:</Text>
        <TextInput 
          style = {styles.input}
          autoCapitalize= "none"
          autoCorrect={false}
          value={name}
          onChangeText={(newValue) => {
            SetName(newValue);
          }
        }
        />
        {name.length < 4 ? <Text>Name must be atleast 4 characters</Text>: <Text>My name is : {name}</Text>}

    </View>

};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;