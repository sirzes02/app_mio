import React from 'react';
import { TouchableHighlight, Text, Alert } from 'react-native';

import styles from './styles';

const CloseSesion: React.FC = () => {
  return (
    <TouchableHighlight
      style={styles.boton}
      onPress={() => Alert.alert('PRESS')}
      underlayColor="#f5baba">
      <Text style={styles.texto}>Salir</Text>
    </TouchableHighlight>
  );
};

export default CloseSesion;
