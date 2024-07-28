
import Taro from '@tarojs/taro'


const UserTokenKey = "Authorization";
const AdminTokenKey = "Admin-Authorization"


export function getUserToken() {
  try {
    const value = Taro.getStorageSync(UserTokenKey)
    return value || ''
  } catch (e) {
    // Do something when catch error
  }
  return ''
}

export function setUserToken(token) {
    try {
      Taro.setStorageSync(UserTokenKey, token)
    } catch (e) { }
}

export function removeUserToken() {
    try {
      Taro.removeStorageSync(UserTokenKey)
    } catch (e) {
      // Do something when catch error
    }
}

export function getAdminToken() {
    try {
      const value = Taro.getStorageSync(AdminTokenKey)
      return value || ''
    } catch (e) {
      // Do something when catch error
    }
    return ''
}

export function setAdminToken(token) {
    try {
      Taro.setStorageSync(AdminTokenKey, token)
    } catch (e) { }
}

export function removeAdminToken() {
    try {
      Taro.removeStorageSync(AdminTokenKey)
    } catch (e) {
      // Do something when catch error
    }
}
