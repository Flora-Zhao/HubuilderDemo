"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-cell-group",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$13]
};
if (!Array) {
  const _easycom_uv_line2 = common_vendor.resolveComponent("uv-line");
  _easycom_uv_line2();
}
const _easycom_uv_line = () => "../uv-line/uv-line.js";
if (!Math) {
  _easycom_uv_line();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.title
  }, _ctx.title ? {
    b: common_vendor.t(_ctx.title)
  } : {}, {
    c: _ctx.border
  }, _ctx.border ? {} : {}, {
    d: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle)),
    e: common_vendor.n(_ctx.customClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4b7938cf"]]);
wx.createComponent(Component);
