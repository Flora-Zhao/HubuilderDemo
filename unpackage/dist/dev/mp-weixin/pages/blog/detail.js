"use strict";
const common_vendor = require("../../common/vendor.js");
const api_blog_blog = require("../../api/blog/blog.js");
if (!Array) {
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_col2 = common_vendor.resolveComponent("uv-col");
  const _easycom_uv_text2 = common_vendor.resolveComponent("uv-text");
  const _easycom_uv_row2 = common_vendor.resolveComponent("uv-row");
  const _easycom_uv_line2 = common_vendor.resolveComponent("uv-line");
  const _easycom_uv_parse2 = common_vendor.resolveComponent("uv-parse");
  (_easycom_uv_image2 + _easycom_uv_col2 + _easycom_uv_text2 + _easycom_uv_row2 + _easycom_uv_line2 + _easycom_uv_parse2)();
}
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
const _easycom_uv_col = () => "../../node-modules/@climblee/uv-ui/components/uv-col/uv-col.js";
const _easycom_uv_text = () => "../../node-modules/@climblee/uv-ui/components/uv-text/uv-text.js";
const _easycom_uv_row = () => "../../node-modules/@climblee/uv-ui/components/uv-row/uv-row.js";
const _easycom_uv_line = () => "../../node-modules/@climblee/uv-ui/components/uv-line/uv-line.js";
const _easycom_uv_parse = () => "../../node-modules/@climblee/uv-ui/components/uv-parse/uv-parse.js";
if (!Math) {
  (_easycom_uv_image + _easycom_uv_col + _easycom_uv_text + _easycom_uv_row + _easycom_uv_line + _easycom_uv_parse)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    common_vendor.onLoad((option) => {
      blogInfo.id = option.blogId;
      getBlogDetail();
    });
    const blogInfo = common_vendor.reactive({
      id: "",
      title: "",
      type: "",
      content: "",
      createTime: ""
    });
    const getBlogDetail = async () => {
      const {
        data
      } = await api_blog_blog.blogApi.getBlogInfo(blogInfo.id);
      Object.assign(blogInfo, data.data);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(blogInfo.title),
        b: common_vendor.p({
          src: "https://picsum.photos/seed/picsum/300/300",
          width: "50px",
          height: "50px"
        }),
        c: common_vendor.p({
          span: "2"
        }),
        d: common_vendor.t(blogInfo.username),
        e: common_vendor.p({
          type: "info",
          text: common_vendor.unref(common_vendor.timeFormat)(blogInfo.createTime, "yyyy-mm-dd hh:MM:ss")
        }),
        f: common_vendor.p({
          span: "10"
        }),
        g: common_vendor.p({
          customStyle: "padding: 10px"
        }),
        h: common_vendor.p({
          content: blogInfo.content
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f02f3071"]]);
wx.createPage(MiniProgramPage);
