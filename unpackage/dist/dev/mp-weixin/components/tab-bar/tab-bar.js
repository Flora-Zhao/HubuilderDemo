"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useCheckLoginAndNavigate = require("../../hooks/useCheckLoginAndNavigate.js");
if (!Array) {
  const _easycom_uv_tabbar_item2 = common_vendor.resolveComponent("uv-tabbar-item");
  const _easycom_uv_tabbar2 = common_vendor.resolveComponent("uv-tabbar");
  (_easycom_uv_tabbar_item2 + _easycom_uv_tabbar2)();
}
const _easycom_uv_tabbar_item = () => "../../node-modules/@climblee/uv-ui/components/uv-tabbar-item/uv-tabbar-item.js";
const _easycom_uv_tabbar = () => "../../node-modules/@climblee/uv-ui/components/uv-tabbar/uv-tabbar.js";
if (!Math) {
  (_easycom_uv_tabbar_item + _easycom_uv_tabbar)();
}
const _sfc_main = {
  __name: "tab-bar",
  props: ["itemValue"],
  setup(__props) {
    const {
      checkLogin
    } = hooks_useCheckLoginAndNavigate.useCheckLoginAndNavigate();
    const toIndex = () => {
      common_vendor.index.navigateTo({
        url: "/pages/blog/list"
      });
    };
    const toAddBlog = () => {
      checkLogin("/pages/blog/add");
    };
    const toUserCenter = () => {
      checkLogin("/pages/user/user");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toIndex),
        b: common_vendor.p({
          text: "首页",
          icon: "home"
        }),
        c: common_vendor.o(toAddBlog),
        d: common_vendor.p({
          iconSize: "40",
          icon: "plus-circle"
        }),
        e: common_vendor.o(toUserCenter),
        f: common_vendor.p({
          text: "我的",
          icon: "account"
        }),
        g: common_vendor.p({
          value: __props.itemValue,
          activeColor: "black"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ffb3232c"]]);
wx.createComponent(Component);
