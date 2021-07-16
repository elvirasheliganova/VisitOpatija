/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  
} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';



import HomeScreen from './src/screens/HomeScreen';


const App = () => {
 

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView >
   <DestinationSearchScreen />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
  
});

export default App;
