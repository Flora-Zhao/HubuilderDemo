"use strict";
const common_vendor = require("../../common/vendor.js");
const api_blog_blog = require("../../api/blog/blog.js");
if (!Array) {
  const _easycom_hellow_world2 = common_vendor.resolveComponent("hellow-world");
  const _easycom_order_add2 = common_vendor.resolveComponent("order-add");
  const _easycom_user_add2 = common_vendor.resolveComponent("user-add");
  const _easycom_product_detail2 = common_vendor.resolveComponent("product-detail");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_col2 = common_vendor.resolveComponent("uv-col");
  const _easycom_uv_row2 = common_vendor.resolveComponent("uv-row");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_tab_bar2 = common_vendor.resolveComponent("tab-bar");
  (_easycom_hellow_world2 + _easycom_order_add2 + _easycom_user_add2 + _easycom_product_detail2 + _easycom_uv_button2 + _easycom_uv_navbar2 + _easycom_uv_tabs2 + _easycom_uv_image2 + _easycom_uv_col2 + _easycom_uv_row2 + _easycom_uni_card2 + _easycom_tab_bar2)();
}
const _easycom_hellow_world = () => "../../components/hellow-world/hellow-world.js";
const _easycom_order_add = () => "../../components/order/order-add.js";
const _easycom_user_add = () => "../../components/user/user-add.js";
const _easycom_product_detail = () => "../../components/product-detail/product-detail.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
const _easycom_uv_navbar = () => "../../node-modules/@climblee/uv-ui/components/uv-navbar/uv-navbar.js";
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
const _easycom_uv_col = () => "../../node-modules/@climblee/uv-ui/components/uv-col/uv-col.js";
const _easycom_uv_row = () => "../../node-modules/@climblee/uv-ui/components/uv-row/uv-row.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_tab_bar = () => "../../components/tab-bar/tab-bar.js";
if (!Math) {
  (_easycom_hellow_world + _easycom_order_add + _easycom_user_add + _easycom_product_detail + _easycom_uv_button + _easycom_uv_navbar + _easycom_uv_tabs + _easycom_uv_image + _easycom_uv_col + _easycom_uv_row + _easycom_uni_card + _easycom_tab_bar)();
}
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const store = common_vendor.useStore();
    const blogDataList = common_vendor.ref([]);
    const loading = common_vendor.ref(0);
    const tabList = common_vendor.ref([{
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
    common_vendor.onLoad(() => {
      getDataList();
    });
    common_vendor.onPullDownRefresh(() => {
      search.current = 1;
      loading.value = 0;
      blogDataList.value = [];
      getDataList();
    });
    common_vendor.onReachBottom(() => {
      if (loading.value == 2) {
        return;
      }
      search.current++;
      loading.value = 1;
      getDataList();
    });
    const scrolltolower = () => {
      if (loading.value == 2) {
        return;
      }
      search.current++;
      loading.value = 1;
      getDataList();
    };
    const search = common_vendor.reactive({
      current: 1,
      size: 10,
      type: "java"
    });
    const toggleLanguage = () => {
      store.dispatch("i18n/toggleLanguage");
    };
    const changeTab = (e) => {
      loading.value = 0;
      search.type = e.name;
      search.current = 1;
      blogDataList.value = [];
      getDataList();
    };
    const getDataList = async () => {
      const {
        data
      } = await api_blog_blog.blogApi.getBlogList(search);
      if (data.data.records.length == 0) {
        loading.value = 2;
      }
      blogDataList.value = [...blogDataList.value, ...data.data.records];
      common_vendor.index.stopPullDownRefresh();
    };
    const toBlogDetail = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/blog/detail?blogId=" + id
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(_ctx.$t("titlePlaceholder")),
        b: common_vendor.o(toggleLanguage),
        c: common_vendor.p({
          type: "default",
          text: "切换语言"
        }),
        d: common_vendor.p({
          leftIcon: "",
          fixed: false,
          bgColor: "#f8f8f8",
          title: "知否技术博客"
        }),
        e: common_vendor.o(changeTab),
        f: common_vendor.o(_ctx.click),
        g: common_vendor.p({
          scrollable: false,
          list: tabList.value
        }),
        h: blogDataList.value && blogDataList.value.length > 0
      }, blogDataList.value && blogDataList.value.length > 0 ? {
        i: common_vendor.f(blogDataList.value, (item, index, i0) => {
          return {
            a: "f909dea6-10-" + i0 + "," + ("f909dea6-9-" + i0),
            b: "f909dea6-9-" + i0 + "," + ("f909dea6-8-" + i0),
            c: common_vendor.t(item.content),
            d: "f909dea6-11-" + i0 + "," + ("f909dea6-8-" + i0),
            e: "f909dea6-8-" + i0 + "," + ("f909dea6-7-" + i0),
            f: index,
            g: common_vendor.o(($event) => toBlogDetail(item.id), index),
            h: "f909dea6-7-" + i0,
            i: common_vendor.p({
              title: item.title,
              ["is-shadow"]: false,
              extra: common_vendor.unref(common_vendor.timeFormat)(item.createTime)
            })
          };
        }),
        j: common_vendor.p({
          src: "https://picsum.photos/seed/picsum/300/300",
          width: "50px",
          height: "50px"
        }),
        k: common_vendor.p({
          span: "3"
        }),
        l: common_vendor.p({
          span: "9"
        }),
        m: common_vendor.p({
          customStyle: "margin-bottom: 5px"
        })
      } : {}, {
        n: loading.value == 1
      }, loading.value == 1 ? {} : {}, {
        o: loading.value == 2 && blogDataList.value.length > 0
      }, loading.value == 2 && blogDataList.value.length > 0 ? {} : {}, {
        p: loading.value == 2 && blogDataList.value.length == 0
      }, loading.value == 2 && blogDataList.value.length == 0 ? {
        q: common_vendor.p({
          mode: "widthFix",
          width: "300rpx",
          height: "300rpx",
          src: "/static/images/empty.png"
        })
      } : {}, {
        r: common_vendor.o(scrolltolower),
        s: common_vendor.p({
          itemValue: 0
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f909dea6"]]);
wx.createPage(MiniProgramPage);
