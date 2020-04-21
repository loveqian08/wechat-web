require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(190);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07fe4352_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07fe4352"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07fe4352_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myInfo\\personInfo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07fe4352", Component.options)
  } else {
    hotAPI.reload("data-v-07fe4352", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      photoUrl: '',
      info: {}
    };
  },
  onLoad: function onLoad(options) {
    this.photoUrl = options.avatarUrl;
  },
  onShow: function onShow() {
    try {
      var userInfo = wx.getStorageSync('userInfo');
      if (userInfo) {
        this.info = userInfo;
      }
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    getPhotoUrl: function getPhotoUrl(url) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["y" /* updatePhoto */])({ avatarUrl: url });

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  console.log(res);
                  if (res.data.avatarUrl) {
                    _this2.photoUrl = res.data.avatarUrl;
                  }
                }
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                _this2.$notify({
                  type: 'danger',
                  message: _context.t0.message
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 7]]);
      }))();
    },
    updatePhoto: function updatePhoto() {
      var _this = this;
      wx.chooseImage({
        success: function success(res) {
          console.log(res);
          wx.getStorage({
            key: 'token',
            success: function success(result) {
              var token = result.data;
              wx.uploadFile({
                url: 'https://suji.learndar.com/api/mini/common/uploadFile',
                filePath: res.tempFilePaths[0],
                name: 'file',
                formData: {
                  'token': token
                },
                success: function success(data) {
                  var obj = JSON.parse(data.data);
                  _this.getPhotoUrl(obj.fileUrl);
                }
              });
            }
          });
        },
        fail: function fail(e) {
          console.log(e);
        }
      });
    },
    checkName: function checkName() {
      wx.navigateTo({
        url: '../updateName/main'
      });
    }
  }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "personInfo"
  }, [_c('div', {
    staticClass: "lis"
  }, [_c('span', [_vm._v("我的账号")]), _vm._v(" "), _c('i', {
    staticClass: "user"
  }, [_vm._v(_vm._s(_vm.info.telephone))])], 1), _vm._v(" "), _c('div', {
    staticClass: "lis"
  }, [_c('span', [_vm._v("所属机构")]), _vm._v(" "), _c('i', [_vm._v(_vm._s(_vm.info.orgName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "lis",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.updatePhoto
    }
  }, [_c('span', [_vm._v("修改头像")]), _vm._v(" "), _c('b'), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.photoUrl,
      "alt": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lis",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.checkName
    }
  }, [_c('span', [_vm._v("真实姓名")]), _vm._v(" "), _c('b'), _vm._v(" "), _c('i', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.info.name))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07fe4352", esExports)
  }
}

/***/ })

},[189]);