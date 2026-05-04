import { View, Text, StyleSheet } from 'react-native';

function GoalCount(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Você tem <Text style={styles.number}>{props.quantidade}</Text>{' '}
        {props.quantidade === 1 ? 'objetivo cadastrado.' : 'objetivos cadastrados.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0ebff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    color: '#555',
  },
  number: {
    fontWeight: 'bold',
    color: '#311b6b',
    fontSize: 17,
  },
});

export default GoalCount;
