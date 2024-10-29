"use strict";
const common_vendor = require("../../common/vendor.js");
const api_blog_blog = require("../../api/blog/blog.js");
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_col2 = common_vendor.resolveComponent("uv-col");
  const _easycom_uv_tags2 = common_vendor.resolveComponent("uv-tags");
  const _easycom_uv_row2 = common_vendor.resolveComponent("uv-row");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uv_modal2 = common_vendor.resolveComponent("uv-modal");
  (_easycom_uv_navbar2 + _easycom_uv_tabs2 + _easycom_uv_image2 + _easycom_uv_col2 + _easycom_uv_tags2 + _easycom_uv_row2 + _easycom_uni_card2 + _easycom_uv_modal2)();
}
const _easycom_uv_navbar = () => "../../node-modules/@climblee/uv-ui/components/uv-navbar/uv-navbar.js";
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
const _easycom_uv_col = () => "../../node-modules/@climblee/uv-ui/components/uv-col/uv-col.js";
const _easycom_uv_tags = () => "../../node-modules/@climblee/uv-ui/components/uv-tags/uv-tags.js";
const _easycom_uv_row = () => "../../node-modules/@climblee/uv-ui/components/uv-row/uv-row.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uv_modal = () => "../../node-modules/@climblee/uv-ui/components/uv-modal/uv-modal.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_tabs + _easycom_uv_image + _easycom_uv_col + _easycom_uv_tags + _easycom_uv_row + _easycom_uni_card + _easycom_uv_modal)();
}
const _sfc_main = {
  __name: "my-blog",
  setup(__props) {
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
      const userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
      search.userId = userInfo.id;
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
    const blogDataList = common_vendor.ref([]);
    const loading = common_vendor.ref(0);
    const search = common_vendor.reactive({
      current: 1,
      size: 10,
      type: "java",
      userId: ""
    });
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
    const returnBack = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/user"
      });
    };
    const toUpdate = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/blog/add?id=" + id
      });
    };
    const deleteModal = common_vendor.ref(null);
    const blogId = common_vendor.ref("");
    const openDeleteModal = (id) => {
      deleteModal.value.open();
      blogId.value = id;
    };
    const cancelDelete = () => {
      deleteModal.value.close();
      blogId.value = "";
    };
    const deleteBlog = async () => {
      const {
        data
      } = await api_blog_blog.blogApi.delBlog(blogId.value);
      console.log("data:", data);
      if (data.code === 200) {
        common_vendor.index.showToast({
          title: "删除成功"
        });
        loading.value = 0;
        blogDataList.value = [];
        getDataList();
      } else {
        common_vendor.index.showToast({
          title: data.message
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(returnBack),
        b: common_vendor.p({
          fixed: false,
          bgColor: "#f8f8f8",
          title: "我的博客"
        }),
        c: common_vendor.o(changeTab),
        d: common_vendor.o(_ctx.click),
        e: common_vendor.p({
          scrollable: false,
          list: tabList.value
        }),
        f: blogDataList.value && blogDataList.value.length > 0
      }, blogDataList.value && blogDataList.value.length > 0 ? {
        g: common_vendor.f(blogDataList.value, (item, index, i0) => {
          return {
            a: "3816d5ea-5-" + i0 + "," + ("3816d5ea-4-" + i0),
            b: "3816d5ea-4-" + i0 + "," + ("3816d5ea-3-" + i0),
            c: common_vendor.t(item.content),
            d: common_vendor.o(($event) => toUpdate(item.id), index),
            e: "3816d5ea-7-" + i0 + "," + ("3816d5ea-6-" + i0),
            f: common_vendor.o(($event) => openDeleteModal(item.id), index),
            g: "3816d5ea-8-" + i0 + "," + ("3816d5ea-6-" + i0),
            h: "3816d5ea-6-" + i0 + "," + ("3816d5ea-3-" + i0),
            i: "3816d5ea-3-" + i0 + "," + ("3816d5ea-2-" + i0),
            j: index,
            k: common_vendor.o(($event) => toBlogDetail(item.id), index),
            l: "3816d5ea-2-" + i0,
            m: common_vendor.p({
              title: item.title,
              ["is-shadow"]: false,
              extra: common_vendor.unref(common_vendor.timeFormat)(item.createTime)
            })
          };
        }),
        h: common_vendor.p({
          src: "https://picsum.photos/seed/picsum/300/300",
          width: "50px",
          height: "50px"
        }),
        i: common_vendor.p({
          span: "3"
        }),
        j: common_vendor.p({
          text: "编辑",
          plain: true,
          size: "mini",
          type: "warning"
        }),
        k: common_vendor.p({
          text: "删除",
          plain: true,
          size: "mini",
          type: "error"
        }),
        l: common_vendor.p({
          span: "9"
        }),
        m: common_vendor.p({
          customStyle: "margin-bottom:2px"
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
        s: common_vendor.sr(deleteModal, "3816d5ea-10", {
          "k": "deleteModal"
        }),
        t: common_vendor.o(cancelDelete),
        v: common_vendor.o(deleteBlog),
        w: common_vendor.p({
          showCancelButton: true,
          title: "确认删除该博客吗？"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3816d5ea"]]);
wx.createPage(MiniProgramPage);
