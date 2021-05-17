import React from 'react';
import { Callout as Call } from 'react-native-maps';
import { useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../@types/RoutesTypes';

import { Container, Bubble, Amount, Text, Circle } from './styles';

interface Props {
  name: string;
  id: number;
  votes: number;
}

const Callout: React.FC<Props> = ({ name, id, votes }) => {
  const colorSelector: 'green' | 'yellow' | 'red' =
    votes <= 10 ? 'green' : votes <= 20 ? 'yellow' : 'red';

  type mapScreenProp = StackNavigationProp<RootStackParamList, 'Mapa'>;
  const navigation = useNavigation<mapScreenProp>();
  const { dark } = useTheme();

  return (
    <Call
      tooltip={true}
      onPress={() =>
        navigation.navigate('Estacion', { name, id, colorSelector })
      }>
      <Container>
        <Bubble dark={dark}>
          <Amount>
            <Text dark={dark}>{name}</Text>
            <Circle color={colorSelector} dark={dark} />
          </Amount>
        </Bubble>
      </Container>
    </Call>
  );
};

export default Callout;
