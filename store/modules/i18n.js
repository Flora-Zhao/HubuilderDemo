import i18n from '@/i18n';

const state = {
  language: uni.getStorageSync('language') || 'en'
};

const mutations = {
  SET_LANGUAGE(state, language) {
    state.language = language;
    i18n.global.locale = language;
    uni.setStorageSync('language', language);
  }
};

const actions = {
  toggleLanguage({ commit, state }) {
    const newLanguage = state.language === 'en' ? 'zh' : 'en';
    commit('SET_LANGUAGE', newLanguage);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};