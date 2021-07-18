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

const post1 = feed[0]
const post2 = feed[1]

const App = () => {
 

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <SearchResultScreen />
    </SafeAreaView>
    
   
   
   
    </>
  );
};



export default App;
