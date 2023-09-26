import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import CONSTANT, {GlobalStyleValues} from '../Constants/Constant';

const MyActivityIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={CONSTANT.LARGE} color={CONSTANT.BLUE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    position: GlobalStyleValues.ABSOLUTE,
    zIndex: 1,
  },
  centeredText: {
    fontSize: 20,
  },
});

export default MyActivityIndicator;
