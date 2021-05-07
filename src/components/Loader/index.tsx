import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';

const Loader: React.FC = () => {
  const { dark } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size={200} color={dark ? 'white' : 'black'} />
    </View>
  );
};

export default Loader;
