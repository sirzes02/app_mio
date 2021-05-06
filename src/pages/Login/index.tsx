import React from 'react';
import { View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '118451873660-d18102sehdhroke95qpctt84tkaqlbq9.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

const Login: React.FC = () => {
  return (
    <View>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onGoogleButtonPress()}
      />
    </View>
  );
};

export default Login;
