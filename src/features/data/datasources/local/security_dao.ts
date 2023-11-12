import AsyncStorage from '@react-native-async-storage/async-storage';

export class SecurityDao {
  static userUid: string = 'user_uid';
  static userBid: string = 'user_bid';
  static refreshToken: string = 'refresh_token';

  async getUserUid(): Promise<string | null> {
    return await AsyncStorage.getItem(SecurityDao.userUid);
  }

  async setUserUid(uid: string) {
    await AsyncStorage.setItem(SecurityDao.userUid, uid);
  }

  async getUserBid(): Promise<string | null> {
    return await AsyncStorage.getItem(SecurityDao.userBid);
  }

  async setUserBid(bid: string) {
    await AsyncStorage.setItem(SecurityDao.userBid, bid);
  }

  async getRefreshToken(): Promise<string | null> {
    return await AsyncStorage.getItem(SecurityDao.refreshToken);
  }

  async setRefreshToken(token: string) {
    await AsyncStorage.setItem(SecurityDao.refreshToken, token);
  }

  async clear() {
    await AsyncStorage.removeItem(SecurityDao.userUid);
    await AsyncStorage.removeItem(SecurityDao.userBid);
    await AsyncStorage.removeItem(SecurityDao.refreshToken);
  }
}
