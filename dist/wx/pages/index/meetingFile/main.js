require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(158);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_24d6c1d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(162);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
  __webpack_require__(160)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24d6c1d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_24d6c1d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\meetingFile\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24d6c1d8", Component.options)
  } else {
    hotAPI.reload("data-v-24d6c1d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 161:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      fileList: [],
      myFileList: [],
      meetingId: ''
    };
  },
  onLoad: function onLoad(options) {
    this.$forceUpdate();
    this.meetingId = options.meetingId;
    this.getFileList(options.meetingId);
  },

  methods: {
    detail: function detail(id, fileName, fileUrl, createType) {
      wx.navigateTo({
        url: '../fileDetail/main?fileId=' + id + '&fileName=' + fileName + '&fileUrl=' + fileUrl + '&createType=' + createType + '&meetingId=' + this.meetingId
      });
    },
    getFileList: function getFileList(id) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["j" /* getMeetingFileList */])({ meetId: id });

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  _this.fileList = res.data.meetingMaterialList;
                  _this.fileList.forEach(function (item) {
                    if (item.pdfUrl) {
                      item.fileUrl = item.pdfUrl;
                    }
                  });
                  _this.myFileList = res.data.myMaterialList;
                  _this.myFileList.forEach(function (item) {
                    if (item.pdfUrl) {
                      item.fileUrl = item.pdfUrl;
                    }
                  });
                }
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "meetingFile"
  }, [_c('div', {
    staticClass: "fileWrap",
    class: {
      'isRoles': _vm.roles === 1
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("会议材料")]), _c('b', [_vm._v("共" + _vm._s(_vm.fileList.length) + "份")])], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.fileList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "fileList",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.detail(item.fileUuid, item.fileName, item.fileUrl, 0)
        }
      }
    }, [_c('i', {
      staticClass: "fileIcon"
    }), _c('span', {
      staticClass: "fileName"
    }, [_vm._v(_vm._s(item.fileName || ''))])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "fileWrap",
    class: {
      'isRoles': _vm.roles === 1
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("我的材料")]), _c('b', [_vm._v("共" + _vm._s(_vm.myFileList.length) + "份")])], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.myFileList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "fileList",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.detail(item.fileUuid, item.fileName, item.fileUrl, 1)
        }
      }
    }, [_c('i', {
      staticClass: "fileIcon"
    }), _c('span', {
      staticClass: "fileName"
    }, [_vm._v(_vm._s(item.fileName || ''))])], 1)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24d6c1d8", esExports)
  }
}

/***/ })

},[157]);