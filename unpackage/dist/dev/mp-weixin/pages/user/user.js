"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_col2 = common_vendor.resolveComponent("uv-col");
  const _easycom_uv_text2 = common_vendor.resolveComponent("uv-text");
  const _easycom_uv_row2 = common_vendor.resolveComponent("uv-row");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_cell2 = common_vendor.resolveComponent("uv-cell");
  const _easycom_uv_cell_group2 = common_vendor.resolveComponent("uv-cell-group");
  const _easycom_tab_bar2 = common_vendor.resolveComponent("tab-bar");
  (_easycom_uv_navbar2 + _easycom_uv_image2 + _easycom_uv_col2 + _easycom_uv_text2 + _easycom_uv_row2 + _easycom_uv_icon2 + _easycom_uv_cell2 + _easycom_uv_cell_group2 + _easycom_tab_bar2)();
}
const _easycom_uv_navbar = () => "../../node-modules/@climblee/uv-ui/components/uv-navbar/uv-navbar.js";
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
const _easycom_uv_col = () => "../../node-modules/@climblee/uv-ui/components/uv-col/uv-col.js";
const _easycom_uv_text = () => "../../node-modules/@climblee/uv-ui/components/uv-text/uv-text.js";
const _easycom_uv_row = () => "../../node-modules/@climblee/uv-ui/components/uv-row/uv-row.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_cell = () => "../../node-modules/@climblee/uv-ui/components/uv-cell/uv-cell.js";
const _easycom_uv_cell_group = () => "../../node-modules/@climblee/uv-ui/components/uv-cell-group/uv-cell-group.js";
const _easycom_tab_bar = () => "../../components/tab-bar/tab-bar.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_image + _easycom_uv_col + _easycom_uv_text + _easycom_uv_row + _easycom_uv_icon + _easycom_uv_cell + _easycom_uv_cell_group + _easycom_tab_bar)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    let userInfo = common_vendor.reactive({
      name: "",
      code: ""
    });
    common_vendor.onLoad(() => {
      userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
    });
    const myBlog = () => {
      common_vendor.index.redirectTo({
        url: "/pages/user/my-blog"
      });
    };
    const logout = () => {
      common_vendor.index.clearStorageSync();
      common_vendor.index.removeStorageSync("userInfo");
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftIcon: "",
          fixed: false,
          bgColor: "#f8f8f8",
          title: "个人中心"
        }),
        b: common_vendor.p({
          src: "/static/images/zhi.png",
          width: "50px",
          height: "50px"
        }),
        c: common_vendor.p({
          span: "2"
        }),
        d: common_vendor.t(common_vendor.unref(userInfo).name),
        e: common_vendor.p({
          type: "info",
          customStyle: "font-size:12px",
          text: "编号：" + common_vendor.unref(userInfo).code
        }),
        f: common_vendor.p({
          span: "10"
        }),
        g: common_vendor.p({
          size: "30rpx",
          name: "arrow-right"
        }),
        h: common_vendor.o(myBlog),
        i: common_vendor.p({
          title: "我的博客"
        }),
        j: common_vendor.p({
          size: "30rpx",
          name: "arrow-right"
        }),
        k: common_vendor.o(logout),
        l: common_vendor.p({
          title: "退出登录"
        }),
        m: common_vendor.p({
          src: "/static/images/zhifou.jpg",
          width: "200px",
          height: "200px"
        }),
        n: common_vendor.p({
          itemValue: 2
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
