import React, { useEffect, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  PermissionStatus,
  BackHandler,
} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SyncStorage from '@react-native-community/async-storage';

import Login from './pages/Login';
import Header from './components/Header';
import Map from './pages/Maps';
import CloseSesion from './components/CloseSesion';
import Station from './pages/Station';
import Loader from './components/Loader';

const Routes: React.FC = () => {
  const [themeName, setThemeName] = useState<string>('light');
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const Stack = createStackNavigator();

  const getStorage = async () => {
    const themeStorage: string = (await SyncStorage.getItem('dark')) ?? 'light';
    setThemeName(themeStorage);
  };

  useEffect(() => {
    checkPermissions();
    getStorage();

    const subscriber: () => void = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return subscriber;
  }, []);

  const checkPermissions = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Mio APP Camera Permission',
        message: 'Mio App needs access to your location so you can check.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    ).then((res: PermissionStatus) => {
      if (res !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permissions Denied');
        BackHandler.exitApp();
      }
    });
  };

  return (
    <>
      {initializing ? (
        <Loader />
      ) : (
        <NavigationContainer
          theme={themeName === 'dark' ? DarkTheme : DefaultTheme}>
          {!user ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
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
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Mapa"
                component={Map}
                options={{
                  headerTitle: () => (
                    <Header
                      iconName="map"
                      title="Mapa"
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
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default Routes;
