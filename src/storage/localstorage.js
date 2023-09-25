import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Updates from 'expo-updates';

export async function storeData(value) {
  try {
    if(value){
        const jsonValue = JSON.stringify(value);
        console.log("Saving these data", jsonValue)
        await AsyncStorage.setItem("userCredentials", jsonValue);
        alert("Data saved, exit app and open it again!")
        Updates.reloadAsync()
    }else {
        alert("Please fill out the filds!");
    }
  } catch (error) {
    console.log("Error saving data!");
    alert("Error saving data!");
  }
}
 
export async function retrieveData() {
  try {
    const jsonValue = await AsyncStorage.getItem("userCredentials");
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log("Error saving data!");
    alert("Error saving data!");
  }
}

export const clearData = async () => {
    try {
        await AsyncStorage.removeItem('userCredentials')
    } catch (e) {
        console.log(e)
    }
}