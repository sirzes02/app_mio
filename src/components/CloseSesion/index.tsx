import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Button, Text } from './styles';

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
    <Button onPress={logOut} underlayColor="#f5baba">
      <Text>Salir</Text>
    </Button>
  );
};

export default CloseSesion;
