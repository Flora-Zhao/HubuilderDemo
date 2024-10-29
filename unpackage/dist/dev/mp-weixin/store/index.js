"use strict";
const common_vendor = require("../common/vendor.js");
const store_modules_i18n = require("./modules/i18n.js");
const store = common_vendor.createStore({
  modules: {
    i18n: store_modules_i18n.i18nModule
    // other: otherModule
  }
});
exports.store = store;
