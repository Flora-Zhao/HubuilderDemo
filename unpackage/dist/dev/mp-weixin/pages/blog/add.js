"use strict";
const common_vendor = require("../../common/vendor.js");
const api_blog_blog = require("../../api/blog/blog.js");
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_action_sheet2 = common_vendor.resolveComponent("uv-action-sheet");
  const _easycom_uv_toast2 = common_vendor.resolveComponent("uv-toast");
  (_easycom_uv_navbar2 + _easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_textarea2 + _easycom_uv_button2 + _easycom_uv_form2 + _easycom_uv_action_sheet2 + _easycom_uv_toast2)();
}
const _easycom_uv_navbar = () => "../../node-modules/@climblee/uv-ui/components/uv-navbar/uv-navbar.js";
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_textarea = () => "../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_action_sheet = () => "../../node-modules/@climblee/uv-ui/components/uv-action-sheet/uv-action-sheet.js";
const _easycom_uv_toast = () => "../../node-modules/@climblee/uv-ui/components/uv-toast/uv-toast.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_input + _easycom_uv_form_item + _easycom_uv_textarea + _easycom_uv_button + _easycom_uv_form + _easycom_uv_action_sheet + _easycom_uv_toast)();
}
const _sfc_main = {
  __name: "add",
  setup(__props) {
    common_vendor.onLoad((option) => {
      if (option.id) {
        title.value = "编辑博客";
        blogForm.id = option.id;
        getBlogDetail();
      }
      const userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
      blogForm.userId = userInfo.id;
    });
    const toast = common_vendor.ref(null);
    const title = common_vendor.ref("新增博客");
    const typeList = common_vendor.ref([{
      name: "java"
    }, {
      name: "vue"
    }, {
      name: "react"
    }, {
      name: "uniapp"
    }, {
      name: "electron"
    }, {
      name: "js"
    }]);
    const blogForm = common_vendor.reactive({
      id: "",
      title: "",
      type: "",
      userId: "",
      content: ""
    });
    const blogFormRule = common_vendor.reactive({
      title: [{
        type: "string",
        required: true,
        message: "标题不能为空",
        trigger: "blur"
      }],
      type: [{
        type: "string",
        required: true,
        message: "类别不能为空",
        trigger: "change"
      }],
      content: [{
        type: "string",
        required: true,
        message: "内容不能为空",
        trigger: "blur"
      }]
    });
    const leftClick = () => {
      common_vendor.index.navigateBack();
    };
    const blogTypeRef = common_vendor.ref(null);
    const showTypes = () => {
      blogTypeRef.value.open();
    };
    const selectType = (e) => {
      blogForm.type = e.name;
    };
    const getBlogDetail = async () => {
      const {
        data
      } = await api_blog_blog.blogApi.getBlogInfo(blogForm.id);
      Object.assign(blogForm, data.data);
    };
    const blogFormRef = common_vendor.ref();
    const saveBlog = () => {
      blogFormRef.value.validate().then(async () => {
        const {
          data
        } = await api_blog_blog.blogApi.saveBlog(blogForm);
        if (data.code == 200) {
          common_vendor.index.showToast({
            title: "保存成功！"
          });
          common_vendor.index.navigateTo({
            url: "/pages/blog/list"
          });
        } else {
          common_vendor.index.showToast({
            title: data.message
          });
        }
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
        a: common_vendor.o(leftClick),
        b: common_vendor.p({
          fixed: false,
          bgColor: "#f8f8f8",
          title: title.value
        }),
        c: common_vendor.o(($event) => blogForm.title = $event),
        d: common_vendor.p({
          placeholder: "请输入标题",
          clearable: true,
          modelValue: blogForm.title
        }),
        e: common_vendor.p({
          label: "标题:",
          prop: "title"
        }),
        f: common_vendor.o(($event) => blogForm.type = $event),
        g: common_vendor.p({
          border: "surround",
          suffixIcon: "arrow-right",
          disabled: true,
          disabledColor: "#ffffff",
          placeholder: "请选择类别",
          modelValue: blogForm.type
        }),
        h: common_vendor.o(showTypes),
        i: common_vendor.p({
          label: "类别:",
          prop: "type"
        }),
        j: common_vendor.o(($event) => blogForm.content = $event),
        k: common_vendor.p({
          autoHeight: true,
          placeholder: "请输入内容",
          modelValue: blogForm.content
        }),
        l: common_vendor.p({
          label: "内容:",
          prop: "content"
        }),
        m: common_vendor.o(saveBlog),
        n: common_vendor.p({
          type: "primary",
          text: "提交",
          customStyle: "margin-top: 10px;background-color:#5c89fe;border:none;"
        }),
        o: common_vendor.sr(blogFormRef, "177106b0-1", {
          "k": "blogFormRef"
        }),
        p: common_vendor.p({
          labelPosition: "left",
          model: blogForm,
          rules: blogFormRule
        }),
        q: common_vendor.sr(blogTypeRef, "177106b0-9", {
          "k": "blogTypeRef"
        }),
        r: common_vendor.o(selectType),
        s: common_vendor.p({
          actions: typeList.value,
          title: "请选择技术类别"
        }),
        t: common_vendor.sr(toast, "177106b0-10", {
          "k": "toast"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-177106b0"]]);
wx.createPage(MiniProgramPage);
