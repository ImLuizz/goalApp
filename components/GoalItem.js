import { View, Text, Pressable, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable
        style={({ pressed }) => [styles.deleteBtn, pressed && styles.pressed]}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.deleteText}>✕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#5e35b1',
    elevation: 2,
  },
  goalText: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
  deleteBtn: {
    backgroundColor: '#311b6b',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  pressed: {
    opacity: 0.6,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GoalItem;
