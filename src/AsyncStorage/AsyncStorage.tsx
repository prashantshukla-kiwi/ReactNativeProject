import AsyncStorage from '@react-native-async-storage/async-storage';
import CONSTANT from '../Constants/Constant';

export const storeUserId = async userId => {
  try {
    await AsyncStorage.setItem(CONSTANT.USERID, userId.toString());
  } catch (error) {
    console.error(CONSTANT.ERROR_STORING, error);
  }
};

export const retrieveUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem(CONSTANT.USERID);
    if (userId !== null) {
      return userId;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const clearUserId = async () => {
  try {
    await AsyncStorage.removeItem(CONSTANT.USERID);
  } catch (error) {
    console.error(CONSTANT.ERROR_CLEARING, error);
  }
};
