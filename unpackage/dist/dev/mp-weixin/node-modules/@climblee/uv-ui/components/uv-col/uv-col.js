"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-col",
  emits: ["click"],
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5],
  data() {
    return {
      width: 0,
      parentData: {
        gutter: 0
      },
      gridNum: 12
    };
  },
  computed: {
    uJustify() {
      if (this.justify == "end" || this.justify == "start")
        return "flex-" + this.justify;
      else if (this.justify == "around" || this.justify == "between")
        return "space-" + this.justify;
      else
        return this.justify;
    },
    uAlignItem() {
      if (this.align == "top")
        return "flex-start";
      if (this.align == "bottom")
        return "flex-end";
      else
        return this.align;
    },
    colStyle() {
      const style = {
        // 这里写成"padding: 0 10px"的形式是因为nvue的需要
        paddingLeft: this.$uv.addUnit(this.$uv.getPx(this.parentData.gutter) / 2),
        paddingRight: this.$uv.addUnit(this.$uv.getPx(this.parentData.gutter) / 2),
        alignItems: this.uAlignItem,
        justifyContent: this.uJustify,
        textAlign: this.textAlign,
        // 在非nvue上，使用百分比形式
        flex: `0 0 ${100 / this.gridNum * this.span}%`,
        marginLeft: 100 / 12 * this.offset + "%"
      };
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.updateParentData();
      this.width = await this.parent.getComponentWidth();
    },
    updateParentData() {
      this.getParentData("uv-row");
    },
    clickHandler(e) {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n("uv-col-" + _ctx.span),
    b: common_vendor.s($options.colStyle),
    c: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e450b875"]]);
wx.createComponent(Component);
