import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Callout as Call } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/RoutesTypes';
import firestore from '@react-native-firebase/firestore';

interface Props {
  name: string;
  id: number;
}

const arrColor: string[] = ['green', 'red', 'yellow'];

const Callout: React.FC<Props> = ({ name, id }) => {
  const [colorSelector, setColorSelector] = useState<number>(0);

  type mapScreenProp = StackNavigationProp<RootStackParamList, 'Mapa'>;
  const navigation = useNavigation<mapScreenProp>();

  const fetchData = async () => {
    const stationsDocuments = await firestore()
      .collection('estaciones')
      .where('id', '==', id)
      .get();

    console.log(stationsDocuments);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Call
      tooltip={true}
      onPress={() => navigation.navigate('Estacion', { name, id })}>
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View style={styles.amount}>
            <View>
              <Text style={styles.text}>{name}</Text>
              <View style={styles.circle} />
            </View>
          </View>
        </View>
      </View>
    </Call>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  bubble: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
  },
  amount: {
    display: 'flex',
  },
  text: {
    paddingBottom: 5,
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: 'blue',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
  },
});

export default Callout;
