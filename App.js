import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Alert, Button, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

import Home from "./components/Home";




export default function App() {
  return (
    <Home></Home>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
