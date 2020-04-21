require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(175);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_eb375740_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(178);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb375740"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_eb375740_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\forgetPass\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb375740", Component.options)
  } else {
    hotAPI.reload("data-v-eb375740", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
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
      smsText: '获取验证码',
      showNew: false,
      showConfirm: false,
      isDisabled: false,
      form: {
        telephone: '',
        verifyCode: '',
        newPassword: '',
        confirmPassword: ''
      }
    };
  },

  methods: {
    myInput1: function myInput1(val) {
      var value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        var str = this.form.newPassword;
        var i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.newPassword = str;
      }
    },
    myInput2: function myInput2(val) {
      var value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        var str = this.form.confirmPassword;
        var i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.confirmPassword = str;
      }
    },
    updatePass: function updatePass() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.form.telephone) {
                  _context.next = 3;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '手机号不能为空'
                });
                return _context.abrupt('return');

              case 3:
                if (_this.form.verifyCode) {
                  _context.next = 6;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '验证码不能为空'
                });
                return _context.abrupt('return');

              case 6:
                if (!(_this.form.newPassword.length < 6 || _this.form.confirmPassword.length > 18)) {
                  _context.next = 9;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '请输入6-18位密码'
                });
                return _context.abrupt('return');

              case 9:
                if (!(_this.form.newPassword !== _this.form.confirmPassword)) {
                  _context.next = 12;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '两次密码输入不一致，请重新输入'
                });
                return _context.abrupt('return');

              case 12:
                _context.prev = 12;
                _context.next = 15;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["b" /* checkCode */])({
                  telephone: _this.form.telephone,
                  verifyCode: _this.form.verifyCode,
                  password: _this.form.newPassword
                });

              case 15:
                res = _context.sent;

                if (res.code === 0) {
                  _this.$notify({
                    type: 'success',
                    message: '密码修改成功,请重新登录'
                  });
                  wx.navigateBack({
                    delta: 1
                  });
                }
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](12);

                _this.$notify({
                  type: 'danger',
                  message: _context.t0.message
                });

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[12, 19]]);
      }))();
    },

    // async blur () {
    //   if (this.form.verifyCode) {
    //     try {
    //       const res = await checkCode({telephone: this.form.telephone, verifyCode: this.form.verifyCode})
    //       if (res.code === 0) {
    //         console.log('验证码可用')
    //       }
    //     } catch (e) {
    //       this.$notify({
    //         type: 'danger',
    //         message: e.message
    //       })
    //     }
    //   }
    // },
    sendSms: function sendSms() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var count, timer, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.isDisabled) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return', false);

              case 4:
                _this2.isDisabled = true;
                count = 60;

                _this2.smsText = '重新发送' + count;
                timer = setInterval(function () {
                  count--;
                  _this2.smsText = '重新发送' + count;
                  if (count <= 0) {
                    clearInterval(timer);
                    _this2.smsText = '获取验证码';
                    _this2.isDisabled = false;
                  }
                }, 1000);
                _context2.prev = 8;
                _context2.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["t" /* sendCode */])({ telephone: _this2.form.telephone, type: 2 });

              case 11:
                res = _context2.sent;

                if (res.code === 0) {
                  console.log('发送成功');
                }
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2['catch'](8);

                _this2.$notify({
                  type: 'danger',
                  message: _context2.t0.message
                });

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[8, 15]]);
      }))();
    }
  }
});

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "forgetPass"
  }, [_c('div', {
    staticClass: "tel"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.telephone),
      expression: "form.telephone"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入手机号",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.telephone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.telephone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "smsCode"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.verifyCode),
      expression: "form.verifyCode"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入验证码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.verifyCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.verifyCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "smsText",
    class: {
      'disabled': _vm.isDisabled
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.sendSms
    }
  }, [_vm._v(_vm._s(_vm.smsText))])]), _vm._v(" "), _c('div', {
    staticClass: "newPass"
  }, [(_vm.showNew) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.newPassword),
      expression: "form.newPassword"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入新密码（6-18位）",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.form.newPassword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.newPassword = $event.target.value
      }, _vm.myInput1]
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.showNew) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.newPassword),
      expression: "form.newPassword"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入新密码（6-18位）",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.form.newPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.newPassword = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('i', {
    class: {
      'showNew': _vm.showNew
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.showNew = !_vm.showNew
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "confirmPass"
  }, [(_vm.showConfirm) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.confirmPassword),
      expression: "form.confirmPassword"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请再次输入新密码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '6'
    },
    domProps: {
      "value": (_vm.form.confirmPassword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.confirmPassword = $event.target.value
      }, _vm.myInput2]
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.showConfirm) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.confirmPassword),
      expression: "form.confirmPassword"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请再次输入新密码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '7'
    },
    domProps: {
      "value": (_vm.form.confirmPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.confirmPassword = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('i', {
    class: {
      'showConfirm': _vm.showConfirm
    },
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.showConfirm = !_vm.showConfirm
      }
    }
  })], 1), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.updatePass
    }
  }, [_vm._v("确定修改")]), _vm._v(" "), _c('van-notify', {
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
     require("vue-hot-reload-api").rerender("data-v-eb375740", esExports)
  }
}

/***/ })

},[174]);