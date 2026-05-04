import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Novo Objetivo</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Seu objetivo..."
          placeholderTextColor="#aaa"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonRow}>
          <Pressable
            style={({ pressed }) => [styles.button, styles.cancelButton, pressed && styles.pressed]}
            onPress={props.onCancel}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, styles.addButton, pressed && styles.pressed]}
            onPress={addGoalHandler}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#311b6b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 8,
    width: '100%',
    padding: 12,
    color: '#120438',
    fontSize: 16,
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 24,
  },
  cancelButton: {
    backgroundColor: '#9b59b6',
  },
  addButton: {
    backgroundColor: '#5e35b1',
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default GoalInput;
