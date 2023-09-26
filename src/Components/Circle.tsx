import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CONSTANT, { GlobalStyleValues } from '../Constants/Constant';

const Circle = ({backgroundColor2}) => {
  return <View style={styles.main(backgroundColor2)}></View>;
};

const styles = StyleSheet.create({
  main: dynmicColr => ({
    height: 10,
    width: 10,
    backgroundColor: dynmicColr ?? CONSTANT.RGB245_201_111,
    borderRadius: 30,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
    borderWidth: 1,
    borderColor: CONSTANT.RGB255_255_255,
  }),
});

export default Circle;
