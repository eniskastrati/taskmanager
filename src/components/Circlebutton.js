import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ onPress, text }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress && onPress}>
        <MaterialIcons name={text} size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 60,
    borderWidth: 2.5,
    borderColor: '#3880ff',
    borderRadius: 42,
    padding: 3,
    margin: 10,
    shadowColor: "#3880ff",
    shadowOffset: {
      width: -1,
      height: -10
    },
    shadowOpacity: 0.55,
    shadowRadius: 15,
    elevation: 10000
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#F2F2F2',
  },
});
