import AsyncStorage from '@react-native-community/async-storage';

export const getMyValue = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      return value;
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  
  }