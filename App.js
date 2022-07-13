/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, } from 'react-native';

import Router from './src/navigation/Router';

import HomeScreen from './src/screens/Home';

import Amplify, { a } from 'aws-amplify';
import config from './src/aws-exports';
import { Auth } from 'aws-amplify';
//Amplify.configure(config)
Auth.configure(config);

import { withAuthenticator } from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  console.log("response ====> "+ JSON.stringify(Auth.Credentials));
  //Auth.signOut();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
