require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(164);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bb2e469_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2bb2e469"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bb2e469_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\meetingRecord\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bb2e469", Component.options)
  } else {
    hotAPI.reload("data-v-2bb2e469", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__ = __webpack_require__(4);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      audioInfo: {
        audioSrc: '',
        startTime: '',
        endTime: '',
        audioName: ''
      },
      hasMore: false,
      isPlay: false,
      duration: 0,
      timer: null,
      sliderVal: 0,
      signDetail: {},
      InnerAudioContext: {},
      imgList: []
    };
  },
  onLoad: function onLoad(options) {
    console.log(options);
    var _this = this;
    this.InnerAudioContext = wx.createInnerAudioContext();
    console.log(this.InnerAudioContext);
    this.getDataList(options.meetingId);
    var refH = 0;
    var wrapH = 0;
    setTimeout(function () {
      var query = wx.createSelectorQuery();
      // 选择id
      query.select('#text').boundingClientRect(function (rect) {
        if (rect.height) {
          // clearInterval(theTime)
          refH = rect.height;
        }
      }).exec();
      query.select('.content').boundingClientRect(function (ace) {
        if (ace.height) {
          wrapH = ace.height;
        }
      }).exec();
      var theTime = setInterval(function () {
        if (wrapH && refH) {
          clearInterval(theTime);
          if (refH <= wrapH) {
            _this.hasMore = false;
          } else {
            _this.hasMore = true;
          }
        }
      }, 100);
    }, 500);
  },
  onUnload: function onUnload() {
    this.hasMore = false;
    this.isPlay = false;
    this.duration = 0;
    this.timer = null;
    this.sliderVal = 0;
    this.signDetail = {};
    this.InnerAudioContext = {};
    this.imgList = [];
  },

  methods: {
    toFileDetail: function toFileDetail(id) {
      wx.navigateTo({
        url: '../meetingFile/main?meetingId=' + id
      });
    },
    getMoreData: function getMoreData(item, index) {
      if (item.moreText === '查看更多') {
        item.getMore = true;
        item.moreText = '收起';
      } else {
        item.getMore = false;
        item.moreText = '查看更多';
      }
      this.signDetail.signList = JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.signDetail.signList));
      console.log(this.signDetail.signList);
    },
    tabChange: function tabChange(event) {
      var index = event.mp.detail.name;
      this.imgList = this.signDetail.signList[index].imgList;
      this.duration = this.signDetail.signList[index].duration;
      this.audioInfo.audioSrc = this.signDetail.signList[index].voiceUrl;
      this.audioInfo.startTime = '00:00:00';
      this.audioInfo.endTime = this.timeFormat(this.signDetail.signList[index].duration);
      this.audioInfo.audioName = this.signDetail.signList[index].signName;
      this.InnerAudioContext.src = this.audioInfo.audioSrc;
      this.sliderVal = 0;
      this.InnerAudioContext.seek(this.sliderVal);
      this.InnerAudioContext.pause();
      this.isPlay = false;
      clearInterval(this.timer);
    },
    slideChange: function slideChange(event) {
      this.sliderVal = event.mp.detail.value;
      this.audioInfo.startTime = this.timeFormat(this.sliderVal);
      // this.innerAudioContext.startTime = this.sliderVal
      this.InnerAudioContext.seek(this.sliderVal);
      if (this.isPlay) {
        this.InnerAudioContext.play();
      } else {
        this.InnerAudioContext.pause();
      }
    },
    play: function play() {
      var _this2 = this;

      if (this.isPlay) {
        this.isPlay = false;
        // this.innerAudioContext.startTime = this.sliderVal
        this.InnerAudioContext.pause();
        clearInterval(this.timer);
      } else {
        this.isPlay = true;
        this.InnerAudioContext.play();
        console.log(this.InnerAudioContext);
        this.timer = setInterval(function () {
          _this2.sliderVal++;
          _this2.audioInfo.startTime = _this2.timeFormat(_this2.sliderVal);
          if (_this2.sliderVal === _this2.duration + 1) {
            clearInterval(_this2.timer);
            _this2.sliderVal = 0;
            _this2.InnerAudioContext.seek(_this2.sliderVal);
            _this2.audioInfo.startTime = _this2.timeFormat(_this2.sliderVal);
            _this2.InnerAudioContext.pause();
            _this2.isPlay = false;
          }
        }, 1000);
      }
    },
    formatJson: function formatJson(json) {
      var str = '';
      if (json) {
        var arr = JSON.parse(json);
        arr.forEach(function (item) {
          str += item.words;
        });
      } else {
        str = '';
      }
      console.log(str);
      return str;
    },
    imgFormat: function imgFormat(json) {
      var arr = [];
      if (json) {
        arr = JSON.parse(json);
      } else {
        arr = [];
      }
      return arr;
    },
    getDataList: function getDataList(id) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_apiServer_js__["p" /* getSignList */])({ meetId: id });

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  _this3.signDetail = res.data;
                  // console.log(this.signDetail.signList);
                  _this3.signDetail.signList.forEach(function (tmp) {
                    console.log(tmp);
                    tmp.moreText = '查看更多';
                    tmp.getMore = false;
                    tmp.content = _this3.formatJson(tmp.voiceWordsJson);
                    tmp.imgList = _this3.imgFormat(tmp.signDrawJson);
                  });
                  _this3.imgList = _this3.signDetail.signList[0].imgList;
                  _this3.duration = _this3.signDetail.signList[0].duration;
                  _this3.audioInfo.audioSrc = _this3.signDetail.signList[0].voiceUrl;
                  _this3.audioInfo.startTime = '00:00:00';
                  _this3.audioInfo.endTime = _this3.timeFormat(_this3.signDetail.signList[0].duration);
                  _this3.audioInfo.audioName = _this3.signDetail.signList[0].signName;
                  _this3.InnerAudioContext.src = _this3.audioInfo.audioSrc;
                }
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0.message);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3, [[0, 7]]);
      }))();
    },
    timeFormat: function timeFormat(time) {
      var h = Math.floor(time / 3600);
      var min = Math.floor(time % 3600 / 60);
      var s = Math.floor(time % 60);
      if (h < 10) {
        h = '0' + h;
      }
      if (min < 10) {
        min = '0' + min;
      }
      if (s < 10) {
        s = '0' + s;
      }
      return h + ':' + min + ':' + s;
    }
  }
});

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recordWrap"
  }, [_c('div', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "titleWrap"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.signDetail.meetingName))]), _vm._v(" "), _c('div', {
    staticClass: "createTime"
  }, [_vm._v(_vm._s(_vm.signDetail.meetingTime))])]), _vm._v(" "), _c('div', {
    staticClass: "seeBtn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toFileDetail(_vm.signDetail.meetingId)
      }
    }
  }, [_vm._v("查看会议材料")])]), _vm._v(" "), _c('div', {
    staticClass: "audioWrap"
  }, [_c('div', {
    staticClass: "icon",
    class: {
      'play': _vm.isPlay
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.play()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "audioName"
  }, [_vm._v(_vm._s(_vm.audioInfo.audioName))]), _vm._v(" "), _c('div', {
    staticClass: "audioTime"
  }, [_c('span', {
    staticClass: "start"
  }, [_vm._v(_vm._s(_vm.audioInfo.startTime))]), _vm._v(" "), _c('span', {
    staticClass: "end"
  }, [_vm._v(_vm._s(_vm.audioInfo.endTime))])]), _vm._v(" "), _c('slider', {
    attrs: {
      "step": 1,
      "value": _vm.sliderVal,
      "backgroundColor": "#ccc",
      "activeColor": "#EB3017",
      "block-size": 12,
      "max": _vm.duration,
      "eventid": '2'
    },
    on: {
      "change": _vm.slideChange
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "tagWrap"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.activeIndex,
      "animated": "",
      "swipeable": "",
      "nav-class": "tabsTop",
      "tab-class": "tabOne",
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.tabChange
    }
  }, _vm._l((_vm.signDetail.signList), function(item, index) {
    return _c('van-tab', {
      key: index,
      attrs: {
        "title": item.signName,
        "name": index,
        "custom-class": "theTab",
        "mpcomid": '0_' + index
      }
    }, [_c('div', {
      staticClass: "contentWrap"
    }, [_c('div', {
      staticClass: "content",
      class: {
        'autoContent': item.getMore
      }
    }, [_c('div', {
      attrs: {
        "id": "text"
      }
    }, [_vm._v(_vm._s(item.content))])]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.hasMore),
        expression: "hasMore"
      }],
      staticClass: "seeMore",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.getMoreData(item, index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.moreText)), _c('i', {
      class: {
        'rota': item.moreText === '收起'
      }
    })], 1)])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "picWrap"
  }, _vm._l((_vm.imgList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "main"
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "alt": ""
      }
    })])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2bb2e469", esExports)
  }
}

/***/ })

},[163]);