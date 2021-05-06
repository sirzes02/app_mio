import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeName } from './data/MapStyle';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import Login from './pages/Login';
import Header from './components/Header';
import Map from './pages/Maps';
import CloseSesion from './components/CloseSesion';
import Station from './pages/Station';

const Routes: React.FC = () => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const Stack = createStackNavigator();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: themeName === 'dark' ? 'black' : 'white',
              },
              headerTitle: () => (
                <Header
                  iconName="user"
                  title="Inicio de Sesión"
                  themeName={themeName}
                  setThemeName={setThemeName}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mapa"
          options={{
            headerStyle: {
              backgroundColor: themeName === 'dark' ? 'black' : 'white',
            },
            headerTitle: () => (
              <Header
                iconName="map"
                title="Mapa"
                themeName={themeName}
                setThemeName={setThemeName}
              />
            ),
            headerRight: () => <CloseSesion />,
          }}>
          {props => <Map {...props} currentTheme={themeName} />}
        </Stack.Screen>
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
                title="Estación"
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
