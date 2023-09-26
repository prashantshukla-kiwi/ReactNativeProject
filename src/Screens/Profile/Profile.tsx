import React, {useEffect} from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../../Components/ProfileHeader';
import IMAGES from '../../Constants/ImagesName';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
} from '../../Components/DynamicStyle';
import FONTS from '../../Constants/FONTS';
import FriendsList from './FriendsList';
import LoyaltyClubs from './LoyaltyClubs';
import CONSTANT, {GlobalStyleValues} from '../../Constants/Constant';
import LinearGradient from 'react-native-linear-gradient';
import MyPostAndLB from './MyPostAndLB';
import ManageAccountAndSetting from './ManageAccountAndSetting';
import {getApiRequest} from '../../NetworManager/MyAxiosRequest';
import URL from '../../NetworManager/Url';
import {retrieveUserId} from '../../AsyncStorage/AsyncStorage';

const Profile = () => {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const userId = await retrieveUserId();
    try {
      const response = await getApiRequest(`${URL.PROFILE_END_POINT}${userId}`);
      setData(response?.data);
      console.log(response?.data?.first_name);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileHeader />
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.container}>
            <View>
              {data?.profile_picture ? (
                <Image
                  source={{uri: data?.profile_picture}}
                  style={styles.profileImage}
                />
              ) : (
                <Image
                  source={IMAGES.FRIENDSECOND_IMG}
                  style={styles.profileImage}
                />
              )}
              <View style={styles.editImageContainer}>
                <Image source={IMAGES.EDIT_IMG} style={styles.editImage} />
              </View>
            </View>
          </View>
          <View style={styles.linergradientcantainer}>
            <LinearGradient
              colors={[CONSTANT.RGB248_249_255, CONSTANT.RGB238_240_253]}
              style={styles.linerView}>
              <View style={styles.userDetailView}>
                <Text style={styles.usename}>
                  {data?.first_name + ' ' + data?.last_name}
                </Text>
                <View style={styles.veteran}>
                  <Image
                    source={IMAGES.VETERANCLUB_IMG}
                    style={styles.veteranImg}
                  />
                  <Text style={styles.veteranTxt}>2022 Veteran Club</Text>
                </View>
                <View style={styles.editProfileTextContainer}>
                  <TouchableOpacity>
                    <Text style={styles.editProfileText}>
                      {CONSTANT.EDIT_PROFILE}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        <Text style={styles.friend}>{CONSTANT.FRIENDS21}</Text>
        <FriendsList />
        <View style={styles.loyltyContainer}>
          <Text style={styles.loyltyText}>{CONSTANT.LOYALTY_CLUB}</Text>
          <Text style={styles.viewDetail}>{CONSTANT.VIEW_DETAIL}</Text>
        </View>
        <LoyaltyClubs />
        <MyPostAndLB />
        <ManageAccountAndSetting />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CONSTANT.FFFFFF,
  },
  main: {
    alignContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    marginTop: 60,
    marginHorizontal: 20,
  },
  linerView: {
    borderRadius: 10,
    alignItems: GlobalStyleValues.CENTER,
  },
  linergradientcantainer: {
    marginTop: 66,
    width: '100%',

    borderRadius: 10,
    flexDirection: GlobalStyleValues.COLUMN,
    zIndex: -1,
  },
  userDetailView: {
    flexDirection: GlobalStyleValues.COLUMN,
    marginTop: 60,
    alignSelf: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    marginBottom: 10,
  },
  usename: {
    fontFamily: FONTS.WorkSansRegular,
    fontSize: normalizeFont(20),
    color: CONSTANT.RGB_46_46_46,
    marginTop: 15,
  },
  veteran: {
    marginTop: 6,
    flexDirection: GlobalStyleValues.ROW,
  },
  veteranTxt: {
    marginLeft: 5.5,
    fontFamily: FONTS.WorkSansSemiBold,
    fontSize: normalizeFont(14),
    color: CONSTANT.RGB_46_46_46,
  },
  veteranImg: {
    height: scaleHeight(22),
    width: scaleWidth(22),
  },
  editProfileTextContainer: {
    marginTop: 13,
  },
  editProfileText: {
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(14),
    color: CONSTANT.RGB104_141_233,
  },
  container: {
    position: GlobalStyleValues.ABSOLUTE,
    alignContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    marginTop: 60,
  },
  containerTwo: {
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: CONSTANT.PINK_COLOR,
  },
  profileImage: {
    width: 92,
    height: 92,
    borderRadius: 46,
    marginTop: -46,
  },
  friend: {
    marginLeft: 20,
    marginTop: 30,
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(16),
  },
  editImageContainer: {
    height: 28,
    width: 28,
    backgroundColor: CONSTANT.RGB238_240_253,
    position: GlobalStyleValues.ABSOLUTE,
    zIndex: 1,
    bottom: 0,
    right: 5,
    borderRadius: 30,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
    borderWidth: 1,
    borderColor: CONSTANT.RGB255_255_255,
  },
  editImage: {
    width: scaleWidth(12),
    height: scaleHeight(12),
  },
  loyltyContainer: {
    marginLeft: 20,
    marginTop: 30,
    marginRight: 20,
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  loyltyText: {
    fontFamily: FONTS.WorkSansMedium,
    fontSize: normalizeFont(16),
    color: CONSTANT.RGB_24_24_24,
  },
  viewDetail: {
    fontFamily: FONTS.WorkSansRegular,
    fontSize: normalizeFont(14),
    color: CONSTANT.RGB_104_141_233,
  },
  circleView: {
    height: 25,
    width: 25,
    backgroundColor: CONSTANT.RED_COLOR,
    bottom: 25,
    borderRadius: 12,
    left: 30,
  },
});

export default Profile;
