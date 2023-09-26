import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FONTS from '../Constants/FONTS';
import { normalizeFont, scaleHeight, scaleWidth } from './DynamicStyle';
import CONSTANT, { GlobalStyleValues } from '../Constants/Constant';

const NotificationBadge = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: GlobalStyleValues.ABSOLUTE,
    top: -5, 
    right: -5, 
    backgroundColor: CONSTANT.RED_COLOR, 
    height: scaleHeight(12),
    width: scaleWidth(12),
    borderRadius: 12, 
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
  count: {
    color: CONSTANT.WHITE_COLOR, 
    fontSize: normalizeFont(10), 
    fontFamily:FONTS.WorkSansMedium, 
  },
});

export default NotificationBadge;
