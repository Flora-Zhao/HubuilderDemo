// 引入 uniapp 的 request 实例
import uniHttp from "./request.js";

// GET 请求
const get = (url, data) => {
	return uniHttp.request({
		url: url,
		data: data,
		method: "GET"
	})
};

// POST 请求
const post = (url, data) => {
	return uniHttp.request({
		url: url,
		data: data,
		method: "POST"
	})
};

// PUT 请求
const put = (url, data) => {
	return uniHttp.request({
		url: url,
		data: data,
		method: "PUT"
	})
};

// DELETE 请求
const del = (url, data) => {
	return uniHttp.request({
		url: url,
		data: data,
		method: "DELETE"
	})
};

export default {
	post,
	get,
	put,
	del,
};