import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from './TabBarIcon';
import IMAGES from '../Constants/ImagesName';
import {StyleSheet, Text} from 'react-native';
import Home from '../Screens/Home/Home';
import Feed from '../Screens/Feed/Feed';
import Referrals from '../Screens/Referrals/Referrals';
import Wallet from '../Screens/Wallet/Wallet';
import Profile from '../Screens/Profile/Profile';
import CONSTANT from '../Constants/Constant';

const Tab = createBottomTabNavigator();
const CustomTabLabel = ({label, focused}) => {
  
  const fontSize = 10; 
  const color = focused ? CONSTANT.RGB104_141_233 : CONSTANT.RGB114_114_114; 

  return <Text style={{fontSize, color}}>{label}</Text>;
};
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBar,
      }}>
      <Tab.Screen
        name={CONSTANT.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              source={IMAGES.HOME_TAB_IMG}
              tintColor={
                focused ? CONSTANT.RGB104_141_233 : CONSTANT.RGB114_114_114
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel label={CONSTANT.HOME} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={CONSTANT.FEED}
        component={Feed}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              source={IMAGES.FEED_TAB_IMG}
              tintColor={
                focused ? CONSTANT.RGB104_141_233 : CONSTANT.RGB114_114_114
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel label={CONSTANT.FEED} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={CONSTANT.REFERRALS}
        component={Referrals}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              source={IMAGES.REFERRAL_TAB_IMG}
              tintColor={
                focused ? CONSTANT.RGB104_141_233 : CONSTANT.RGB114_114_114
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel label={CONSTANT.REFERRALS} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={CONSTANT.WALLET}
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              source={IMAGES.WALLET_TAB_IMG}
              tintColor={
                focused ? CONSTANT.RGB104_141_233 : CONSTANT.RGB114_114_114
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel label={CONSTANT.WALLET} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={CONSTANT.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              source={IMAGES.PROFILE_TAB_IMG}
              tintColor={
                focused ? CONSTANT.RGB104_141_233 : CONSTANT.RGB114_114_114
              }
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel label={CONSTANT.PROFILE} focused={focused} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    height: 180,
  },
});
