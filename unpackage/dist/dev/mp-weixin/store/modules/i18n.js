"use strict";
const common_vendor = require("../../common/vendor.js");
const i18n = require("../../i18n.js");
const state = {
  language: common_vendor.index.getStorageSync("language") || "en"
};
const mutations = {
  SET_LANGUAGE(state2, language) {
    state2.language = language;
    i18n.i18n.global.locale = language;
    common_vendor.index.setStorageSync("language", language);
  }
};
const actions = {
  toggleLanguage({ commit, state: state2 }) {
    const newLanguage = state2.language === "en" ? "zh" : "en";
    commit("SET_LANGUAGE", newLanguage);
  }
};
const i18nModule = {
  namespaced: true,
  state,
  mutations,
  actions
};
exports.i18nModule = i18nModule;
