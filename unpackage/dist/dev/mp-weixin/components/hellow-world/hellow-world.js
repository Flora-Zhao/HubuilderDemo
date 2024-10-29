"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "hellow-world",
  setup(__props) {
    common_vendor.ref("你好世界");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "知否技术"
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
