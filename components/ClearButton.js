import { View, Pressable, Text, StyleSheet } from 'react-native';

function ClearButton(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={props.onClear}
      >
        <Text style={styles.buttonText}>🗑️ Limpar Tudo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#c0392b',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: '#96281b',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ClearButton;
