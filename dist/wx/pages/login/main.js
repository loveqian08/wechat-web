require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(180);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_676735a3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-676735a3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_676735a3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-676735a3", Component.options)
  } else {
    hotAPI.reload("data-v-676735a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
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
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      bgImg: __webpack_require__(73),
      form: {
        telephone: '',
        password: ''
      },
      showPass: false,
      pathUrl: ''
    };
  },
  onLoad: function onLoad(options) {
    if (options.url) {
      console.log('进登录了');
      console.log(options);
      this.pathUrl = options.url;
      console.log(this.pathUrl);
    }
  },

  methods: {
    changeIpt: function changeIpt() {
      console.log(this.form.telephone);
    },
    input: function input(val) {
      var value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        var str = this.form.password;
        var i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.password = str;
      }
    },
    myInput: function myInput(val) {
      var value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        var str = this.form.telephone;
        var i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.telephone = str;
      }
    },
    forgetPass: function forgetPass() {
      wx.navigateTo({
        url: './forgetPass/main'
      });
    },
    userLogin: function userLogin() {
      var _this2 = this;

      var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if (!reg.test(this.form.telephone)) {
        this.$notify({
          type: 'danger',
          message: '请输入正确格式的手机号'
        });
        return false;
      }
      var _this = this;
      wx.login({
        success: function () {
          var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(res) {
            var par, result;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(res);

                    if (!res.code) {
                      _context.next = 13;
                      break;
                    }

                    par = {
                      telephone: _this.form.telephone,
                      password: _this.form.password,
                      wxCode: res.code
                    };
                    _context.prev = 3;
                    _context.next = 6;
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["r" /* login */])(par);

                  case 6:
                    result = _context.sent;

                    if (result.code === 0) {
                      wx.setStorage({
                        key: 'token',
                        data: result.data.token
                      });
                      wx.setStorage({
                        key: 'userInfo',
                        data: result.data
                      });
                      if (_this.pathUrl) {
                        wx.switchTab({
                          url: _this.pathUrl
                        });
                      } else {
                        wx.switchTab({
                          url: '../index/main'
                        });
                      }
                    }
                    _context.next = 13;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context['catch'](3);

                    _this2.$notify({
                      type: 'success',
                      message: _context.t0.message
                    });

                  case 13:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2, [[3, 10]]);
          }));

          return function success(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    }
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loginWrap"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('img', {
    attrs: {
      "src": _vm.bgImg,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("党政办公学习平台")])]), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "loginForm"
  }, [_c('div', {
    staticClass: "titName"
  }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "logo"
  }), _vm._v(" "), _c('div', {
    staticClass: "username"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.telephone),
      expression: "form.telephone"
    }],
    staticStyle: {
      "ime-mode": "disabled"
    },
    attrs: {
      "type": "number",
      "maxlength": 11,
      "placeholder": "请输入账号",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.telephone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.telephone = $event.target.value
      }, _vm.input],
      "change": _vm.changeIpt
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "password"
  }, [(!_vm.showPass) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    staticStyle: {
      "ime-mode": "disabled"
    },
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    staticStyle: {
      "ime-mode": "disabled"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入密码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password = $event.target.value
      }, _vm.myInput]
    }
  }) : _vm._e(), _vm._v(" "), _c('i', {
    class: {
      'showPass': _vm.showPass
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showPass = !_vm.showPass
      }
    }
  })], 1), _vm._v(" "), _c('button', {
    class: {
      'active': (_vm.form.telephone && _vm.form.password)
    },
    attrs: {
      "disabled": !_vm.form.telephone || !_vm.form.password,
      "eventid": '4'
    },
    on: {
      "click": _vm.userLogin
    }
  }, [_vm._v("登录")])], 1)]), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "foot",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.forgetPass
    }
  }, [_vm._v("忘记密码？")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-676735a3", esExports)
  }
}

/***/ })

},[179]);