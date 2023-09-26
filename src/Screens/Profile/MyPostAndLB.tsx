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
import LinearGradient from 'react-native-linear-gradient';
const MyPostAndLB = () => {
  return (
    <View style={{marginTop: 20}}>
      <View style={styles.containerView}>
        <LinearGradient
          colors={[CONSTANT.RGB255_239_239, CONSTANT.RGB255_219_219]}
          style={styles.linerView}>
          <View style={styles.myPostView}>
            <View style={styles.myPostImageContaner}>
              <Image
                source={IMAGES.MYPOST_IMG}
                style={styles.myPostImage}></Image>
            </View>
            <Text style={styles.myPostText}>{CONSTANT.MY_POST}</Text>
            <Text style={styles.favorites}>{CONSTANT.SEE_YOUR_FAV}</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={[CONSTANT.RGB255_243_234, CONSTANT.RGB253_228_208]}
          style={styles.linerView}>
          <View style={styles.myLBView}>
            <View style={styles.myPostImageContaner}>
              <Image
                source={IMAGES.LEADERBOARD_IMG}
                style={styles.lbImage}></Image>
            </View>
            <Text style={styles.myPostText}>{CONSTANT.LEADERBOARD}</Text>
            <Text style={styles.favorites}>
              {CONSTANT.SEE_HOW_YOU_STACK_UP_AMONGST_ALL_LUCKY_USER}
            </Text>
          </View>
        </LinearGradient>
      </View>
      <LinearGradient
        colors={[CONSTANT.RGB239_244_255, CONSTANT.RGB218_230_253]}
        style={styles.linerViewForBadges}>
        <View style={styles.badgesView}>
          <View style={styles.imageContanerView}>
            <Image source={IMAGES.BADGES_IMG} style={styles.badgesImg}></Image>
          </View>
          <View style={styles.badgeTextCaontainer}>
            <Text style={styles.badgesText}>{CONSTANT.BADGES}</Text>
            <Text style={styles.luckyPointText}>
              {CONSTANT.QUICK_AND_EASY_WAY_TO_EARN_LUCKY_POINT}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: GlobalStyleValues.ROW,
    marginLeft: 20,
    marginRight: 20,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  myPostView: {
    alignItems: GlobalStyleValues.CENTER,
    width: scaleWidth(157),
  },
  myPostText: {
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(14),
    color: CONSTANT.RGB_46_46_46,
    marginTop: 12,
  },
  favorites: {
    fontFamily: FONTS.WorkSansRegular,
    fontSize: normalizeFont(12),
    color: CONSTANT.RGB_46_46_46,
    lineHeight: 18,
    marginTop: 6,
    marginLeft: 8,
    marginBottom: 12,
    marginRight: 7,
  },
  badgesView: {
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    marginLeft: 12,
  },
  myLBView: {
    alignItems: GlobalStyleValues.CENTER,
    width: scaleWidth(157),
  },
  imageContanerView: {
    alignItems: GlobalStyleValues.CENTER,
    height: 67,
    width: 67,
    borderRadius: 33,
    backgroundColor: CONSTANT.RGB255_255_255,
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 11,
    justifyContent: GlobalStyleValues.CENTER,
    opacity: 0.5,
  },
  badgeTextCaontainer: {
    borderColor: CONSTANT.RED_COLOR,
    marginLeft: 10,
    marginRight: 44,
  },
  badgesText: {
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(14),
    color: CONSTANT.RGB_46_46_46,
    marginTop: 20,
  },
  luckyPointText: {
    fontFamily: FONTS.WorkSansRegular,
    fontSize: normalizeFont(12),
    color: CONSTANT.RGB_46_46_46,
    lineHeight: 18,
    marginTop: 6,
    marginBottom: 12,
  },
  myPostImageContaner: {
    height: 67,
    width: 67,
    borderRadius: 33,
    backgroundColor: CONSTANT.RGB255_255_255,
    marginTop: 12,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
    opacity: 0.5,
  },
  myPostImage: {
    height: scaleHeight(30),
    width: scaleWidth(35),
  },
  lbImage: {
    height: scaleHeight(27),
    width: scaleWidth(33),
  },
  badgesImg: {
    height: scaleHeight(35),
    width: scaleWidth(29),
  },
  linerView: {
    borderRadius: 10,
    alignItems: GlobalStyleValues.CENTER,
  },
  linerViewForBadges: {
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: GlobalStyleValues.FLEX_START,
    flexDirection: GlobalStyleValues.ROW,
  },
});

export default MyPostAndLB;
