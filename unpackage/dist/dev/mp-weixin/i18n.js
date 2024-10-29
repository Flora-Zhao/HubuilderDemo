"use strict";
const common_vendor = require("./common/vendor.js");
const title$1 = "Add Blog";
const submit$1 = "Submit";
const titlePlaceholder$1 = "Please enter the title";
const typePlaceholder$1 = "Please select a category";
const contentPlaceholder$1 = "Please enter the content";
const en = {
  title: title$1,
  submit: submit$1,
  titlePlaceholder: titlePlaceholder$1,
  typePlaceholder: typePlaceholder$1,
  contentPlaceholder: contentPlaceholder$1
};
const title = "新增博客";
const submit = "提交";
const titlePlaceholder = "请输入标题";
const typePlaceholder = "请选择类别";
const contentPlaceholder = "请输入内容";
const zh = {
  title,
  submit,
  titlePlaceholder,
  typePlaceholder,
  contentPlaceholder
};
const messages = {
  en,
  zh
};
const i18n = common_vendor.createI18n({
  locale: "en",
  // 设置默认语言
  messages
});
exports.i18n = i18n;
