import React, { FC } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../DynamicStyle';
import FONTS from '../../Constants/FONTS';
import CONSTANT, { GlobalStyleValues } from '../../Constants/Constant';

interface CustomButtonProps {
  text: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

const CustButtonWithTextAndImageomButton: FC<CustomButtonProps> = ({ text, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.button}>
        <Image source={imageSource} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: CONSTANT.TRANSPARENT,
    borderRadius: 10,
    overflow: GlobalStyleValues.HIDDEN,
    marginLeft:20,
    width: scaleWidth(72), 
    height: scaleHeight(28),
    alignItems:GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  button: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: CONSTANT.RGBA104_141_233, 
    borderRadius: 5,
  },
  buttonText: {
    color: CONSTANT.BLACK_RGB, 
    fontSize:  normalizeFont(14), 
    fontFamily:FONTS.MontserratMedium,
    marginLeft: 4, 
  },
  buttonImage: {
    width: scaleWidth(18), 
    height: scaleHeight(17.2), 
    resizeMode: GlobalStyleValues.CONTAIN,
  },
});

export default CustButtonWithTextAndImageomButton;

