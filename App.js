import React, {useState, useEffect} from 'react';
import { retrieveData } from './src/storage/localstorage';

//importing screens
import Setup from './src/screens/Setup';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
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
      setMainRoute('Setup')
    } else { setMainRoute('Home') }
  }

  return (
    <NavigationContainer> 
          <Stack.Navigator initialRouteName={mainRoute}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Setup" component={Setup} options={{ headerShown: false }}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}
