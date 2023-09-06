import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

//importing fucntions
import { storeData } from "../storage/localstorage";

export default function Setup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Taskmanager Setup</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          value={username}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(txt) => setUsername(txt)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(txt) => setPassword(txt)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="URL."
          value={url}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(txt) => setUrl(txt)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => storeData({ username, password, url })}
      >
        <Text style={styles.loginText}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.author}>Made by Enis Kastrati</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#f4f5f8",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    width: 200,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "#000000",
  },
  loginBtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3880ff",
    width: 90
  },
  loginText: {
    color: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 60,
    marginTop: -210,
    color: '#3880ff'
  },
  author: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: -300,
    marginTop: 250,
    color: 'black'
  }
});
