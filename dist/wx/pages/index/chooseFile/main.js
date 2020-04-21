require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(134);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f5150ec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(140);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f5150ec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\chooseFile\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f5150ec", Component.options)
  } else {
    hotAPI.reload("data-v-5f5150ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_store_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_myScroll_vue__ = __webpack_require__(26);



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
      arr: [{
        val: 1,
        checked: false
      }],
      keyword: '',
      page: 1,
      pageSize: 7,
      imgUrl: '',
      chooseArr: [],
      fileList: [],
      fileIds: [],
      checked: false,
      savedFilePath: '',
      type: '',
      pullText: '下拉可刷新',
      releaseText: '松开立即刷新',
      loadingText: '正在刷新数据中',
      finishText: '刷新完成',
      pullDownStatus: 0,
      pullDownHeight: 60,
      transY: -40,
      ty: -40,
      isBottom: false,
      isReques: false, // 是否正在刷新
      lowerThreshold: 50, // 距离底部多少时 触发 lower
      finishEd: false,
      openSrc: '',
      imgList: []
    };
  },
  onLoad: function onLoad(options) {
    this.fileList = [];
    if (options.option) {
      this.type = 'my';
    }
    this.fileIds = [];
    this.chooseArr = [];
    this.getList();
  },

  components: {
    myScroll: __WEBPACK_IMPORTED_MODULE_5__components_myScroll_vue__["a" /* default */]
  },
  methods: {
    scrolltoupper: function scrolltoupper(isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.page = 1;
      this.getList('new');
    },
    scrolltolower: function scrolltolower() {
      console.log('到底部了');
      this.page++;
      this.getList();
    },
    onClickHide: function onClickHide() {
      console.log(111);
      this.openSrc = '';
    },
    openDocument: function openDocument(item) {
      if (item.file.url.indexOf('https') < 0) {
        item.file.url = item.file.url.replace(/http/, 'https');
      }
      this.openSrc = '';
      if (item.file.url.indexOf('.png') >= 0 || item.file.url.indexOf('.jpg') >= 0 || item.file.url.indexOf('.gif') >= 0) {
        var str = item.file.url.replace(/https/, 'http');
        this.openSrc = str;
        console.log(this.openSrc);
      } else {
        wx.getStorage({
          key: 'token',
          success: function success(res) {
            wx.showLoading({
              title: '文件加载中,请稍后'
            });
            wx.downloadFile({
              url: item.file.url,
              header: {
                'X-Token': res.data
              },
              success: function success(result) {
                wx.hideLoading();
                console.log(result);
                wx.openDocument({
                  filePath: result.tempFilePath,
                  success: function success(r) {
                    console.log(r);
                  },
                  fail: function fail(err) {
                    console.log(err);
                  }
                });
              },
              fail: function fail() {
                wx.hideLoading();
                wx.showToast({
                  title: '文件加载失败',
                  icon: 'none',
                  duration: 2000
                });
              }
            });
          }
        });
      }
    },
    uploadFile: function uploadFile(path, token, name) {
      var _this = this;
      console.log(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()({
        url: 'https://suji.learndar.com/api/mini/common/uploadFile', // 仅为示例，非真实的接口地址
        filePath: path,
        name: 'file',
        formData: {
          'token': token
        }
      }));
      wx.uploadFile({
        url: 'https://suji.learndar.com/api/mini/common/uploadFile', // 仅为示例，非真实的接口地址
        filePath: path,
        name: 'file',
        formData: {
          'token': token,
          'fileName': name
        },
        success: function success(res) {
          console.log(res);
          var data = JSON.parse(res.data);
          console.log(data);
          if (data.code === 0) {
            _this.fileIds.push(data.fileId);
            _this.chooseArr.push({
              fileName: name,
              fileUuid: data.fileId
            });
            console.log('id列表');
            console.log(_this.fileIds);
            if (_this.type === 'my') {
              __WEBPACK_IMPORTED_MODULE_4__utils_store_js__["a" /* default */].commit('SET_MYFILELIST', JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(_this.chooseArr)));
            } else {
              __WEBPACK_IMPORTED_MODULE_4__utils_store_js__["a" /* default */].commit('SET_FILEIDS', JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(_this.fileIds)));
              __WEBPACK_IMPORTED_MODULE_4__utils_store_js__["a" /* default */].commit('SET_FILELIST', JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(_this.chooseArr)));
            }
            wx.navigateBack({
              delta: 1
            });
          }
        }
      });
    },
    getChat: function getChat() {
      var _this = this;
      wx.chooseMessageFile({
        count: 10,
        type: 'file',
        success: function success(res) {
          var _this2 = this;

          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var token;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // tempFilePath可以作为img标签的src属性显示图片
                    // const tempFilePaths = res.tempFilePaths
                    token = '';

                    wx.getStorage({
                      key: 'token',
                      success: function success(result) {
                        token = result.data;
                        var arr = res.tempFiles;
                        arr.forEach(function (item) {
                          _this.uploadFile(item.path, token, item.name);
                        });
                      }
                    });

                  case 2:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }))();
        },
        fail: function fail() {
          this.$notify({
            type: 'danger',
            message: '文件获取失败'
          });
        }
      });
    },
    saveData: function saveData() {
      console.log(this.chooseArr);
      if (this.type === 'my') {
        __WEBPACK_IMPORTED_MODULE_4__utils_store_js__["a" /* default */].commit('SET_MYFILELIST', JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.chooseArr)));
      } else {
        __WEBPACK_IMPORTED_MODULE_4__utils_store_js__["a" /* default */].commit('SET_FILEIDS', JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.fileIds)));
        __WEBPACK_IMPORTED_MODULE_4__utils_store_js__["a" /* default */].commit('SET_FILELIST', JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.chooseArr)));
      }
      wx.navigateBack({
        delta: 1
      });
    },
    checkboxChange: function checkboxChange(item) {
      var _this3 = this;

      item.isCheck = !item.isCheck;
      if (this.fileIds.includes(item.fileUuid)) {
        this.fileIds.forEach(function (tmp, index) {
          if (tmp === item.fileUuid) {
            _this3.fileIds.splice(index, 1);
            _this3.chooseArr.splice(index, 1);
            return false;
          }
        });
      } else {
        this.fileIds.push(item.fileUuid);
        this.chooseArr.push(item);
        console.log(this.chooseArr);
      }
    },
    sizeFormat: function sizeFormat(size) {
      return (size / 1000).toFixed(2);
    },
    getList: function getList(isNew) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__["l" /* getMyFileList */])({ keyWords: _this4.keyword, page: _this4.page, pageSize: _this4.pageSize });

              case 3:
                res = _context2.sent;

                if (res.code === 0) {
                  if (isNew) {
                    _this4.fileList = res.data.records;
                  } else {
                    _this4.fileList = _this4.fileList.concat(res.data.records);
                  }
                  if (res.data.records.length < _this4.size) {
                    _this4.isBottom = true;
                  }
                  if (isNew === 'new') {
                    _this4.ty = -40;
                    _this4.animateStatus = true;
                    _this4.isReques = false;
                    _this4.finishEd = true;
                    setTimeout(function () {
                      _this4.finishEd = false;
                    }, 1000);
                  }
                  _this4.imgList = [];
                  _this4.requested = true;
                  if (_this4.fileList.length > 0) {
                    _this4.fileList.forEach(function (item) {
                      item.size = _this4.sizeFormat(item.file.size);
                      if (item.file.url.indexOf('.png') >= 0 || item.file.url.indexOf('.jpg') >= 0 || item.file.url.indexOf('.gif') >= 0) {
                        // let str = item.file.url.replace(/http/, 'https')
                        _this4.imgList.push(item.file.url);
                        console.log(_this4.imgList);
                      }
                    });
                  }
                }
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.log(111);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chooseFile"
  }, [_c('div', {
    staticClass: "tab"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "chat"
  }, [_c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.getChat
    }
  }, [_vm._v("聊天文件")])])]), _vm._v(" "), _c('div', {
    staticClass: "searchWrap"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('i'), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索文件",
      "placeholder-style": "font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }, _vm.getList]
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "isOk",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.saveData
    }
  }, [_vm._v("确定")])]), _vm._v(" "), _c('div', {
    staticClass: "listWrap"
  }, [_c('my-scroll', {
    attrs: {
      "pullText": _vm.pullText,
      "releaseText": _vm.releaseText,
      "loadingText": _vm.loadingText,
      "finishText": _vm.finishText,
      "isReques": _vm.isReques,
      "finishEd": _vm.finishEd,
      "isBottom": _vm.isBottom,
      "tranY": _vm.tranY,
      "ty": _vm.ty,
      "fileList": _vm.fileList,
      "lowerThreshold": _vm.lowerThreshold,
      "eventid": '5',
      "mpcomid": '1'
    },
    on: {
      "scrolltoupper": _vm.scrolltoupper,
      "scrolltolower": _vm.scrolltolower
    }
  }, [_c('template', {
    attrs: {
      "mpcomid": '0'
    },
    slot: "loading"
  }, [_c('p', {
    staticClass: "loading"
  })], 1), _vm._v(" "), _c('ul', _vm._l((_vm.fileList), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('div', {
      staticClass: "information",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.openDocument(item)
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.fileName))]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('span', {
      staticClass: "saveTo"
    }, [_vm._v(_vm._s(item.source))])]), _vm._v(" "), _c('div', {
      staticClass: "fromWrap"
    }, [_c('span', {
      staticClass: "size"
    }, [_vm._v("大小： " + _vm._s(item.size))])])]), _vm._v(" "), _c('div', {
      staticClass: "check",
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.checkboxChange(item)
        }
      }
    }, [_c('i', {
      class: {
        'checkActive': item.isCheck
      }
    })], 1)])
  }))], 2)], 1), _vm._v(" "), (_vm.openSrc) ? _c('div', {
    staticClass: "zhezhao"
  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.imgList), function(tmp, idx) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.openSrc === tmp),
        expression: "openSrc === tmp"
      }],
      key: idx,
      staticClass: "imgWrap"
    }, [_c('img', {
      attrs: {
        "src": tmp,
        "alt": "",
        "eventid": '6_' + idx
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.onClickHide($event)
        },
        "load": _vm.imgLoad
      }
    })])
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '2'
    }
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "collection"
  }, [_c('span', [_vm._v("收藏文件")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f5150ec", esExports)
  }
}

/***/ })

},[133]);