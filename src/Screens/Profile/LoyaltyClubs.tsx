import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  Dimensions,
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
import Circle from '../../Components/Circle';
const loyaltyClubList = [
  {
    img: IMAGES.BRONZE_IMG,
    name: CONSTANT.BRONZE,
  },
  {
    img: IMAGES.SILVER_IMG,
    name: CONSTANT.SILVER,
  },
  {
    img: IMAGES.GOLD_IMG,
    name: CONSTANT.GOLD,
  },
  {
    img: IMAGES.PLATINUM_IMG,
    name: CONSTANT.PLATINUM,
  },
  {
    img: IMAGES.DIAMOND_IMG,
    name: CONSTANT.DIAMOND,
  },
];
const LoyaltyClubs = () => {
  const loyaltyclubsRender = ({item, index}) => {
    const itemStyle =
      index === 0 ? styles.containerFirst : styles.containerSecond;
    const textStyle = index > 2 ? styles.textSecond : styles.text;

    return (
      <View style={[itemStyle]}>
        <Image source={item.img} style={styles.image}></Image>
        <Text style={[textStyle]}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.containerView}>
      <View style={styles.flatListView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={loyaltyClubList}
          scrollEnabled={false}
          renderItem={loyaltyclubsRender}></FlatList>
      </View>
      <View style={styles.pogressBarContainer}>
        <View style={styles.firstPogressBar}></View>
        <Circle backgroundColor2={CONSTANT.RGB245_201_111} />
        <View style={styles.secondPogressBar}></View>
        <Circle backgroundColor2={CONSTANT.RGB245_201_111} />
        <View style={styles.thirdPogressBar}></View>
        <Circle backgroundColor2={CONSTANT.RGB245_201_111} />
        <View style={styles.fourthPogressBar}></View>
        <View style={styles.fifthPogressBar}></View>
        <Circle backgroundColor2={CONSTANT.RGB209_209_209} />
        <View style={styles.sixPogressBar}></View>
        <Circle backgroundColor2={CONSTANT.RGB209_209_209} />
        <View style={styles.sevenPogressBar}></View>
      </View>
      <View style={styles.numTextContainer}>
        <Image source={IMAGES.COINCOUNT_IMG} />
        <Text style={styles.numText}>2133/2250</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: GlobalStyleValues.COLUMN,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: CONSTANT.RGB248_248_248,
  },
  pogressBarContainer: {
    flexDirection: GlobalStyleValues.ROW,
    marginTop: 9,
    alignItems: GlobalStyleValues.CENTER,
  },
  firstPogressBar: {
    backgroundColor: CONSTANT.RGB245_201_111,
    height: scaleHeight(6),
    width: scaleWidth(30),
  },
  secondPogressBar: {
    backgroundColor: CONSTANT.RGB245_201_111,
    height: scaleHeight(6),
    width: scaleWidth(56),
  },
  thirdPogressBar: {
    backgroundColor: CONSTANT.RGB245_201_111,
    height: scaleHeight(6),
    width: scaleWidth(47),
  },
  fourthPogressBar: {
    backgroundColor: CONSTANT.RGB245_201_111,
    height: scaleHeight(6),
    width: scaleWidth(23),
  },
  fifthPogressBar: {
    backgroundColor: CONSTANT.RGB209_209_209,
    height: scaleHeight(6),
    width: scaleWidth(40),
  },
  sixPogressBar: {
    backgroundColor: CONSTANT.RGB209_209_209,
    height: scaleHeight(6),
    width: scaleWidth(65),
  },
  sevenPogressBar: {
    backgroundColor: CONSTANT.RGB209_209_209,
    height: scaleHeight(6),
    width: scaleWidth(20),
  },
  flatListView: {
    marginTop: 19,
    marginHorizontal: -20,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },

  containerFirst: {
    marginLeft: 5,
    alignItems: GlobalStyleValues.CENTER,
  },
  containerSecond: {
    marginLeft: 25,
    alignItems: GlobalStyleValues.CENTER,
  },
  image: {
    height: scaleHeight(36),
    width: scaleWidth(36),
  },
  text: {
    marginTop: 6.3,
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(11),
    color: CONSTANT.RGB_46_46_46,
  },
  textSecond: {
    marginTop: 6.3,
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(11),
    color: CONSTANT.RGB114_114_114,
  },
  numText: {
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(12),
    color: CONSTANT.RGB_46_46_46,
    marginLeft: 1,
  },
  numTextContainer: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
    marginTop: 12,
    marginBottom: 15,
  },
});

export default LoyaltyClubs;
