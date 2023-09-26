import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import React, {useState, useEffect} from 'react';
import Spinner from "react-native-loading-spinner-overlay/lib";
import { retrieveData } from './src/storage/localstorage';

//importing screens
import Setup from './src/screens/Setup';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mainRoute, setMainRoute] = useState('');

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
      setMainRoute("Setup")
    } else setMainRoute("Home")
    console.log(mainRoute)
    setLoading(false);
  }

  return (
    <NavigationContainer>
        <Spinner
            visible={loading}
            textContent={'Loading...'}
            cancelable={false}
            textStyle={styles.spinnerTextStyle}
          />
          {mainRoute.length > 0 && 
            <Stack.Navigator initialRouteName={mainRoute}>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
              <Stack.Screen name="Setup" component={Setup} options={{ headerShown: false }}/>
            </Stack.Navigator>
          }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E21',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
