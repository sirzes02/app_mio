import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { ThemeName } from '../../data/MapStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@react-navigation/native';

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
  const { colors } = useTheme();

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <View style={styles.headerContainer}>
      <Icon
        style={{ color: colors.text }}
        name={iconName}
        size={23}
        light
        onPress={toggleTheme}
      />
      <Text
        style={{
          ...styles.titleStyle,
          color: colors.text,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default components;
