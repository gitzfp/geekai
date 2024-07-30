import Taro from "@tarojs/taro"; // 替换为你的 API 基础 URL
import {
    getUserToken,
    removeUserToken,
    removeAdminToken,
    getAdminToken,
} from "@/store/session.js";

const BASE_URL = "http://114.116.224.128:5678";

// process.env.TARO_APP_API
const request = async (url: string, method, data = {}, header = {}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await Taro.request({
            url: `${BASE_URL}${url}`,
            method: method,
            data: data,
            header: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Admin-Authorization": getAdminToken(),
                Authorization: getUserToken(),
                "Chat-Token": "",
                ...header,
                // 可以在这里添加其他需要的请求头
            },
        });
        if (response.statusCode !== 200) {
            throw {
                message: response.statusCode === 403 ? "非法请求" : "请求失败",
                code: -1,
                data: response,
            };
        }
        if (response?.data?.code === 0) {
            return response.data;
        }
        if (response?.data?.code === 400) {
            // todo 过期 需要把登录信息清除
            removeUserToken();
            removeAdminToken();
        }
        throw {
            code: response?.data?.code || -1,
            message: response?.data?.message || "请求失败",
        };
    } catch (error) {
        throw error;
    }
};

const get = async (url: string, data = {}, header = {}) => {
    return request(url, "GET", data, header);
};

const post = async (url: string, data = {}, header = {}) => {
    return request(url, "POST", data, header);
};

export { get, post };
