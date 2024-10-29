"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user_user = require("../../api/user/user.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_toast2 = common_vendor.resolveComponent("uv-toast");
  (_easycom_uv_image2 + _easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_button2 + _easycom_uv_form2 + _easycom_uv_toast2)();
}
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_toast = () => "../../node-modules/@climblee/uv-ui/components/uv-toast/uv-toast.js";
if (!Math) {
  (_easycom_uv_image + _easycom_uv_input + _easycom_uv_form_item + _easycom_uv_button + _easycom_uv_form + _easycom_uv_toast)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const toast = common_vendor.ref(null);
    const loginForm = common_vendor.reactive({
      username: "",
      password: ""
    });
    const loginPasswordRule = common_vendor.reactive({
      username: [{
        type: "string",
        required: true,
        message: "账号不能为空",
        trigger: "blur"
      }],
      password: [{
        type: "string",
        required: true,
        message: "密码不能为空",
        trigger: "blur"
      }]
    });
    const loginFormRef = common_vendor.ref();
    const login = () => {
      loginFormRef.value.validate().then((res) => {
        api_user_user.userApi.login(loginForm).then((res2) => {
          if (res2.data.code === 200) {
            common_vendor.index.setStorageSync("userInfo", JSON.stringify(res2.data.data.userInfo));
            common_vendor.index.setStorageSync("token", res2.data.data.token || "123456");
            common_vendor.index.navigateTo({
              url: `/pages/blog/list`
            });
          } else {
            toast.value.show({
              message: res2.data.message,
              type: "error",
              position: "center"
            });
          }
        }).catch((error) => {
          toast.value.show({
            message: error.errMsg,
            type: "error",
            position: "center"
          });
        });
      }).catch((errors) => {
        toast.value.show({
          message: "数据校验失败",
          type: "error",
          position: "center"
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          width: "80px",
          height: "80px",
          src: common_vendor.unref(common_assets.logoSrc)
        }),
        b: common_vendor.o(($event) => loginForm.username = $event),
        c: common_vendor.p({
          placeholder: "请输入账号",
          clearable: true,
          prefixIcon: "account",
          prefixIconStyle: "color: #909399",
          modelValue: loginForm.username
        }),
        d: common_vendor.p({
          borderBottom: false,
          prop: "username",
          borderBottom: true
        }),
        e: common_vendor.o(($event) => loginForm.password = $event),
        f: common_vendor.p({
          placeholder: "请输入密码",
          type: "password",
          password: true,
          prefixIcon: "lock",
          clearable: true,
          prefixIconStyle: "color: #909399",
          modelValue: loginForm.password
        }),
        g: common_vendor.p({
          borderBottom: false,
          prop: "password",
          borderBottom: true
        }),
        h: common_vendor.o(login),
        i: common_vendor.p({
          type: "primary",
          text: "登录",
          customStyle: "margin-top: 10px;background-color:#5c89fe;border:none;"
        }),
        j: common_vendor.sr(loginFormRef, "e4e4508d-1", {
          "k": "loginFormRef"
        }),
        k: common_vendor.p({
          labelPosition: "left",
          model: loginForm,
          rules: loginPasswordRule
        }),
        l: common_vendor.sr(toast, "e4e4508d-7", {
          "k": "toast"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
