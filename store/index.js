import { createStore } from 'vuex';
import i18nModule from './modules/i18n';
// 其他模块的引入
// import otherModule from './modules/otherModule';

const store = createStore({
  modules: {
    i18n: i18nModule,
    // other: otherModule
  }
});

export default store;