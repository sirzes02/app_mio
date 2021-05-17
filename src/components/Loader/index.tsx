import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Container } from './styles';

const Loader: React.FC = () => {
  const { dark } = useTheme();

  return (
    <Container>
      <ActivityIndicator size={200} color={dark ? 'white' : 'black'} />
    </Container>
  );
};

export default Loader;
