import React, {useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {apiRequest} from '../../NetworManager/MyAxiosRequest';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
} from '../../Components/DynamicStyle';
import CustomInput from '../../Components/Field';
import LoginBtn from '../../Components/Buttons/LoginBtn';
import FONTS from '../../Constants/FONTS';
import CONSTANT, {GlobalStyleValues} from '../../Constants/Constant';
import URL from '../../NetworManager/Url';
import {clearUserId, storeUserId} from '../../AsyncStorage/AsyncStorage';
import MyActivityIndicator from '../../Components/MyActivityIndicator';
const LoginScreen = props => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const handleEmailChange = newEmail => {
    setEmail(newEmail);

    if (!newEmail || !newEmail.trim()) {
      setEmailError(CONSTANT.EMAIL_IS_REQUIRED);
    } else if (!isValidEmail(newEmail)) {
      setEmailError(CONSTANT.INVALID_EMAIL_FORMATE);
    } else {
      setEmailError('');
    }
  };
  const isValidEmail = email => {
    const emailPattern = CONSTANT.EMAIL_PATTERN;
    return emailPattern.test(email);
  };
  const handlePasswordChange = newPassword => {
    setPassword(newPassword);
    if (!newPassword || !newPassword.trim()) {
      setPasswordError(CONSTANT.PASSWORD_IS_REQUIRED);
    } else if (newPassword.length < 3) {
      setPasswordError(CONSTANT.PASSWORD_MUST_BE_AT_LEAST_THREE_CHARACTER_LONG);
    } else {
      setPasswordError('');
    }
  };
  const handleButtonPress = () => {
    if (!emailError && !passwordError && !!email && !!password) {
      postData();
    } else {
      Alert.alert(
        CONSTANT.VALIDATION_ERROR,
        CONSTANT.PLEASE_CORRECT_THE_VALIDATION_ERROR,
      );
    }
  };
  const postData = async () => {
    setLoading(true);
    try {
      const requestData = {
        email: email,
        password: password,
      };

      const response = await apiRequest(
        URL.LOGIN_END_POINT,
        CONSTANT.POST,
        requestData,
        {},
      );
      clearUserId();
      const userId = response?.data?.id;
      storeUserId(userId);
      setLoading(false);
      props.navigation.navigate(CONSTANT.TABNAVIGATOR);
    } catch (error) {
      setLoading(false);
      Alert.alert(CONSTANT.SOMETHING_WENT_WORNG);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <View style={styles.uperTextContainer}>
          <Text style={styles.signInText}>{CONSTANT.SIGN_TEXT}</Text>
          <Text style={styles.signUPText}>{CONSTANT.SIGNUP_TEXT}</Text>
        </View>
        <Text style={styles.credentidalText}>{CONSTANT.ENTER_CREDENTIAL}</Text>
        <View style={styles.username}>
          <CustomInput
            placeholder={CONSTANT.EMAIL_TEXT}
            onChangeText={handleEmailChange}
            secureTextEntry={false}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
        <View style={styles.password}>
          <CustomInput
            placeholder={CONSTANT.PASSWORD_TEXT}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
          />
          <Text style={styles.errorText}>{passwordError}</Text>
        </View>
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordTxt}>
            {CONSTANT.FORGOT_PASSWORD}
          </Text>
        </View>
        <View style={styles.signWithFaceId}>
          <Text style={styles.faceIDText}>{CONSTANT.SIGNINWITHFACE_ID}</Text>
        </View>
        <View style={styles.signIn}>
          <LoginBtn title={CONSTANT.SIGN_TEXT} onPress={handleButtonPress} />
        </View>
        <View style={styles.explorLuckyDiem}>
          <Text style={styles.faceIDText}>{CONSTANT.EXPLOR_LUCKDIEM}</Text>
        </View>
        {loading ? <MyActivityIndicator /> : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CONSTANT.WHITE_COLOR,
  },
  main: {
    flex: 1,
    marginHorizontal: scaleWidth(20),
    backgroundColor: CONSTANT.WHITE_COLOR,
  },
  uperTextContainer: {
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  signInText: {
    marginTop: scaleHeight(16),
    fontSize: normalizeFont(30),
    fontFamily: FONTS.MontserratBold,
    color: CONSTANT.BLACK_RGB,
  },
  signUPText: {
    marginTop: scaleHeight(16),
    fontSize: normalizeFont(16),
    fontFamily: FONTS.MontserratMedium,
    color: CONSTANT.SIGNUP_COL,
  },
  errorText: {
    color: CONSTANT.RED_COLOR,
    fontSize: 12,
    marginTop: 3,
  },
  credentidalText: {
    fontSize: normalizeFont(15),
    lineHeight: 22,
    color: CONSTANT.BLACK_RGB,
    fontFamily: FONTS.WorkSansRegular,
    marginTop: scaleHeight(9),
  },
  username: {
    marginTop: 27,
  },
  password: {
    marginTop: 20,
  },
  signWithFaceId: {
    marginTop: 30,
    alignItems: GlobalStyleValues.CENTER,
  },
  explorLuckyDiem: {
    marginTop: 40,
    alignItems: GlobalStyleValues.CENTER,
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordTxt: {
    textDecorationLine: GlobalStyleValues.UNDERLINE,
    textDecorationColor: CONSTANT.BLACK_RGB,
    fontSize: normalizeFont(14),
    fontFamily: FONTS.WorkSansRegular,
    color: CONSTANT.BLACK_RGB,
  },
  faceIDText: {
    textDecorationLine: GlobalStyleValues.UNDERLINE,
    textDecorationColor: CONSTANT.BLACK_RGB,
    fontSize: normalizeFont(16),
    fontFamily: FONTS.WorkSansMedium,
    color: CONSTANT.BLACK_RGB,
  },
  signIn: {
    marginTop: 19,
  },
});
export default LoginScreen;
