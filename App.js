import {enableScreens} from 'react-native-screens';

enableScreens();

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import InstaNavigator from './navigation/RootNavigation';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return <InstaNavigator />;
  // return <HomeScreen />;
};

export default App;
