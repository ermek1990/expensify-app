import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithRedirect(googleAuthProvider).catch((e) => {
      console.log(e);
    });
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
