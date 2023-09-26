import React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import Main from './src/Navigation/Main';
import {NavigationContainer} from '@react-navigation/native';

import Dashbord from './src/Screens/Login/Dashbord';

const App = () => {
  return (
    <View style={{flex:1}}>
 <Main/>
    </View>
  );
};
export default App;
