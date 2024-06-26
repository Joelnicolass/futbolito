import {GoogleSignin} from '@react-native-google-signin/google-signin';

export class GoogleServices {
  async loginWithGoogle() {
    try {
      GoogleSignin.configure({
        webClientId:
          '934319530358-g87rbkk0ffb4l32sfv6m1a5jut9gbpm2.apps.googleusercontent.com',
        iosClientId:
          '934319530358-gg7b8u22ug21phnuh6mte7gughtgv1ec.apps.googleusercontent.com',
        scopes: ['openid', 'profile', 'email'],
      });

      const {idToken, user} = await GoogleSignin.signIn();
      console.log('idToken: ', idToken);

      return idToken;
    } catch (error) {
      console.log(error);
    }
  }

  async logoutWithGoogle() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
