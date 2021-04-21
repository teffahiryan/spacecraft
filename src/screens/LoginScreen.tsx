import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/core";

import { Card } from "react-native-paper";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { AppRoute } from "../navigation/AppRoute";

export default function App() {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = "ryan";
  const mdp = "oui1234";

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(AppRoute.TERMS_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome to STARPORT</Text>

      <TextInput
        style={styles.input}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        style={styles.input}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>

      <Button style={styles.condition} onPress={() => handlePress()}>
        Read conditions and Tearms
      </Button>
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
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "#6703ef",
  },
  condition: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "lightgray",
  },
  input: {
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  },
});
