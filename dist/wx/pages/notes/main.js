require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(215);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_017646fb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(230);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-017646fb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_017646fb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\notes\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-017646fb", Component.options)
  } else {
    hotAPI.reload("data-v-017646fb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_myNote_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_audioNote_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_myFile_vue__ = __webpack_require__(226);
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
      activeIdx: 1,
      shareObj: {},
      popShow: false
    };
  },

  components: {
    myNote: __WEBPACK_IMPORTED_MODULE_0__components_myNote_vue__["a" /* default */],
    audioNote: __WEBPACK_IMPORTED_MODULE_1__components_audioNote_vue__["a" /* default */],
    myFile: __WEBPACK_IMPORTED_MODULE_2__components_myFile_vue__["a" /* default */]
  },
  onLoad: function onLoad(options) {
    var _this = this;
    console.log('显示了');
    console.log(options);
    try {
      var active = wx.getStorageSync('activeIdx');
      var filePath = wx.getStorageSync('filePath');
      console.log(active, filePath);
      if (active && filePath) {
        console.log('开始打开文档');
        _this.activeIdx = Number(active);
        wx.getStorage({
          key: 'token',
          success: function success(res) {
            console.log(456);
            wx.showLoading({
              title: '文件加载中,请稍后'
            });
            wx.downloadFile({
              url: filePath,
              header: {
                'X-Token': res.data
              },
              success: function success(result) {
                wx.hideLoading();
                console.log(789);
                console.log(result);
                // _this.shareObj.path = result.tempFilePath
                wx.openDocument({
                  filePath: result.tempFilePath,
                  success: function success(r) {
                    console.log('打开文件成功');
                    console.log(r);
                  },
                  fail: function fail(err) {
                    console.log('打开文件失败');
                    console.log(err);
                  }
                });
              },
              fail: function fail(err) {
                console.log(err);
                wx.hideLoading();
                wx.showToast({
                  title: '文件加载失败',
                  icon: 'none',
                  duration: 2000
                });
              }
            });
          },
          fail: function fail(err) {
            console.log('获取缓存失败');
            console.log(err);
          }
        });
        // wx.openDocument({
        //   filePath: filePath,
        //   success: function (res) {
        //     console.log('打开文档成功')
        //     _this.activeIdx = Number(active)
        //   },
        //   fail: function (err) {
        //     console.log('打开文档失败')
        //     console.log(err)
        //   }
        // })
      }
    } catch (e) {
      console.log('获取失败');
      console.log(e);
    }
  },
  onShareAppMessage: function onShareAppMessage(option) {
    var _this = this;
    var shareObj = {
      title: this.shareObj.name,
      path: '/pages/initPage/main',
      success: function success() {
        _this.popShow = false;
      },
      complete: function complete() {
        _this.popShow = false;
      }
    };
    if (option.from === 'button') {
      console.log(option.target);
      var url = encodeURIComponent('/pages/notes/main?activeIdx=' + this.shareObj.activeIdx + '&&filePath=' + this.shareObj.path);
      shareObj.path = '/pages/initPage/main?url=' + url;
    }
    console.log(shareObj);
    return shareObj;
  },

  methods: {
    shareData: function shareData(obj) {
      this.shareObj = obj;
      console.log('取到数据了');
      console.log(obj);
    },
    changeTab: function changeTab(index) {
      this.activeIdx = index;
    }
  }
  // onShareAppMessage (option) {
  //   let shareObj = {
  //     title: this.shareObj.name,
  //     path: '/pages/notes/main'
  //   }
  //   if (option.from === 'button') {
  //     console.log(option.target)
  //     shareObj.path = '/pages/notes/main?activeIdx=3&&filePath=' + this.shareObj.path
  //   }
  //   console.log(shareObj)
  //   return shareObj
  // }
});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_myNote_vue__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_31cbee99_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_myNote_vue__ = __webpack_require__(221);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(219)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31cbee99"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_myNote_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_31cbee99_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_myNote_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\myNote.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myNote.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31cbee99", Component.options)
  } else {
    hotAPI.reload("data-v-31cbee99", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_myScroll_vue__ = __webpack_require__(26);


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
      list: [],
      par: {
        keyWords: '',
        type: 1,
        isPassword: 0,
        page: 1,
        pageSize: 10
      },
      requested: false,
      actionIdx: null,
      noData: __webpack_require__(27),
      isOpen: false,
      popShow: false,
      copyText: '',
      pullText: '下拉可刷新',
      releaseText: '松开立即刷新',
      loadingText: '正在刷新数据中',
      finishText: '刷新完成',
      pullDownStatus: 0,
      pullDownHeight: 60,
      transY: -40,
      ty: -40,
      upperThreshold: 50, // 距离顶部多少时 触发 upper
      lowerThreshold: 50, // 距离底部多少时 触发 lower
      angle: 0.5, // 指定角度内可以移动
      refurbish: true, // 是否开启下拉刷新
      startClientX: 0,
      startClientY: 0,
      animateStatus: true,
      isBottom: false,
      isReques: false, // 是否正在刷新
      finishEd: false
    };
  },

  components: {
    myScroll: __WEBPACK_IMPORTED_MODULE_4__components_myScroll_vue__["a" /* default */]
  },
  onLoad: function onLoad() {
    this.list = [];
    this.getData();
  },

  methods: {
    scrolltoupper: function scrolltoupper(isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.par.page = 1;
      this.getData('new');
    },
    scrolltolower: function scrolltolower() {
      console.log('到底部了');
      this.par.page++;
      this.getData();
    },

    // getMore () {
    //    wx.navigateTo({
    //     url: 'meetingRecord/main?meetingId=' + item.meetingId
    //   })
    // },
    toDetail: function toDetail(uuid) {
      wx.navigateTo({
        url: '/pages/notes/noteDetail/main?uuid=' + uuid
      });
    },
    copyUrl: function copyUrl() {
      wx.setClipboardData({
        data: this.copyText,
        success: function success(res) {
          // wx.getClipboardData({
          //   success: function (result) {
          //     console.log(result.data) // data
          //   }
          // })
          wx.showToast({
            title: '复制链接成功',
            icon: 'success',
            duration: 2000
          });
        }
      });
      console.log('复制成功');
    },
    share: function share(item) {
      var _this = this;
      this.shareObj = {
        name: item.name,
        activeIdx: 1,
        path: 'https://suji.learndar.com/api/mini/note/export/' + item.uuid
      };
      _this.popShow = true;
      this.copyText = 'https://suji.learndar.com/api/mini/note/export/' + item.uuid;
      _this.$emit('shareData', _this.shareObj);
      // wx.getStorage({
      //   key: 'token',
      //   success (res) {
      //     console.log(456)
      //     wx.downloadFile({
      //       url: 'https://suji.learndar.com/api/mini/note/export/' + item.uuid,
      //       header: {
      //         'X-Token': res.data
      //       },
      //       success (result) {
      //         console.log(789)
      //         console.log(result)
      //         _this.popShow = true
      //         _this.shareObj.path = result.tempFilePath
      //         console.log(_this.shareObj)
      //         _this.$emit('shareData', _this.shareObj)
      //         // wx.openDocument({
      //         //   filePath: result.tempFilePath,
      //         //   success (r) {
      //         //     console.log(r)
      //         //   },
      //         //   fail (err) {
      //         //     console.log(err)
      //         //   }
      //         // })
      //         // wx.saveFile({
      //         //   tempFilePath: result.tempFilePath,
      //         //   success (tmp) {
      //         //     console.log(tmp)
      //         //     _this.popShow = true
      //         //     console.log(_this.popShow)
      //         //     // _this.shareObj.path = tmp.savedFilePath
      //         //     // _this.$emit('shareData', _this.shareObj)
      //         //     wx.openDocument({
      //         //       filePath: tmp.savedFilePath,
      //         //       success (r) {
      //         //         console.log(r)
      //         //       },
      //         //       fail (err) {
      //         //         console.log(err)
      //         //       }
      //         //     })
      //         //   },
      //         //   fail (e) {
      //         //     console.log(e)
      //         //   }
      //         // })
      //       }
      //     })
      //   }
      // })
    },
    deleteMeeting: function deleteMeeting(uuid) {
      var _this2 = this;

      var _this = this;
      __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__["a" /* default */].confirm({
        message: '删除笔记后将不可恢复, 是否确定删除？'
      }).then(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["f" /* deleteNote */])({ uuid: uuid }, {});

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  _this.$notify({ type: 'success', message: '删除成功' });
                  _this.getData('mastNew');
                  _this.isOpen = false;
                }
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);
                _this.$notify({ type: 'danger', message: _context.t0.message });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 7]]);
      }))).catch(function () {
        // on cancel
      });
    },
    exportMeet: function exportMeet() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(111);

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    openAction: function openAction(index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index;
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    getData: function getData(isNew) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["n" /* getNoteList */])(_this4.par);

              case 3:
                res = _context3.sent;

                if (res.code === 0) {
                  if (isNew) {
                    _this4.list = res.data.records;
                  } else {
                    _this4.list = _this4.list.concat(res.data.records);
                  }
                  console.log(_this4.list);
                  if (res.data.records.length < _this4.par.pageSize) {
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
                  _this4.requested = true;
                }
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);

                _this4.$notify({
                  type: 'danger',
                  message: _context3.t0.message
                });

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myNote"
  }, [_c('div', {
    staticClass: "searchWrap"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('i'), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.par.keyWords),
      expression: "par.keyWords"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索笔记",
      "placeholder-style": "font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.par.keyWords)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.par.keyWords = $event.target.value
      }, _vm.getData]
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "contentWrap"
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
      "fileList": _vm.list,
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
  })], 1), _vm._v(" "), _c('ul', _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item.uuid)
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [(item.name) ? _c('span', [_vm._v(_vm._s(item.name))]) : _c('span', [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('i', {
      staticClass: "more",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.openAction(index)
        }
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.actionIdx === index && _vm.isOpen),
        expression: "actionIdx === index && isOpen"
      }],
      staticClass: "action"
    }, [_c('span', {
      staticClass: "delete",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deleteMeeting(item.uuid)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("删除笔记")])], 1), _vm._v(" "), _c('span', {
      staticClass: "line"
    }), _vm._v(" "), _c('span', {
      staticClass: "detail",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.share(item)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("分享到微信")])], 1)])])], 1), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.updateTime))])]), _vm._v(" "), (item.memo) ? _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.memo))]) : _vm._e()])
  }))], 2), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.popShow,
      "position": "bottom",
      "custom-style": "height: 30%;",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "shareChate"
  }, [_c('button', {
    attrs: {
      "data-name": "shareBtn",
      "open-type": "share"
    }
  }), _vm._v(" "), _c('span', [_vm._v("发送给微信好友")])], 1), _vm._v(" "), _c('div', {
    staticClass: "shareUrl"
  }, [_c('button', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.copyUrl
    }
  }), _vm._v(" "), _c('span', [_vm._v("复制链接")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cancel",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.popShow = false
      }
    }
  }, [_vm._v("取    消")])]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '4'
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31cbee99", esExports)
  }
}

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_audioNote_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_515fad46_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_audioNote_vue__ = __webpack_require__(225);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-515fad46"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_audioNote_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_515fad46_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_audioNote_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\audioNote.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] audioNote.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-515fad46", Component.options)
  } else {
    hotAPI.reload("data-v-515fad46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_myScroll_vue__ = __webpack_require__(26);


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
      list: [],
      par: {
        keyWords: '',
        type: 2,
        isPassword: 0,
        page: 1,
        pageSize: 10
      },
      requested: false,
      noData: __webpack_require__(27),
      actionIdx: null,
      isOpen: false,
      popShow: false,
      copyText: '',
      pullText: '下拉可刷新',
      releaseText: '松开立即刷新',
      loadingText: '正在刷新数据中',
      finishText: '刷新完成',
      pullDownStatus: 0,
      pullDownHeight: 60,
      transY: -40,
      ty: -40,
      upperThreshold: 50, // 距离顶部多少时 触发 upper
      lowerThreshold: 50, // 距离底部多少时 触发 lower
      angle: 0.5, // 指定角度内可以移动
      refurbish: true, // 是否开启下拉刷新
      startClientX: 0,
      startClientY: 0,
      animateStatus: true,
      isBottom: false,
      isReques: false, // 是否正在刷新
      finishEd: false
    };
  },
  onLoad: function onLoad() {
    this.list = [];
    this.getData();
  },

  components: {
    myScroll: __WEBPACK_IMPORTED_MODULE_4__components_myScroll_vue__["a" /* default */]
  },
  methods: {
    scrolltoupper: function scrolltoupper(isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.par.page = 1;
      this.getData('new');
    },
    scrolltolower: function scrolltolower() {
      console.log('到底部了');
      this.par.page++;
      this.getData();
    },

    // getMore () {
    //    wx.navigateTo({
    //     url: 'meetingRecord/main?meetingId=' + item.meetingId
    //   })
    // },
    copyUrl: function copyUrl() {
      wx.setClipboardData({
        data: this.copyText,
        success: function success(res) {
          // wx.getClipboardData({
          //   success: function (result) {
          //     console.log(result.data) // data
          //   }
          // })
          wx.showToast({
            title: '复制链接成功',
            icon: 'success',
            duration: 2000
          });
        }
      });
      console.log('复制成功');
    },
    share: function share(item) {
      var _this = this;
      this.shareObj = {
        name: item.name,
        activeIdx: 2,
        path: 'https://suji.learndar.com/api/mini/note/export/' + item.uuid
      };
      this.popShow = true;
      this.copyText = 'https://suji.learndar.com/api/mini/note/export/' + item.uuid;
      _this.$emit('shareData', _this.shareObj);
      // wx.getStorage({
      //   key: 'token',
      //   success (res) {
      //     console.log(456)
      //     wx.downloadFile({
      //       url: 'https://suji.learndar.com/api/mini/note/export/' + item.uuid,
      //       header: {
      //         'X-Token': res.data
      //       },
      //       success (result) {
      //         console.log(789)
      //         console.log(result)
      //         _this.popShow = true
      //         _this.shareObj.path = result.tempFilePath
      //         _this.$emit('shareData', _this.shareObj)
      //         // wx.openDocument({
      //         //   filePath: result.tempFilePath,
      //         //   success (r) {
      //         //     console.log(r)
      //         //   }
      //         // })
      //         wx.saveFile({
      //           tempFilePath: result.tempFilePath,
      //           success (tmp) {
      //             console.log(tmp)
      //             _this.popShow = true
      //             console.log(_this.popShow)
      //             // _this.shareObj.path = tmp.savedFilePath
      //             // _this.$emit('shareData', _this.shareObj)
      //             wx.openDocument({
      //               filePath: tmp.savedFilePath,
      //               success (r) {
      //                 console.log(r)
      //               },
      //               fail (err) {
      //                 console.log(err)
      //               }
      //             })
      //           },
      //           fail (e) {
      //             console.log(e)
      //           }
      //         })
      //       }
      //     })
      //   }
      // })
    },
    toDetail: function toDetail(uuid) {
      wx.navigateTo({
        url: '/pages/notes/audioDetail/main?uuid=' + uuid
      });
    },
    deleteMeeting: function deleteMeeting(uuid) {
      var _this2 = this;

      var _this = this;
      __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__["a" /* default */].confirm({
        message: '删除笔记后将不可恢复, 是否确定删除？'
      }).then(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["f" /* deleteNote */])({ uuid: uuid }, {});

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  _this.$notify({ type: 'success', message: '删除成功' });
                  _this.getData('mastNew');
                  _this.isOpen = false;
                }
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);
                _this2.$notify({ type: 'danger', message: _context.t0.message });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 7]]);
      }))).catch(function () {
        // on cancel
      });
    },
    exportMeet: function exportMeet() {
      console.log('暂时无法导出');
    },
    openAction: function openAction(index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index;
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    getData: function getData(isNew) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["n" /* getNoteList */])(_this3.par);

              case 3:
                res = _context2.sent;

                if (res.code === 0) {
                  if (isNew) {
                    _this3.list = res.data.records;
                  } else {
                    _this3.list = _this3.list.concat(res.data.records);
                  }
                  console.log(_this3.list);
                  if (res.data.records.length < _this3.par.pageSize) {
                    _this3.isBottom = true;
                  }
                  if (isNew === 'new') {
                    _this3.ty = -40;
                    _this3.animateStatus = true;
                    _this3.isReques = false;
                    _this3.finishEd = true;
                    setTimeout(function () {
                      _this3.finishEd = false;
                    }, 1000);
                  }
                  _this3.requested = true;
                }
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.log('aaaaa');
                _this3.$notify({
                  type: 'danger',
                  message: _context2.t0.message
                });

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myNote"
  }, [_c('div', {
    staticClass: "searchWrap"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('i'), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.par.keyWords),
      expression: "par.keyWords"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索笔记",
      "placeholder-style": "font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.par.keyWords)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.par.keyWords = $event.target.value
      }, _vm.getData]
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "contentWrap"
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
      "fileList": _vm.list,
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
  })], 1), _vm._v(" "), _c('ul', _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item.uuid)
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [(item.name) ? _c('span', [_vm._v(_vm._s(item.name))]) : _c('span', [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('i', {
      staticClass: "more",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.openAction(index)
        }
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.actionIdx === index && _vm.isOpen),
        expression: "actionIdx === index && isOpen"
      }],
      staticClass: "action"
    }, [_c('span', {
      staticClass: "delete",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deleteMeeting(item.uuid)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("删除笔记")])], 1), _vm._v(" "), _c('span', {
      staticClass: "line"
    }), _vm._v(" "), _c('span', {
      staticClass: "detail",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.share(item)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("分享到微信")])], 1)])])], 1), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.updateTime))])]), _vm._v(" "), (item.memo) ? _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.memo))]) : _vm._e()])
  }))], 2), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.popShow,
      "position": "bottom",
      "custom-style": "height: 30%;",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "shareChate"
  }, [_c('button', {
    attrs: {
      "data-name": "shareBtn",
      "open-type": "share"
    }
  }), _vm._v(" "), _c('span', [_vm._v("发送给微信好友")])], 1), _vm._v(" "), _c('div', {
    staticClass: "shareUrl"
  }, [_c('button', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.copyUrl
    }
  }), _vm._v(" "), _c('span', [_vm._v("复制链接")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cancel",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.popShow = false
      }
    }
  }, [_vm._v("取    消")])]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '4'
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-515fad46", esExports)
  }
}

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_myFile_vue__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b09341ba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_myFile_vue__ = __webpack_require__(229);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(227)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b09341ba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_myFile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b09341ba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_myFile_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\myFile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myFile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b09341ba", Component.options)
  } else {
    hotAPI.reload("data-v-b09341ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_vant_webapp_dialog_dialog__ = __webpack_require__(17);
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




// import baseUrl from '@/utils/baseUrl.js'
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      arr: [{
        val: 1,
        checked: false
      }],
      refreshing: true, // 是否正在刷新
      popShow: false,
      openSrc: '',
      noData: __webpack_require__(27),
      keyWords: '',
      imgUrl: '',
      chooseArr: [],
      fileList: [],
      scrollTop: 0,
      fileIds: [],
      copyText: '',
      pullText: '下拉可刷新',
      releaseText: '松开立即刷新',
      loadingText: '正在刷新数据中',
      finishText: '刷新完成',
      pullDownStatus: 0,
      pullDownHeight: 60,
      transY: -40,
      ty: -40,
      checked: false,
      savedFilePath: '',
      showOver: false,
      type: '',
      requested: false,
      actionIdx: 0,
      isOpen: false,
      shareObj: {},
      imgList: [],
      page: 1,
      size: 10,
      upperThreshold: 50, // 距离顶部多少时 触发 upper
      lowerThreshold: 50, // 距离底部多少时 触发 lower
      angle: 0.5, // 指定角度内可以移动
      refurbish: true, // 是否开启下拉刷新
      startClientX: 0,
      startClientY: 0,
      animateStatus: true,
      isBottom: false,
      isReques: false, // 是否正在刷新
      finishEd: false
    };
  },

  // props: {
  //   popShow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  onLoad: function onLoad() {
    this.fileList = [];
    this.getList();
  },

  components: {
    myScroll: __WEBPACK_IMPORTED_MODULE_5__components_myScroll_vue__["a" /* default */]
  },
  methods: {
    imgLoad: function imgLoad(e) {
      console.log(e);
    },
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

    // _start: function (e) { // 记录开始位置
    //   // console.log(e, '_start');
    //   console.log(e);
    //   this.startClientX = Math.abs(e.mp.changedTouches[0].clientX);
    //   this.startClientY = Math.abs(e.mp.changedTouches[0].clientY);
    // },
    // _move: function (e) { // 是否进行移动
    //   // console.log(e, '_move');
    //   if (this.refurbish) {
    //     let clientX = Math.abs(e.mp.changedTouches[0].clientX);
    //     let clientY = Math.abs(e.mp.changedTouches[0].clientY);
    //     let startClientX = this.startClientX;
    //     let startClientY = this.startClientY;
    //     let defaultAngle = this.angle;
    //     let angle = (clientX - startClientX) / (clientY - startClientY);
    //     if (Math.abs(angle) < defaultAngle) {
    //       let moveDistance = (clientY - startClientY) <= 0 ? 0 : (clientY - startClientY) / 2;
    //       if (moveDistance < 0) return false; // 阻止方向滑出
    //       this.transY = moveDistance - 40;
    //       this.animateStatus = false;
    //     }
    //   }
    // },
    // _end: function (e) { // 手势是否离开界面
    //   // console.log(e, '_end');
    //   let translateY = this.transY;
    //   // if (translateY > 50) this.triggerEvent('scrolltoupper');
    //   if (translateY > 0) {
    //     this.page = 1;
    //     this.isBottom = false;
    //     this.requested = false;
    //     this.isReques = true;
    //     this.getList('new');
    //   }
    //   this.transY = translateY > 0 ? 0 : -40;
    //   this.animateStatus = translateY > 0;
    // },
    // scroll (e) {
    //   let upperThreshold = this.upperThreshold;
    //   if (e.mp.detail.scrollTop < upperThreshold) this.refurbish = true;
    //   else this.refurbish = false;
    // },
    // 隐藏图片
    onClickHide: function onClickHide() {
      console.log(111);
      this.showOver = false;
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
        this.showOver = true;
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
    copyUrl: function copyUrl() {
      wx.setClipboardData({
        data: this.copyText,
        success: function success(res) {
          // wx.getClipboardData({
          //   success: function (result) {
          //     console.log(result.data) // data
          //   }
          // })
          wx.showToast({
            title: '复制链接成功',
            icon: 'success',
            duration: 2000
          });
        }
      });
      console.log('复制成功');
    },
    sizeFormat: function sizeFormat(size) {
      return (size / 1000).toFixed(2);
    },
    deleteMeeting: function deleteMeeting(uuid) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                __WEBPACK_IMPORTED_MODULE_4__components_vant_webapp_dialog_dialog__["a" /* default */].confirm({
                  message: '删除文件后将不可恢复, 是否确定删除？'
                }).then(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
                  var res;
                  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return Object(__WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__["e" /* deleteMyfile */])({ uuid: uuid }, {});

                        case 3:
                          res = _context.sent;

                          if (res.code === 0) {
                            _this2.$notify({
                              type: 'success',
                              message: '删除成功'
                            });
                            _this2.isOpen = false;
                            _this2.page = 1;
                            _this2.isBottom = false;
                            _this2.getList('mastNew');
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
                }))).catch(function () {
                  // on cancel
                });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    shareFile: function shareFile(item) {
      console.log(123);
      var _this = this;
      this.shareObj = {
        name: item.fileName,
        activeIdx: 3,
        path: item.file.url
      };
      _this.popShow = true;
      this.copyText = item.file.url;
      _this.$emit('shareData', _this.shareObj);
      // wx.getStorage({
      //   key: 'token',
      //   success (res) {
      //     console.log(456)
      //     console.log(item.file.url)
      //     wx.downloadFile({
      //       url: item.file.url,
      //       header: {
      //         'X-Token': res.data
      //       },
      //       success (result) {
      //         console.log(789)
      //         console.log(result)
      //         _this.shareObj.path = result.tempFilePath
      //         // wx.openDocument({
      //         //   filePath: result.tempFilePath,
      //         //   success (r) {
      //         //     console.log(r)
      //         //   }
      //         // })
      //         // wx.saveFile({
      //         //   tempFilePath: result.tempFilePath,
      //         //   success (tmp) {
      //         //     _this.popShow = true
      //         //     console.log(_this.popShow)
      //         //     _this.shareObj.path = tmp.savedFilePath
      //         //     _this.$emit('shareData', _this.shareObj)
      //         //     // wx.openDocument({
      //         //     //   filePath: tmp.savedFilePath,
      //         //     //   success (r) {
      //         //     //     console.log(r)
      //         //     //   }
      //         //     // })
      //         //   },
      //         //   fail (e) {
      //         //     console.log(e)
      //         //   }
      //         // })
      //       }
      //     })
      //   }
      // })
    },
    openAction: function openAction(index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index;
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    upData: function upData() {
      var _this = this;
      wx.chooseMessageFile({
        count: 10,
        type: 'file',
        success: function success(res) {
          var _this3 = this;

          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
            var token;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
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
                    return _context3.stop();
                }
              }
            }, _callee3, _this3);
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
    addFile: function addFile(name, fileId) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var obj, par, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                obj = wx.getStorageSync('userInfo');
                par = {
                  userUuid: obj.uuid,
                  source: 4,
                  fileName: name,
                  fileUuid: fileId,
                  memo: ''
                };
                _context4.prev = 3;
                _context4.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__["a" /* addMyfile */])(par);

              case 6:
                res = _context4.sent;

                if (res.code === 0) {
                  _this4.$notify({
                    type: 'success',
                    message: '添加成功'
                  });
                  _this4.page = 1;
                  _this4.isBottom = false;
                  _this4.getList('mastNew');
                }
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4['catch'](3);

                _this4.$notify({
                  type: 'danger',
                  message: _context4.t0.message
                });

              case 13:
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t1 = _context4['catch'](0);

                _this4.$notify({
                  type: 'danger',
                  message: _context4.t1.message
                });

              case 18:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[0, 15], [3, 10]]);
      }))();
    },
    uploadFile: function uploadFile(path, token, name) {
      var _this = this;
      console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({
        url: 'https://suji.learndar.com/api/mini/common/uploadFile', // 仅为示例，非真实的接口地址
        filePath: path,
        name: 'file',
        formData: {
          'token': token,
          'fileName': name
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
            _this.addFile(name, data.fileId);
          }
        }
      });
    },
    getList: function getList(isNew) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__["l" /* getMyFileList */])({ keyWords: _this5.keyWords, page: _this5.page, pageSize: _this5.size });

              case 3:
                res = _context5.sent;

                if (res.code === 0) {
                  if (isNew) {
                    _this5.fileList = res.data.records;
                  } else {
                    _this5.fileList = _this5.fileList.concat(res.data.records);
                  }
                  if (res.data.records.length < _this5.size) {
                    _this5.isBottom = true;
                  }
                  if (isNew === 'new') {
                    _this5.ty = -40;
                    _this5.animateStatus = true;
                    _this5.isReques = false;
                    _this5.finishEd = true;
                    setTimeout(function () {
                      _this5.finishEd = false;
                    }, 1000);
                  }
                  _this5.imgList = [];
                  _this5.requested = true;
                  if (_this5.fileList.length > 0) {
                    _this5.fileList.forEach(function (item) {
                      item.size = _this5.sizeFormat(item.file.size);
                      if (item.file.url.indexOf('.png') >= 0 || item.file.url.indexOf('.jpg') >= 0 || item.file.url.indexOf('.gif') >= 0) {
                        // let str = item.file.url.replace(/http/, 'https')
                        _this5.imgList.push(item.file.url);
                      }
                    });
                  }
                }
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5['catch'](0);

                console.log(111);

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myFileWrap"
  }, [_c('div', {
    staticClass: "searchWrap"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('i'), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyWords),
      expression: "keyWords"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索文件",
      "placeholder-style": "font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keyWords)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyWords = $event.target.value
      }, _vm.getList]
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "upLoad",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.upData
    }
  })]), _vm._v(" "), _c('div', {
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
      "eventid": '6',
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
      key: index,
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.openDocument(item)
        }
      }
    }, [_c('div', {
      staticClass: "information"
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
    }, [_vm._v("大小： " + _vm._s(item.size) + "k")])])]), _vm._v(" "), _c('div', {
      staticClass: "more",
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.openAction(index)
        }
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.actionIdx === index && _vm.isOpen),
        expression: "actionIdx === index && isOpen"
      }],
      staticClass: "action"
    }, [_c('span', {
      staticClass: "delete",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deleteMeeting(item.uuid)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("删除文件")])], 1), _vm._v(" "), _c('span', {
      staticClass: "line"
    }), _vm._v(" "), _c('span', {
      staticClass: "detail",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.shareFile(item)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("分享到微信")])], 1)])])])
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
        "eventid": '7_' + idx
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.onClickHide($event)
        },
        "load": _vm.imgLoad
      }
    })])
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.popShow,
      "position": "bottom",
      "custom-style": "height: 30%;",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "shareChate"
  }, [_c('button', {
    attrs: {
      "data-name": "shareBtn",
      "open-type": "share"
    }
  }), _vm._v(" "), _c('span', [_vm._v("发送给微信好友")])], 1), _vm._v(" "), _c('div', {
    staticClass: "shareUrl"
  }, [_c('button', {
    staticClass: "copy",
    attrs: {
      "data-clipboard-text": _vm.copyText,
      "eventid": '8'
    },
    on: {
      "click": _vm.copyUrl
    }
  }), _vm._v(" "), _c('span', [_vm._v("复制链接")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cancel",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.popShow = false
      }
    }
  }, [_vm._v("取    消")])]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '4'
    }
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b09341ba", esExports)
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "noteWrap"
  }, [_c('div', {
    staticClass: "tabHead"
  }, [_c('div', {
    staticClass: "noteWrap ali",
    class: {
      'active_li': _vm.activeIdx === 1
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.changeTab(1)
      }
    }
  }, [_c('span', {
    staticClass: "tab"
  }, [_vm._v("我的笔记")]), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIdx === 1),
      expression: "activeIdx === 1"
    }],
    staticClass: "line"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "noteWrap ali",
    class: {
      'active_li': _vm.activeIdx === 2
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.changeTab(2)
      }
    }
  }, [_c('span', {
    staticClass: "tab"
  }, [_vm._v("语音速记")]), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIdx === 2),
      expression: "activeIdx === 2"
    }],
    staticClass: "line"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "noteWrap ali",
    class: {
      'active_li': _vm.activeIdx === 3
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.changeTab(3)
      }
    }
  }, [_c('span', {
    staticClass: "tab"
  }, [_vm._v("收藏文件")]), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIdx === 3),
      expression: "activeIdx === 3"
    }],
    staticClass: "line"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.activeIdx === 1) ? _c('my-note', {
    attrs: {
      "popShow": _vm.popShow,
      "eventid": '3',
      "mpcomid": '0'
    },
    on: {
      "shareData": _vm.shareData
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activeIdx === 2) ? _c('audio-note', {
    attrs: {
      "popShow": _vm.popShow,
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "shareData": _vm.shareData
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activeIdx === 3) ? _c('my-file', {
    attrs: {
      "popShow": _vm.popShow,
      "eventid": '5',
      "mpcomid": '2'
    },
    on: {
      "shareData": _vm.shareData
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '3'
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
     require("vue-hot-reload-api").rerender("data-v-017646fb", esExports)
  }
}

/***/ })

},[214]);