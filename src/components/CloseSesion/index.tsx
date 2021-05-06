import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { TouchableHighlight, Text, Alert } from 'react-native';

import styles from './styles';

const CloseSesion: React.FC = () => {
  const logOut = async () => {
    await GoogleSignin.signOut();
    await auth().signOut();
  };

  return (
    <TouchableHighlight
      style={styles.boton}
      onPress={logOut}
      underlayColor="#f5baba">
      <Text style={styles.texto}>Salir</Text>
    </TouchableHighlight>
  );
};

export default CloseSesion;
