import React from 'react';
import { Text, View } from 'react-native';
import { Callout as Call } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/RoutesTypes';
import styles from './styles';

interface Props {
  name: string;
  id: number;
  votes: number;
}

const arrColor: string[] = ['green', 'red', 'yellow'];

const Callout: React.FC<Props> = ({ name, id, votes }) => {
  const val: number = votes <= 10 ? 0 : votes <= 20 ? 1 : 2;

  const colorSelector: string = arrColor[val];

  type mapScreenProp = StackNavigationProp<RootStackParamList, 'Mapa'>;
  const navigation = useNavigation<mapScreenProp>();

  return (
    <Call
      tooltip={true}
      onPress={() => navigation.navigate('Estacion', { name, id })}>
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View style={styles.amount}>
            <View>
              <Text style={styles.text}>{name}</Text>
              <View
                style={{ ...styles.circle, backgroundColor: colorSelector }}
              />
            </View>
          </View>
        </View>
      </View>
    </Call>
  );
};

export default Callout;
