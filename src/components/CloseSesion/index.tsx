import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { TouchableHighlight, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './styles';

const CloseSesion: React.FC = () => {
  const logOut = async () =>
    Alert.alert('Cerrar Sesión', '¿Estas seguro que deseas cerrar sesión?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Cerrar Sesión',
        onPress: async () => {
          await GoogleSignin.signOut();
          await auth().signOut();
        },
      },
    ]);

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
