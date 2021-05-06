import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { RootStackParamList } from '../../@types/RoutesTypes';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Estacion'>;
type Props = {
  route: ProfileScreenRouteProp;
};

const Station: React.FC<Props> = ({ route }) => {
  type stationScreenProps = StackNavigationProp<RootStackParamList, 'Estacion'>;
  const navigation = useNavigation<stationScreenProps>();

  return (
    <View>
      <Text>{route.params.name}</Text>
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <Text>Atras</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Station;
