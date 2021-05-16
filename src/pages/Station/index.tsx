import React from 'react';
import { RouteProp, useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert, Text, TouchableHighlight, View } from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { RootStackParamList } from '../../@types/RoutesTypes';

import styles from './styles';
import { useState } from 'react';

type Props = {
  route: RouteProp<RootStackParamList, 'Estacion'>;
};

const Station: React.FC<Props> = ({ route }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { id, name, colorSelector } = route.params;
  const isDark: boolean = useTheme().dark;
  const navigation = useNavigation<
    StackNavigationProp<RootStackParamList, 'Estacion'>
  >();

  async function getData(): Promise<number> {
    const votes: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData> = await firestore()
      .collection('estaciones')
      .doc(id.toString())
      .get();

    return votes.data()!.votes;
  }

  const sendData = async () => {
    setLoading(true);

    await getData().then(
      async res =>
        await firestore()
          .collection('estaciones')
          .doc(id.toString())
          .update({
            votes: res + 1,
          })
          .then(() => navigation.goBack()),
    );
  };

  const handlePress = () => {
    Alert.alert(
      '¿Desea reportar congestión?',
      'Se almacenará su petición y será mostrada a los otros usuarios',
      [
        {
          text: 'Si',
          onPress: sendData,
        },
        {
          text: 'No',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colorSelector,
          ...styles.nameContainer,
        }}>
        <Text style={{ ...styles.textName, color: isDark ? 'white' : 'black' }}>
          {name}
        </Text>
      </View>
      <TouchableHighlight
        disabled={loading}
        style={styles.boton}
        underlayColor="#f5baba"
        onPress={handlePress}>
        <Text style={styles.textBotton}>Reportar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Station;
