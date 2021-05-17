import React from 'react';
import { ThemeName } from '../../data/MapStyle';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SyncStorage from '@react-native-community/async-storage';

import { Container, Title } from './styles';

interface Props {
  iconName: string;
  title: string;
  themeName: string;
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
    SyncStorage.setItem('dark', themeName === 'light' ? 'dark' : '');
  }

  return (
    <Container>
      <Icon
        style={{ color: colors.text }}
        name={iconName}
        size={23}
        light
        onPress={toggleTheme}
      />
      <Title color={colors.text}>{title}</Title>
    </Container>
  );
};

export default components;
