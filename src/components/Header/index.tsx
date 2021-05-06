import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeName } from '../../data/MapStyle';

import styles from './styles';

interface Props {
  iconName: string;
  title: string;
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const components: React.FC<Props> = ({
  iconName,
  title,
  themeName,
  setThemeName,
}) => {
  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <View style={styles.headerContainer}>
      <Icon
        style={
          themeName === 'light' ? styles.iconStyleLight : styles.iconStyleDark
        }
        name={iconName}
        size={23}
        light
        onPress={toggleTheme}
      />
      <Text
        style={
          themeName === 'light' ? styles.titleStyleLight : styles.titleStyleDark
        }>
        {title}
      </Text>
    </View>
  );
};

export default components;
