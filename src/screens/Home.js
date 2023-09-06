import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  FlatList} from 'react-native';

export default function Home() {

  
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <Text>Hurraaa login is doneeeee!</Text>
      <StatusBar style="auto" />
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
