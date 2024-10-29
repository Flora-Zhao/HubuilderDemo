const http = {
	// 1.baseUrl
	baseUrl: "http://118.89.133.167:8083/zhifou-blog",
	// 2. 请求方法
	request(config) {
		// 请求拦截
		config = beforeRequestHandler(config);
		// 封装实际请求 url，例如 http://127.0.0.1:8080/user/list
		config.url = this.baseUrl + config.url;
		// 返回 Promis 格式
		return new Promise((resolve, reject) => {
			// uni 发起网络请求
			uni.request(config)
				.then(res => {
					// 响应拦截
					const response = beforeRequestHandler(res);
					resolve(response);
				}).catch(error => {
					// 异常处理
					errorHandle(error);
					reject(error);
				})
		})
	},
}
// 3. 请求拦截
const beforeRequestHandler = (config) => {
	config.header = {
		'content-type': 'application/json'
	};
	const access_token = uni.getStorageSync("token");
	// 如果 token 存在
	if (access_token) {
		config.header['token'] = access_token;
	}
	return config;
}
// 4. 响应拦截
const beforeReponseHandler = (response) => {
	return response;
}
// 5.异常处理
const errorHandle = (error) => {
	if (error.errMsg) {
		error.message = "服务器错误";
	}
}

export default http