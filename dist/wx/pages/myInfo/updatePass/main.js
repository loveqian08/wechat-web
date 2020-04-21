require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(205);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_009cb52e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(208);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(206)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-009cb52e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_009cb52e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myInfo\\updatePass\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-009cb52e", Component.options)
  } else {
    hotAPI.reload("data-v-009cb52e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      showNew: false,
      showConfirm: false,
      showOld: false,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      isOk: false
    };
  },

  methods: {
    blur1: function blur1(val) {
      var value = val.mp.detail.value;
      console.log(value);
      if (this.form.oldPassword && this.form.newPassword && this.form.confirmPassword) {
        this.isOk = true;
      }
      console.log(escape(value).indexOf('%u'));
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        var str = this.form.oldPassword;
        var i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.oldPassword = str;
      }
    },
    blur2: function blur2(val) {
      var value = val.mp.detail.value;
      if (this.form.oldPassword && this.form.newPassword && this.form.confirmPassword) {
        this.isOk = true;
      }
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
    blur3: function blur3(val) {
      var value = val.mp.detail.value;
      if (this.form.oldPassword && this.form.newPassword && this.form.confirmPassword) {
        this.isOk = true;
      }
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
    updateData: function updateData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var reg, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reg = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/);

                if (_this.form.oldPassword) {
                  _context.next = 6;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '原密码不可为空'
                });
                return _context.abrupt('return', false);

              case 6:
                if (_this.form.newPassword) {
                  _context.next = 11;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '新密码不可为空'
                });
                return _context.abrupt('return', false);

              case 11:
                if (!(_this.form.newPassword !== _this.form.confirmPassword)) {
                  _context.next = 16;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '两次密码输入不一致，请重新输入'
                });
                return _context.abrupt('return', false);

              case 16:
                if (!(_this.form.newPassword.length < 6 || _this.form.newPassword.length > 18)) {
                  _context.next = 21;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '请输入正确长度的密码'
                });
                return _context.abrupt('return', false);

              case 21:
                if (reg.test(_this.form.newPassword)) {
                  _context.next = 24;
                  break;
                }

                _this.$notify({
                  type: 'danger',
                  message: '密码必须是数字、英文、特殊符号且必须包含数字及英文的6-18位字符'
                });
                return _context.abrupt('return', false);

              case 24:
                _context.prev = 24;
                _context.next = 27;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["x" /* updatePass */])({
                  oldPassword: _this.form.oldPassword,
                  newPassword: _this.form.newPassword
                });

              case 27:
                res = _context.sent;

                if (res.code === 0) {
                  __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__["a" /* default */].alert({
                    message: '密码修改成功，请重新登录'
                  }).then(function () {
                    wx.removeStorage({
                      key: 'token',
                      success: function success(result) {
                        wx.reLaunch({
                          url: '../../login/main'
                        });
                      }
                    });
                  });
                }
                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t0 = _context['catch'](24);

                _this.$notify({
                  type: 'danger',
                  message: _context.t0.message
                });

              case 34:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[24, 31]]);
      }))();
    }
  }
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "passWrap"
  }, [_c('div', {
    staticClass: "oldPass"
  }, [(_vm.showOld) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.oldPassword),
      expression: "form.oldPassword"
    }],
    staticStyle: {
      "ime-mode": "disabled"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入原密码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.oldPassword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.oldPassword = $event.target.value
      }, _vm.blur1]
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.showOld) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.oldPassword),
      expression: "form.oldPassword"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入原密码",
      "placeholder-style": "font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.oldPassword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.oldPassword = $event.target.value
      }, _vm.blur]
    }
  }) : _vm._e(), _vm._v(" "), _c('i', {
    class: {
      'showOld': _vm.showOld
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showOld = !_vm.showOld
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "newPass"
  }, [(_vm.showNew) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.newPassword),
      expression: "form.newPassword"
    }],
    staticStyle: {
      "ime-mode": "disabled"
    },
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
      }, _vm.blur2]
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
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.newPassword = $event.target.value
      }, _vm.blur]
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
    staticStyle: {
      "ime-mode": "disabled"
    },
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
      }, _vm.blur3]
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
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.confirmPassword = $event.target.value
      }, _vm.blur]
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
    class: {
      'isOk': _vm.isOk
    },
    attrs: {
      "disabled": !_vm.isOk,
      "eventid": '9'
    },
    on: {
      "click": _vm.updateData
    }
  }, [_vm._v("确定修改")]), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-009cb52e", esExports)
  }
}

/***/ })

},[204]);