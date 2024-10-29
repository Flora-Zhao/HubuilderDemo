"use strict";
const api_http_http = require("../http/http.js");
const getBlogList = (data) => {
  return api_http_http.http.get("/blog/page", data);
};
const saveBlog = (data) => {
  return api_http_http.http.post("/blog/save", data);
};
const delBlog = (data) => {
  return api_http_http.http.del("/blog/delete/" + data);
};
const getBlogInfo = (data) => {
  return api_http_http.http.get("/blog/info/" + data);
};
const blogApi = {
  getBlogList,
  saveBlog,
  delBlog,
  getBlogInfo
};
exports.blogApi = blogApi;
