import { View, Text, StyleSheet } from 'react-native';

function Header(props) {
  return (
    <View style={[styles.headerContainer, { backgroundColor: props.corFundo }]}>
      <Text style={styles.headerText}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Header;
