import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '../Components/DynamicStyle';
import {GlobalStyleValues} from '../Constants/Constant';

const TabBarIcon = ({source, tintColor}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image(tintColor)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  image: tintColor => ({
    width: scaleWidth(26),
    height: scaleHeight(26),
    resizeMode: GlobalStyleValues.CONTAIN,
    tintColor,
  }),
});
export default TabBarIcon;
