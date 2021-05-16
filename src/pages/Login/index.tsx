import React, { useState } from 'react';
import { View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import Loader from '../../components/Loader';

import styles from './styles';

GoogleSignin.configure({
  webClientId:
    '118451873660-d18102sehdhroke95qpctt84tkaqlbq9.apps.googleusercontent.com',
});

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onGoogleButtonPress = async () => {
    setLoading(true);

    try {
      let idToken: string | null = (await GoogleSignin.signIn()).idToken;

      let googleCredential: FirebaseAuthTypes.AuthCredential = auth.GoogleAuthProvider.credential(
        idToken,
      );

      auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        disabled={loading}
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
      />
      {loading && (
        <View style={styles.loading}>
          <Loader />
        </View>
      )}
    </View>
  );
};

export default Login;
