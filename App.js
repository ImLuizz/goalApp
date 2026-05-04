import { useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';

import Header from './components/Header';
import GoalCount from './components/GoalCount';
import ClearButton from './components/ClearButton';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  // Passo 3: Função para limpar todos os objetivos
  function clearAllHandler() {
    setCourseGoals([]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Passo 1: Cabeçalho com prop titulo (String) e corFundo (String) */}
      <Header titulo="Meus Objetivos de 2026" corFundo="#311b6b" />

      {/* Passo 2: Contador com prop quantidade (Número) */}
      <GoalCount quantidade={courseGoals.length} />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum objetivo ainda. Adicione um! 🚀</Text>
          }
        />
      </View>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [styles.addButton, pressed && styles.pressed]}
          onPress={startAddGoalHandler}
        >
          <Text style={styles.addButtonText}>+ Adicionar Objetivo</Text>
        </Pressable>

        {/* Desafio Extra: ClearButton só aparece se houver pelo menos 1 objetivo */}
        {courseGoals.length > 0 && (
          <ClearButton onClear={clearAllHandler} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f8f4ff',
  },
  goalsContainer: {
    flex: 1,
    paddingTop: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#aaa',
    fontSize: 15,
  },
  footer: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#311b6b',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 24,
    marginTop: 8,
    elevation: 3,
  },
  pressed: {
    opacity: 0.75,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
