import { post, get } from "@/utils/request";

// 获取模型列表
export const getModelList = (data) => get("/api/model/list", {});

// 获取会话列表
export const getChatList = () => get("/api/chat/list", {});

// 角色列表
export const getRoleList = () => get("/api/role/list", {});
