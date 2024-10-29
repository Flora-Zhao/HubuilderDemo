"use strict";
const common_vendor = require("../common/vendor.js");
function useCheckLoginAndNavigate() {
  const checkLogin = (navigateUrl) => {
    const user = common_vendor.index.getStorageSync("userInfo") || 1;
    if (!user) {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    } else {
      common_vendor.index.navigateTo({
        url: navigateUrl
      });
    }
  };
  return {
    checkLogin
  };
}
exports.useCheckLoginAndNavigate = useCheckLoginAndNavigate;
