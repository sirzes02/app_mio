import React, { useState } from 'react';
import { RouteProp, useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { RootStackParamList } from '../../@types/RoutesTypes';

import {
  Container,
  NameContainer,
  TextName,
  Boton,
  TextButton,
} from './styles';

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
    <Container>
      <NameContainer color={colorSelector}>
        <TextName isDark={isDark}>{name}</TextName>
      </NameContainer>
      <Boton disabled={loading} underlayColor="#f5baba" onPress={handlePress}>
        <TextButton>Reportar</TextButton>
      </Boton>
    </Container>
  );
};

export default Station;
