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

export default function Setup({navigation}) {
  const [apikey, setapikey] = useState("");
  const [url, setUrl] = useState("")

  const setupApp = () => {
    if(apikey.length > 1 && url.length > 1){
        storeData({ 
            "api-key": apikey,
            "url" : url
        })
        navigation.navigate('Home')
    }else{
        alert("Please fill out the fileds abow!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Taskmanager Setup</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="URL"
          value={url}
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={(txt) => setUrl(txt)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Api-key"
          value={apikey}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(txt) => setapikey(txt)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => setupApp()}
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
    backgroundColor: "#1E1E21",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#F2F2F2",
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
    fontSize: 27,
    fontWeight: '900',
    margin: 60,
    marginTop: -210,
    color: '#3880ff'
  },
  author: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: -380,
    marginTop: 350,
    color: 'black'
  }
});
