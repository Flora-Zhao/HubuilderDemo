"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const i18n = require("./i18n.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/blog/list.js";
  "./pages/login/login.js";
  "./pages/user/user.js";
  "./pages/blog/add.js";
  "./pages/blog/detail.js";
  "./pages/user/my-blog.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  const language = common_vendor.index.getStorageSync("language") || "en";
  i18n.i18n.global.locale = language;
  app.use(i18n.i18n);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
