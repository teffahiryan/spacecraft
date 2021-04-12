import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';


export default function App() {

  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
        Welcome to STARPORT
      </Text>

      <TextInput style={styles.input} label="Email" value={text} onChangeText={text => setText(text)} />
      <TextInput style={styles.input} label="Password" value={password} secureTextEntry={true} onChangeText={password=> setPassword(password)} />
      <Button style={styles.input} mode="contained" onPress={() => console.log('Pressed')}      >
          Login
      </Button>

      <Text style={styles.condition}>
        Read conditions and Tearms
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 0,
    marginBottom: 25,
    padding: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#6703ef',
  },
  condition: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightgray',
  },
  input: {
    mode: 'flat',
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  }
});
