import Taro from '@tarojs/taro';

const BASE_URL = "http://114.116.224.128:5678"; // 替换为你的 API 基础 URL

// process.env.TARO_APP_API
const request = async (url: string, method, data = {}, header ={}) => {
  try {
    const response = await Taro.request({
      url: `${BASE_URL}${url}`,
      method: method,
      data: data,
      header: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Admin-Authorization': '',
        'Authorization': '',
        'Chat-Token': '',
        ...header
        // 可以在这里添加其他需要的请求头
      },
    });
    return response.data;
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};

const get = async (url: string, data = {}, header ={}) => {
  return request(url, 'GET', data, header);
};

const post = async (url: string, data = {}, header ={}) => {
  return request(url, 'POST', data, header);
};

export { get, post };
