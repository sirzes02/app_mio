import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './components/Header';
import CloseSesion from './components/CloseSesion';
import Map from './pages/Maps';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mapa"
          component={Map}
          options={{
            headerTitle: () => <Header iconName="map" title="map" />,
            headerRight: () => <CloseSesion />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
