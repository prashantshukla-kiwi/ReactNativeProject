import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { normalizeFont, scaleHeight, scaleWidth } from '../DynamicStyle';
import FONTS from '../../Constants/FONTS';
import CONSTANT, { GlobalStyleValues } from '../../Constants/Constant';

const LoginBtn = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[CONSTANT.RGB104_141_233, CONSTANT.RGB148_178_254]}
        style={styles.button}
        useAngle={true}
        angle={131.74}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(20),
    borderRadius: scaleHeight(10),
    height:scaleHeight(64),
    justifyContent:GlobalStyleValues.CENTER,
  },
  buttonText: {
    color: CONSTANT.WHITE_COLOR,
    fontSize: normalizeFont(16),
    textAlign: GlobalStyleValues.CENTER,
    fontFamily:FONTS.MontserratSemiBold,
  },
});

export default LoginBtn;
