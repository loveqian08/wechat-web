require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(170);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ca94d4a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(173);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(171)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ca94d4a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\initPage\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ca94d4a", Component.options)
  } else {
    hotAPI.reload("data-v-9ca94d4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  onLaunch: function onLaunch(shareTicket) {
    console.log('初始化了啊');
    console.log(shareTicket);
  },
  onLoad: function onLoad(options) {
    var token = '';
    wx.getStorage({
      key: 'token',
      success: function success(res) {
        console.log(res);
        token = res.data;
        if (token) {
          console.log('进主页');
          console.log(options);
          if (options.url) {
            var url = decodeURIComponent(options.url);
            console.log(url);
            var newUrl = url.split('?')[0];
            var par = url.split('?')[1];
            var parOne = par.split('&&')[0];
            var parTwo = par.split('&&')[1];
            console.log(parOne.split('=')[1], parTwo.split('=')[1]);
            try {
              wx.setStorageSync('activeIdx', parOne.split('=')[1]);
              wx.setStorageSync('filePath', parTwo.split('=')[1]);
              wx.switchTab({
                url: newUrl
              });
            } catch (e) {
              console.log(e);
            }
          } else {
            try {
              wx.setStorageSync('activeIdx', '');
              wx.setStorageSync('filePath', '');
              wx.switchTab({
                url: '../index/main'
              });
            } catch (e) {
              console.log(e);
            }
          }
        } else {
          console.log('token不存在');
        }
      },
      fail: function fail(err) {
        console.log('未获取到token');
        console.log(err);
        console.log('去登录');
        if (options.url) {
          console.log('有url');
          var url = decodeURIComponent(options.url);
          console.log(url);
          var newUrl = url.split('?')[0];
          console.log(newUrl);
          var par = url.split('?')[1];
          var parOne = par.split('&&')[0];
          var parTwo = par.split('&&')[1];
          console.log(parOne.split('=')[1], parTwo.split('=')[1]);
          try {
            wx.setStorageSync('activeIdx', parOne.split('=')[1]);
            wx.setStorageSync('filePath', parTwo.split('=')[1]);
            wx.redirectTo({
              url: '../login/main?url=' + newUrl
            });
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log('没有url');
          try {
            wx.setStorageSync('activeIdx', '');
            wx.setStorageSync('filePath', '');
            wx.redirectTo({
              url: '../login/main'
            });
          } catch (e) {
            console.log(e);
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9ca94d4a", esExports)
  }
}

/***/ })

},[169]);