import React from 'react';
import { Text, View } from 'react-native';
import { Callout as Call } from 'react-native-maps';
import { useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../@types/RoutesTypes';

import styles from './styles';

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
  const isDark: boolean = useTheme().dark;

  return (
    <Call
      tooltip={true}
      onPress={() =>
        navigation.navigate('Estacion', { name, id, colorSelector })
      }>
      <View style={styles.container}>
        <View
          style={{
            ...styles.bubble,
            backgroundColor: isDark ? 'black' : 'white',
          }}>
          <View style={styles.amount}>
            <View>
              <Text
                style={{ ...styles.text, color: !isDark ? 'black' : 'white' }}>
                {name}
              </Text>
              <View
                style={{
                  ...styles.circle,
                  backgroundColor: colorSelector,
                  borderColor: !isDark ? 'black' : 'white',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Call>
  );
};

export default Callout;
