import { post, get } from "@/utils/request";

// 登录
export const login = (data) => post("/api/user/login", data);

// 注册
export const register = (data) => post("/api/user/register", data);

// 检查用户是否登录
export const checkSession = () => get("/api/user/session", {});

// 获取用户最新数据
export const getUserInfo = () => get("/api/user/profile", {});
