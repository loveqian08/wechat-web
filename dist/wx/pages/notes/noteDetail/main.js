require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(232);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0336650d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(235);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(233)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0336650d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\notes\\noteDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0336650d", Component.options)
  } else {
    hotAPI.reload("data-v-0336650d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__ = __webpack_require__(4);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      info: {},
      isAudio: false,
      uuid: '',
      list: [],
      requested: false,
      noData: __webpack_require__(27)
    };
  },
  onLoad: function onLoad(options) {
    this.getDetail(options.uuid);
    this.uuid = options.uuid;
  },

  methods: {
    toText: function toText() {
      wx.navigateTo({
        url: '/pages/notes/audioDetail/main?uuid=' + this.uuid
      });
    },
    formatJson: function formatJson(json) {
      return JSON.parse(json);
    },
    getDetail: function getDetail(uuid) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, obj, k;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["m" /* getNoteDetail */])(uuid);

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  _this.info = res.data;
                  if (_this.info.contentJson) {
                    _this.info.content = _this.formatJson(_this.info.contentJson);
                    obj = _this.formatJson(_this.info.contentJson).dfsMixPaths;

                    _this.list = [];
                    for (k in obj) {
                      _this.list.push(obj[k]);
                    }
                    _this.requested = true;
                    console.log(_this.list);
                  } else {
                    _this.info.content = '暂无数据';
                  }
                }
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                _this.$notify({
                  type: 'danger',
                  message: _context.t0.message
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "noteDetailWrap"
  }, [_c('div', {
    staticClass: "detailHead"
  }, [_c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.info.name))]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.info.createTime))])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "toText",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toText
    }
  }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("转为文字")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detailContent"
  }, [((!_vm.list || _vm.list.length === 0) && _vm.requested) ? _c('div', {
    staticClass: "noData"
  }, [_c('img', {
    attrs: {
      "src": _vm.noData
    }
  }), _vm._v(" "), _c('span', [_vm._v("暂无数据")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('img', {
      key: index,
      attrs: {
        "src": item,
        "alt": ""
      }
    })
  }))]), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0336650d", esExports)
  }
}

/***/ })

},[231]);