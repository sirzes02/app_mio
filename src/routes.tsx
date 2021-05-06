import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './components/Header';
import CloseSesion from './components/CloseSesion';
import Map from './pages/Maps';
import Station from './pages/Station';
import { useState } from 'react';
import { ThemeName } from './data/MapStyle';

const Routes: React.FC = () => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mapa"
          component={() => <Map currentTheme={themeName} />}
          options={{
            headerStyle: {
              backgroundColor: themeName === 'dark' ? 'black' : 'white',
            },
            headerTitle: () => (
              <Header
                iconName="map"
                title="map"
                themeName={themeName}
                setThemeName={setThemeName}
              />
            ),
            headerRight: () => <CloseSesion />,
          }}
        />
        <Stack.Screen
          name="Estacion"
          component={Station}
          options={{
            headerStyle: {
              backgroundColor: themeName === 'dark' ? 'black' : 'white',
            },
            headerTitle: () => (
              <Header
                iconName="bus"
                title="Estacion"
                themeName={themeName}
                setThemeName={setThemeName}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
