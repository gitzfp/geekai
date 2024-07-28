import { post }  from "@/utils/request";

export const login = (data) => post('/api/user/login',data);
