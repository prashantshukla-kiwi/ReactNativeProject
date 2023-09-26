import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import ProfileHeader from '../../Components/ProfileHeader';
import IMAGES from '../../Constants/ImagesName';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
} from '../../Components/DynamicStyle';
import FONTS from '../../Constants/FONTS';
import CONSTANT, {GlobalStyleValues} from '../../Constants/Constant';

const ManageAccountAndSetting = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={IMAGES.MANAGECARD_IMG}></Image>
          <Text style={styles.text}>{CONSTANT.MANAGE_CARD}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image source={IMAGES.RIGHT_ARRAOW_IMG}></Image>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={IMAGES.ACCOUNTSETTING_IMG}></Image>
          <Text style={styles.text}>{CONSTANT.ACCOUNT_SETTING}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image source={IMAGES.RIGHT_ARRAOW_IMG}></Image>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={IMAGES.MYSTATEMENT_IMG}></Image>
          <Text style={styles.text}>{CONSTANT.MY_STATEMENTS}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image source={IMAGES.RIGHT_ARRAOW_IMG}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.WorkSansRegular,
    fontSize: normalizeFont(16),
    Colors: CONSTANT.RGB_46_46_46,
    marginLeft: 18,
  },
  container: {
    flex: 1,
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    alignItems: GlobalStyleValues.CENTER,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  leftContainer: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.FLEX_START,
  },

  rightContainer: {
    alignItems: GlobalStyleValues.FLEX_START,
    marginRight: 38,
  },
});

export default ManageAccountAndSetting;
