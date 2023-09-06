import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import React, {useState, useEffect} from 'react';
import Spinner from "react-native-loading-spinner-overlay/lib";
import { retrieveData } from './src/storage/localstorage';

//importing screens
import Setup from './src/screens/Setup';
import Home from './src/screens/Home';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mainRoute, setMainRoute] = useState('Home');

  useEffect(() => {
    getDataFromAysnc();
  }, [])

  function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
  
    return true;
  }

  const getDataFromAysnc = async () => {
    let data = await retrieveData();
    console.log("Getting data from Asnyc", data)
    if (isObjEmpty(data)) {
      setMainRoute('Setup')
    } else setMainRoute('Home')
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Spinner
          visible={loading}
          textContent={'Loading...'}
          cancelable={false}
          textStyle={styles.spinnerTextStyle}
        />
        {mainRoute == 'Home' ? <Home /> : <Setup />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
