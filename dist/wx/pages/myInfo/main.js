require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(185);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d57376d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(188);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d57376d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d57376d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myInfo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d57376d4", Component.options)
  } else {
    hotAPI.reload("data-v-d57376d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__ = __webpack_require__(17);


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
      bgImg: __webpack_require__(73),
      info: {
        photoUrl: '',
        name: ''
      },
      popShow: false
    };
  },
  onLoad: function onLoad() {
    // const _this = this
    // wx.getSetting({
    //   success (res) {
    //     console.log('获取设置')
    //     console.log(res)
    //     if (!res.authSetting['scope.userInfo']) {
    //       console.log('开始验证')
    //       _this.popShow = true
    //     } else {
    //       wx.getUserInfo({
    //         success: function (result) {
    //           console.log(result)
    //           var userInfo = result.userInfo
    //           var avatarUrl = userInfo.avatarUrl
    //           _this.getPhotoUrl(avatarUrl)
    //         },
    //         fail (err) {
    //           console.log(err)
    //         }
    //       })
    //     }
    //   },
    //   fail (err) {
    //     console.log(err)
    //   }
    // })
  },
  onShow: function onShow() {
    var _this = this;
    this.getPhotoUrl();
    wx.getStorage({
      key: 'userInfo',
      success: function success(res) {
        _this.info.name = res.data.name;
      },
      fail: function fail() {
        wx.removeStorage({
          key: 'token',
          success: function success() {
            wx.reLaunch({
              url: '../login/main'
            });
          },
          fail: function fail() {
            wx.reLaunch({
              url: '../login/main'
            });
          }
        });
      }
    });
  },

  methods: {
    onGotUserInfo: function onGotUserInfo(e) {
      this.info.photoUrl = e.mp.detail.userInfo.avatarUrl;
      this.getPhotoUrl(this.info.photoUrl);
      this.popShow = false;
    },
    onClose: function onClose() {
      console.log('关闭了');
    },
    getPhotoUrl: function getPhotoUrl(url) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                res = {};

                if (!url) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["o" /* getPhoto */])({ avatarUrl: url });

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["o" /* getPhoto */])();

              case 10:
                res = _context.sent;

              case 11:
                if (res.code === 0) {
                  console.log(res);
                  if (res.data.avatarUrl) {
                    _this2.info.photoUrl = res.data.avatarUrl;
                  } else {
                    _this2.popShow = true;
                  }
                }
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);

                _this2.$notify({
                  type: 'danger',
                  message: _context.t0.message
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 14]]);
      }))();
    },
    loginOut: function loginOut() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__["a" /* default */].confirm({
        title: '',
        message: '确定退出当前账号吗？'
      }).then(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["z" /* userLoginOut */])();

              case 3:
                res = _context2.sent;

                if (res.code === 0) {
                  _this3.$notify({
                    type: 'success',
                    message: '退出成功'
                  });
                  wx.removeStorage({
                    key: 'token',
                    success: function success(result) {
                      wx.reLaunch({
                        url: '../login/main'
                      });
                    }
                  });
                }
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                _this3.$notify({
                  type: 'danger',
                  message: _context2.t0.message
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 7]]);
      }))).catch(function () {
        // on cancel
      });
    },
    toInfo: function toInfo() {
      wx.navigateTo({
        url: './personInfo/main?avatarUrl=' + this.info.photoUrl
      });
    },
    updataPass: function updataPass() {
      wx.navigateTo({
        url: './updatePass/main'
      });
    }
  },
  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myInfo"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('img', {
    attrs: {
      "src": _vm.bgImg,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("党政办公学习平台")]), _vm._v(" "), _c('div', {
    staticClass: "photo"
  }, [_c('img', {
    attrs: {
      "src": _vm.info.photoUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.info.name))])])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "lis",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toInfo
    }
  }, [_c('span', {
    staticClass: "info"
  }), _vm._v(" "), _c('div', {
    staticClass: "tabName"
  }, [_vm._v("个人信息")]), _vm._v(" "), _c('i', {
    staticClass: "next"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lis",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.updataPass
    }
  }, [_c('span', {
    staticClass: "pass"
  }), _vm._v(" "), _c('div', {
    staticClass: "tabName"
  }, [_vm._v("修改密码")]), _vm._v(" "), _c('i', {
    staticClass: "next"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lis",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.loginOut
    }
  }, [_c('span', {
    staticClass: "logout"
  }), _vm._v(" "), _c('div', {
    staticClass: "tabName"
  }, [_vm._v("退出登录")]), _vm._v(" "), _c('i', {
    staticClass: "next"
  })], 1), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.popShow,
      "position": "bottom",
      "custom-style": "height: 25%;",
      "eventid": '4',
      "mpcomid": '2'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("我们需要获取您的授权，关联您的微信头像")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '3'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("授权")])], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d57376d4", esExports)
  }
}

/***/ })

},[184]);