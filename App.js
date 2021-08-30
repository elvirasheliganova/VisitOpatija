/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';


import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  
} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
import Post from './src/components/Post';
import HomeScreen from './src/screens/HomeScreen';

import Router from './src/navigation/Router';
import feed from './assets/data/feed'
import SearchResultScreen from './src/screens/SearchResultScreen';
import { withAuthenticator } from 'aws-amplify-react-native';



const App = () => {
 

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Router />
    
   
   
   
    </>
  );
};



export default withAuthenticator(App);
