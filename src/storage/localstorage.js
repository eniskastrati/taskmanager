import { AsyncStorage } from "react-native";

export async function storeData(value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userCredentials", jsonValue);
  } catch (error) {
    console.log("Error saving data!");
    alert("Error saving data!");
  }
}
 
export async function retrieveData() {
  try {
    const jsonValue = await AsyncStorage.getItem("userCredentials");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log("Error saving data!");
    alert("Error saving data!");
  }
}
