import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {scaleHeight, scaleWidth} from './DynamicStyle';
import CustButtonWithTextAndImageomButton from './Buttons/ButtonWithTextAndImage';
import IMAGES from '../Constants/ImagesName';
import NotificationBadge from './NotificationBages';
import CONSTANT, {GlobalStyleValues} from '../Constants/Constant';
const ProfileHeader = () => {
  const handleButtonPress = () => {
  
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <CustButtonWithTextAndImageomButton
            text={CONSTANT.TEXT1024}
            imageSource={IMAGES.LP_IMG}
            onPress={handleButtonPress}
          />
        </View>
        <View style={styles.imagecontainer}>
          <Image source={IMAGES.LUCKYDIEM_IMG} style={styles.image} />
        </View>

        <View style={styles.notificationimagecontainer}>
          <Image
            source={IMAGES.NOTIFICATION_IMG}
            style={styles.notificationimage}
          />
          <NotificationBadge count={3} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    opacity: 1,
    shadowColor: CONSTANT.BLACK_RGB,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 5,
    borderBottomColor: CONSTANT.RGB244_244_244,
    borderBottomWidth: 2,
    height: 60,
  },
  container: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    height: scaleHeight(50),
  },
  imagecontainer: {
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    position: GlobalStyleValues.ABSOLUTE,
    width: '100%',
  },
  image: {},
  notificationimagecontainer: {
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    marginRight: 20,
    position: GlobalStyleValues.RELATIVE,
  },
  notificationimage: {
    width: scaleWidth(15),
    height: scaleHeight(18),
  },
});

export default ProfileHeader;
