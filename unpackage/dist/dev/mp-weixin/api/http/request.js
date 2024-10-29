"use strict";
const common_vendor = require("../../common/vendor.js");
const http = {
  // 1.baseUrl
  baseUrl: "http://118.89.133.167:8083/zhifou-blog",
  // 2. 请求方法
  request(config) {
    config = beforeRequestHandler(config);
    config.url = this.baseUrl + config.url;
    return new Promise((resolve, reject) => {
      common_vendor.index.request(config).then((res) => {
        const response = beforeRequestHandler(res);
        resolve(response);
      }).catch((error) => {
        errorHandle(error);
        reject(error);
      });
    });
  }
};
const beforeRequestHandler = (config) => {
  config.header = {
    "content-type": "application/json"
  };
  const access_token = common_vendor.index.getStorageSync("token");
  if (access_token) {
    config.header["token"] = access_token;
  }
  return config;
};
const errorHandle = (error) => {
  if (error.errMsg) {
    error.message = "服务器错误";
  }
};
exports.http = http;
