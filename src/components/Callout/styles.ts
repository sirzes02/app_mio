import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  bubble: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
  },
  amount: {
    display: 'flex',
  },
  text: {
    paddingBottom: 5,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
  },
});

export default styles;
