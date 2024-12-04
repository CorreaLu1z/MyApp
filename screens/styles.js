import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontFamily: 'Arimo',
    color: '#068BFF',
  },
  title: {
    fontFamily: 'Arimo',
    color: '#068BFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Arimo',
    color: '#068BFF',
    fontSize: 16,
    marginLeft: 10,
  },
});
