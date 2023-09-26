import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import IMAGES from '../../Constants/ImagesName';
import {
  normalizeFont,
} from '../../Components/DynamicStyle';
import FONTS from '../../Constants/FONTS';
import CONSTANT, {GlobalStyleValues} from '../../Constants/Constant';
const friendsImg = [
  {
    img: IMAGES.FRIENDONE_IMG,
  },
  {
    img: IMAGES.FRIENDSECOND_IMG,
  },
  {
    img: IMAGES.FRIENDTHIRD_IMG,
  },
  {
    img: IMAGES.FRIENDFOURTH_IMG,
  },
  {
    img: IMAGES.FRIENDFIVTH_IMG,
  },
  {
    view: CONSTANT.VIEW_ALL,
  },
];
const FriendsList = () => {
  const friendRender = ({item, index}) => {
    return index === 5 ? (
      <View style={styles.container}>
        <Text style={styles.viewAll}>{item.view}</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <Image
          source={item.img}
          style={styles.image}
          resizeMode={GlobalStyleValues.COVER}></Image>
      </View>
    );
  };
  return (
    <View style={styles.containerView}>
      <View style={styles.flatListView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={friendsImg}
          scrollEnabled={false}
          renderItem={friendRender}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: GlobalStyleValues.ROW,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 9,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  flatListView: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  container: {
    marginLeft: 10,
    alignItems: GlobalStyleValues.CENTER,
    alignContent: GlobalStyleValues.CENTER,
  },
  image: {
    borderRadius: 22,
  },
  viewAll: {
    fontFamily: FONTS.WorkSansRegular,
    fontSize: normalizeFont(14),
    color: CONSTANT.RGB104_141_233,
    marginLeft: 5,
    marginTop: 15,
  },
});

export default FriendsList;
