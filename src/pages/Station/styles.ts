import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90%',
    justifyContent: 'space-between',
  },
  nameContainer: {
    marginVertical: 30,
    paddingVertical: 40,
    paddingHorizontal: 80,
    borderWidth: 3,
    borderRadius: 25,
    opacity: 0.5,
    borderColor: 'black',
  },
  textName: {
    fontSize: 30,
    textAlign: 'center',
  },
  boton: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 2,
    marginRight: 15,
  },
  textBotton: {
    color: 'red',
  },
});

export default styles;
