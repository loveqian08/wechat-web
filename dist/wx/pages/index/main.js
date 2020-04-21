require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(147);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e967fcc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e967fcc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e967fcc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e967fcc", Component.options)
  } else {
    hotAPI.reload("data-v-5e967fcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 148:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_vant_webapp_notify_notify__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_store_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_myScroll_vue__ = __webpack_require__(26);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      actionIdx: 0,
      isOpen: false,
      keyword: '',
      page: 1,
      pageSize: 10,
      showOverLay: false,
      meetingId: null,
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
      finishEd: false,
      timer: null,
      count: 0
    };
  },

  components: {
    myScroll: __WEBPACK_IMPORTED_MODULE_6__components_myScroll_vue__["a" /* default */]
  },
  onUnload: function onUnload() {
    this.list = [];
  },

  methods: {
    scrolltoupper: function scrolltoupper(isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.page = 1;
      this.getPageList('new');
    },
    scrolltolower: function scrolltolower() {
      console.log('到底部了');
      this.page++;
      this.getPageList();
    },
    getMore: function getMore(item) {
      this.isOpen = false;
      if (item.signCount > 0) {
        wx.navigateTo({
          url: 'meetingRecord/main?meetingId=' + item.meetingId
        });
      } else {
        wx.navigateTo({
          url: 'meetingDetail/main?meetingId=' + item.meetingId
        });
      }
    },
    onClickHide: function onClickHide() {
      this.showOverLay = false;
    },
    search: function search() {
      var _this = this;

      if (this.timer) {
        if (this.count < 0.6) {
          this.count = 0;
        }
      } else {
        this.timer = setInterval(function () {
          _this.count += 0.1;
          if (_this.count >= 0.6) {
            clearInterval(_this.timer);
            _this.timer = null;
            _this.count = 0;
            _this.page = 1;
            _this.isBottom = false;
            _this.getPageList();
          }
        }, 100);
      }
    },
    getPageList: function getPageList(isNew) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var par, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('查询');
                par = {
                  keyWords: _this2.keyword,
                  page: _this2.page,
                  pageSize: _this2.pageSize
                };
                _context.prev = 2;
                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["k" /* getMeetingList */])(par);

              case 5:
                res = _context.sent;

                console.log(res);
                if (res.code === 0) {
                  if (_this2.page === 1) {
                    _this2.list = res.data.records;
                  } else {
                    _this2.list = _this2.list.concat(res.data.records);
                  }
                  console.log(_this2.list);
                  if (res.data.records.length < _this2.pageSize) {
                    _this2.isBottom = true;
                  }
                  if (isNew === 'new') {
                    _this2.ty = -40;
                    _this2.animateStatus = true;
                    _this2.isReques = false;
                    _this2.finishEd = true;
                    setTimeout(function () {
                      _this2.finishEd = false;
                    }, 1000);
                  }
                  _this2.list.forEach(function (item) {
                    var content = '';
                    if (item.voiceWordsJson) {
                      var arr = JSON.parse(item.voiceWordsJson);
                      arr.forEach(function (temp) {
                        content += temp.words;
                      });
                      item.content = content;
                    }
                  });
                }
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }))();
    },
    clearTxt: function clearTxt() {
      this.keyword = '';
      this.page = 1;
      this.isBottom = false;
      this.getPageList();
    },
    addMeeting: function addMeeting() {
      wx.navigateTo({
        url: 'addMeeting/main'
      });
    },
    openAction: function openAction(index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index;
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    deleteMeeting: function deleteMeeting(id) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_3__components_vant_webapp_dialog_dialog__["a" /* default */].confirm({
        message: '删除会议后将不可恢复, 是否确定删除？'
      }).then(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var ids, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                ids = [];

                ids.push(id);
                _context2.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["d" /* delMeeting */])({ ids: ids });

              case 5:
                res = _context2.sent;

                if (res.code === 0) {
                  Object(__WEBPACK_IMPORTED_MODULE_4__components_vant_webapp_notify_notify__["a" /* default */])({ type: 'success', message: '删除成功' });
                  _this3.page = 1;
                  _this3.isBottom = false;
                  _this3.getPageList('mastNew');
                  _this3.isOpen = false;
                }
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 9]]);
      }))).catch(function () {
        // on cancel
      });
    },
    exportMeet: function exportMeet(id) {
      this.showOverLay = true;
      this.meetingId = id;
      this.isOpen = false;
    },
    exportFile: function exportFile(type) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var par, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                par = {
                  type: type,
                  meetingId: _this4.meetingId
                };
                _context3.prev = 1;
                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_apiServer_js__["g" /* exportMeeting */])(par);

              case 4:
                res = _context3.sent;

                // console.log(res)
                // let url = window.URL.createObjectURL(new Blob([res]))
                // window.localStorage.href = url
                _this4.showOverLay = false;
                console.log(res);
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](1);

                _this4.showOverLay = false;
                console.log(_context3.t0);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[1, 9]]);
      }))();
    },
    toDetail: function toDetail(item) {
      this.isOpen = false;
      wx.navigateTo({
        url: 'meetingRecord/main?meetingId=' + item.meetingId
      });
    }
  },
  created: function created() {
    // let app = getApp()
    // this.getPageList()
  },
  onLoad: function onLoad() {
    // wx.startPullDownRefresh()
    this.list = [];
    this.getPageList();
  },
  onHide: function onHide() {
    __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_RESETLIST', false);
  },
  onShow: function onShow() {
    var isFrom = __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].state.resetList;
    if (isFrom) {
      this.page = 1;
      this.isBottom = false;
      this.getPageList();
    }
  }
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "meetingWrap"
  }, [_c('div', {
    staticClass: "searchWrap"
  }, [_c('i', {
    staticClass: "searchIcon"
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.keyword !== ''),
      expression: "keyword !== ''"
    }],
    staticClass: "clearAll",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearTxt($event)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索会议",
      "placeholder-style": "font-size: 12px;font-family: PingFang SC;font-weight: 400;color: #FADDD9;",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }, _vm.search]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "addMeeting",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.addMeeting
    }
  })], 1), _vm._v(" "), _c('div', {
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
      "eventid": '8',
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
        "eventid": '7_' + index
      },
      on: {
        "click": function($event) {
          _vm.getMore(item)
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_c('span', [_vm._v(_vm._s(item.meetingName))]), _vm._v(" "), _c('i', {
      staticClass: "more",
      attrs: {
        "eventid": '6_' + index
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
        value: (_vm.actionIdx === index && _vm.isOpen && item.voiceWordsJson),
        expression: "actionIdx === index && isOpen && item.voiceWordsJson"
      }],
      staticClass: "action"
    }, [_c('span', {
      staticClass: "delete",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deleteMeeting(item.meetingId)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("删除会议")])], 1), _vm._v(" "), _c('span', {
      staticClass: "line"
    }), _vm._v(" "), _c('span', {
      staticClass: "detail",
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.toDetail(item)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("查看会议详情")])], 1)]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.actionIdx === index && _vm.isOpen && !item.voiceWordsJson),
        expression: "actionIdx === index && isOpen && !item.voiceWordsJson"
      }],
      staticClass: "action2"
    }, [_c('span', {
      staticClass: "delete",
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deleteMeeting(item.meetingId)
        }
      }
    }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("删除会议")])], 1)])])], 1), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.meetingTime))]), _vm._v(" "), _c('span', {
      staticClass: "person"
    }, [_c('i'), _c('b', [_vm._v(_vm._s(item.peopleNum))])], 1), _vm._v(" "), _c('span', {
      staticClass: "share"
    }, [_c('i'), _c('b', [_vm._v(_vm._s(item.fileNum))])], 1)]), _vm._v(" "), (item.signCount) ? _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.content))]) : _vm._e(), _vm._v(" "), (!item.signCount) ? _c('div', {
      staticClass: "content"
    }, [_vm._v("暂无会议记录")]) : _vm._e()])
  }))], 2), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('van-overlay', {
    attrs: {
      "show": _vm.showOverLay,
      "eventid": '9',
      "mpcomid": '3'
    },
    on: {
      ":click": _vm.onClickHide
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showOverLay),
      expression: "showOverLay"
    }],
    staticClass: "myDialog"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("选择格式")]), _vm._v(" "), _c('div', {
    staticClass: "options"
  }, [_c('div', {
    staticClass: "type",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": function($event) {
        _vm.exportFile(1)
      }
    }
  }, [_c('i', {
    staticClass: "mp3"
  }), _vm._v(" "), _c('span', [_vm._v("mp3")])], 1), _vm._v(" "), _c('div', {
    staticClass: "type",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": function($event) {
        _vm.exportFile(3)
      }
    }
  }, [_c('i', {
    staticClass: "pdf"
  }), _vm._v(" "), _c('span', [_vm._v("pdf")])], 1), _vm._v(" "), _c('div', {
    staticClass: "type",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": function($event) {
        _vm.exportFile(2)
      }
    }
  }, [_c('i', {
    staticClass: "docx"
  }), _vm._v(" "), _c('span', [_vm._v("docx")])], 1)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e967fcc", esExports)
  }
}

/***/ })

},[146]);