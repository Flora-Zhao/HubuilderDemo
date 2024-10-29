"use strict";
const api_http_http = require("../http/http.js");
const login = (data) => {
  return api_http_http.http.post("/user/login", data);
};
const userApi = { login };
exports.userApi = userApi;
