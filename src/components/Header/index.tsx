import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

interface Props {
  iconName: string;
  title: string;
}

const components: React.FC<Props> = ({ iconName, title }) => {
  return (
    <View style={styles.headerContainer}>
      <Icon name={iconName} size={23} light />
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default components;
