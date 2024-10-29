import http from "@/api/http/http.js"

// 用户登录
const login = (data) => {
	return http.post("/user/login", data);
};

export default {login}