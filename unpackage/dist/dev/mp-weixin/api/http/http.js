"use strict";
const api_http_request = require("./request.js");
const get = (url, data) => {
  return api_http_request.http.request({
    url,
    data,
    method: "GET"
  });
};
const post = (url, data) => {
  return api_http_request.http.request({
    url,
    data,
    method: "POST"
  });
};
const put = (url, data) => {
  return api_http_request.http.request({
    url,
    data,
    method: "PUT"
  });
};
const del = (url, data) => {
  return api_http_request.http.request({
    url,
    data,
    method: "DELETE"
  });
};
const http = {
  post,
  get,
  put,
  del
};
exports.http = http;
