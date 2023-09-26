import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Login/LoginScreen';
import {TabNavigator} from './TabNav';
import CONSTANT from '../Constants/Constant';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={CONSTANT.LOGINSCREEN} component={LoginScreen} />
        <Stack.Screen name={CONSTANT.TABNAVIGATOR} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
