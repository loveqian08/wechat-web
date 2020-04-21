require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(152);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2c2f9069_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
  __webpack_require__(154)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c2f9069"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2c2f9069_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\meetingDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c2f9069", Component.options)
  } else {
    hotAPI.reload("data-v-2c2f9069", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_store_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_apiServer_js__ = __webpack_require__(4);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isfocus: false,
      meetingName: '2019年第8次党会2019年第8次党会',
      meetingTime: '2019年10月28日 10:00',
      showPop: false,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      maxDate: '',
      type: '',
      editFileText: '上传我的材料',
      editText: '重新编辑',
      chooseList: [],
      roles: 1, // 1为创建者，2为参与者
      isEdit: false, // 是否是编辑模式
      editFile: false, // 参与者修改我的材料
      isCollection: false, // 是否已收藏
      personName: '',
      showPerson: false,
      creatorId: '',
      fileIds: [],
      personList: [],
      peoList: [],
      fileList: [],
      myFileList: [],
      getAllPeo: false,
      allPerson: [],
      letterList: [],
      allLetter: [],
      personLength: 0
    };
  },
  onLoad: function onLoad(options) {
    var time = new Date();
    var y = time.getFullYear();
    this.maxDate = new Date(y + 10, 1, 1).getTime();
    this.meetingTime = this.timeFormat();
    this.peoList.forEach(function (item) {
      item.check = false;
    });
    this.isEdit = false;
    this.editText = '重新编辑';
    console.log(this.editText);
    console.log(this.peoList);
    this.getData(options.meetingId);
    this.getUser('');
  },
  peoClose: function peoClose() {
    console.log(11111);
    this.showPerson = false;
  },
  onShow: function onShow() {
    var _this2 = this;

    console.log('show');
    var fileArr = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(__WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].state.fileList));
    var myFileArr = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(__WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].state.myFileList));
    console.log(fileArr);
    // let idsArr = store.state.fileIdx
    if (fileArr.length !== 0) {
      fileArr.forEach(function (item, index) {
        var flag = false;
        for (var i = 0; i < _this2.fileList.length; i++) {
          if (_this2.fileList[i].fileUuid === item.fileUuid) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          _this2.fileList.push(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, item));
          _this2.fileIds.push(item.fileUuid);
        }
      });
    }
    if (myFileArr.length !== 0) {
      myFileArr.forEach(function (item, index) {
        var flag = false;
        for (var i = 0; i < _this2.myFileList.length; i++) {
          if (_this2.myFileList[i].fileUuid === item.fileUuid) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          _this2.myFileList.push(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, item));
        }
      });
    }
  },
  onUnload: function onUnload() {
    this.isEdit = false;
    this.editFile = false;
    __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_FILEIDS', []);
    __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_FILELIST', []);
    __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_MYFILELIST', []);
  },

  methods: {
    delSome: function delSome(item) {
      var _this3 = this;

      this.peoList.forEach(function (tmp, index) {
        if (tmp.uuid === item.uuid) {
          _this3.peoList.splice(index, 1);
        }
      });
      this.chooseList.forEach(function (tmp, index) {
        if (tmp.uuid === item.uuid) {
          _this3.chooseList.splice(index, 1);
        }
      });
      var br = [];
      this.chooseList.forEach(function (item) {
        if (br.indexOf(item.firstLetter) < 0) {
          br.push(item.firstLetter);
        }
      });
      br.sort();
      this.letterList = [].concat(br);
    },
    getUser: function getUser(name) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, arr, brr;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__utils_apiServer_js__["q" /* getUserList */])({ name: name });

              case 3:
                res = _context.sent;

                if (res.code === 0) {
                  arr = res.data;

                  _this4.allPerson = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(res.data));
                  brr = [arr[0].firstLetter];

                  arr.forEach(function (item, index) {
                    if (brr.indexOf(item.firstLetter) < 0) {
                      brr.push(item.firstLetter);
                    }
                  });
                  brr.sort();
                  _this4.letterList = [].concat(brr);
                  _this4.allLetter = [].concat(brr);
                  _this4.peoList = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(res.data));
                  _this4.peoList.forEach(function (t) {
                    t.check = false;
                  });
                }
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                _this4.$notify({
                  type: 'danger',
                  message: _context.t0.message
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4, [[0, 7]]);
      }))();
    },
    addFile: function addFile(str) {
      if (str) {
        wx.navigateTo({
          url: '../chooseFile/main?option=' + str
        });
      } else {
        wx.navigateTo({
          url: '../chooseFile/main'
        });
      }
    },
    getData: function getData(id) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, _this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__utils_apiServer_js__["s" /* meetingDetail */])(id);

              case 3:
                res = _context2.sent;

                if (res.code === 0) {
                  _this5.personList = res.data.people;
                  _this5.personLength = _this5.personList.length;
                  _this5.creatorId = res.data.creatorId;
                  _this5.fileList = res.data.materials;
                  _this5.myFileList = res.data.userMaterials || [];
                  _this5.meetingName = res.data.topic;
                  _this5.meetingTime = res.data.meetingTime;
                  _this5.meetingId = res.data.meetingId;
                  _this = _this5;

                  wx.getStorage({
                    key: 'userInfo',
                    success: function success(result) {
                      if (_this.creatorId === result.uuid) {
                        _this.roles = 1;
                        _this.editText = '重新编辑';
                      } else {
                        _this.roles = 2;
                        _this.editText = '上传我的材料';
                      }
                    }
                  });
                }
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                _this5.$notify({
                  type: 'danger', message: _context2.t0.message
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this5, [[0, 7]]);
      }))();
    },
    editMyFile: function editMyFile() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var arr, par, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this6.editFile) {
                  _context3.next = 16;
                  break;
                }

                arr = [];

                _this6.myFileList.forEach(function (item) {
                  arr.push(item.fileUuid);
                });
                par = {
                  meetingId: _this6.meetingId,
                  fileIds: arr
                };
                _context3.prev = 4;
                _context3.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_6__utils_apiServer_js__["v" /* updataMyFile */])(par);

              case 7:
                res = _context3.sent;

                if (res.code === 0) {
                  _this6.$notify({
                    type: 'success',
                    message: '保存成功'
                  });
                  _this6.editFile = false;
                  _this6.editFileText = '上传我的材料';
                }
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3['catch'](4);

                _this6.$notify({
                  type: 'danger',
                  message: _context3.t0.message
                });

              case 14:
                _context3.next = 18;
                break;

              case 16:
                _this6.editFile = true;
                _this6.editFileText = '保存修改';

              case 18:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this6, [[4, 11]]);
      }))();
    },
    edit: function edit() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var pel, count, i, par, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(_this7.isEdit);

                if (!_this7.isEdit) {
                  _context4.next = 19;
                  break;
                }

                pel = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(_this7.personList));
                count = 0;

                for (i = 0; i < pel.length; i++) {
                  if (!pel[i].userUuid) {
                    pel[i].userUuid = pel[i].uuid;
                  }
                  if (pel[i].type === 'del') {
                    count++;
                  }
                  if (pel[i].type === 'add') {
                    count++;
                  }
                }
                if (count === 1) {
                  pel.splice(0, 1);
                } else if (count === 2) {
                  pel.splice(0, 2);
                }
                par = {
                  meetingId: _this7.meetingId,
                  topic: _this7.meetingName,
                  meetingTime: _this7.meetingTime,
                  creatorId: _this7.creatorId,
                  people: pel,
                  materials: _this7.fileList
                };
                _context4.prev = 7;
                _context4.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_6__utils_apiServer_js__["u" /* updataMeeting */])(par);

              case 10:
                res = _context4.sent;

                if (res.code === 0) {
                  _this7.$notify({
                    type: 'success',
                    message: '保存成功'
                  });
                  _this7.isEdit = false;
                  _this7.editText = '重新编辑';
                  _this7.personList = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(pel));
                }
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](7);

                _this7.$notify({
                  type: 'danger', message: _context4.t0.message
                });

              case 17:
                _context4.next = 23;
                break;

              case 19:
                _this7.isEdit = true;
                _this7.editText = '保存修改';
                if (_this7.personList.length > 0) {
                  _this7.personList.unshift({
                    type: 'del',
                    name: '',
                    avatar: __webpack_require__(12)
                  });
                }
                _this7.personList.unshift({
                  type: 'add',
                  name: '',
                  avatar: __webpack_require__(11)
                });

              case 23:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this7, [[7, 14]]);
      }))();
    },
    delFile: function delFile(id, from) {
      var _this8 = this;

      if (from === 'myfile') {
        this.myFileList.forEach(function (item, index) {
          if (item.fileUuid === id) {
            _this8.myFileList.splice(index, 1);
            _this8.myFileList.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_MYFILELIST', JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(_this8.myFileList)));
            return false;
          }
        });
      } else {
        this.fileList.forEach(function (item, index) {
          if (item.fileUuid === id) {
            _this8.fileList.splice(index, 1);
            _this8.fileIds.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_FILEIDS', JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(_this8.fileIds)));
            __WEBPACK_IMPORTED_MODULE_5__utils_store_js__["a" /* default */].commit('SET_FILELIST', JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(_this8.fileList)));
            return false;
          }
        });
      }
    },
    isOk: function isOk() {
      var _this9 = this;

      if (this.type === 'add') {
        if (this.getAllPeo) {
          this.showPerson = false;
          this.getAllPeo = false;
          return false;
        }
        this.chooseList.forEach(function (tmp, index) {
          var flag = false;
          for (var i = 0; i < _this9.personList.length; i++) {
            if (tmp.uuid === _this9.personList[i].uuid) {
              flag = true;
            }
          }
          if (!flag) {
            _this9.personList.push(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, tmp));
          }
        });
        // this.personList = this.personList.concat(this.chooseList)
        var hasDel = this.personList.filter(function (item) {
          return item.type === 'del';
        });
        var hasAdd = this.personList.filter(function (item) {
          return item.type === 'add';
        });
        if (hasAdd.length <= 0 && hasDel <= 0) {
          this.personList.unshift({
            type: 'del',
            name: '',
            avatar: __webpack_require__(12)
          });
          this.personList.unshift({
            type: 'add',
            name: '',
            avatar: __webpack_require__(11)
          });
        } else if (hasAdd.length > 0 && hasDel <= 0) {
          this.personList.splice(1, 0, {
            type: 'del',
            name: '',
            avatar: __webpack_require__(12)
          });
        }
        if (this.personList.length < 2) {
          this.personLength = 0;
        } else {
          this.personLength = this.personList.length - 2;
        }
      } else if (this.type === 'del') {
        if (this.getAllPeo) {
          this.showPerson = false;
          this.getAllPeo = false;
          return false;
        }
        this.personList = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(this.chooseList));
        if (this.personList.length > 0) {
          this.personList.unshift({
            type: 'del',
            name: '',
            avatar: __webpack_require__(12)
          });
          this.personList.unshift({
            type: 'add',
            name: '',
            avatar: __webpack_require__(11)
          });
        } else {
          this.personList.unshift({
            type: 'add',
            name: '',
            avatar: __webpack_require__(11)
          });
        }
        if (this.personList.length < 2) {
          this.personLength = 0;
        } else {
          this.personLength = this.personList.length - 2;
        }
      }
      console.log(this.personList);
      this.showPerson = false;
    },
    onChange: function onChange(item) {
      var _this10 = this;

      item.check = !item.check;
      this.$forceUpdate();
      this.chooseList = [];
      this.peoList.forEach(function (item) {
        if (item.check) {
          _this10.chooseList.push(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, item));
        }
      });
    },
    choose: function choose(type) {
      if (type) {
        this.type = type;
        this.showPerson = true;
        if (type === 'add') {
          this.peoList = this.allPerson;
        }
        console.log(this.letterList);
        console.log(this.peoList);
      }
    },
    getAll: function getAll() {
      var _this11 = this;

      var arr = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(this.personList));
      arr.splice(0, 2);
      this.peoList = arr;
      var br = [];
      this.peoList.forEach(function (item) {
        console.log(_this11.peoList);
        if (br.indexOf(item.firstLetter) < 0) {
          br.push(item.firstLetter);
        }
      });
      br.sort();
      this.letterList = [].concat(br);
      this.showPerson = true;
      this.getAllPeo = true;
      console.log('获取所有');
    },
    timeFormat: function timeFormat(val) {
      var time = new Date();
      if (val) {
        time = new Date(val);
      }
      var y = time.getFullYear();
      var m = time.getMonth();
      m = m + 1;
      if (m < 10) {
        m = '0' + m;
      }
      var d = time.getDate();
      if (d < 10) {
        d = '0' + d;
      }
      var h = time.getHours();
      if (h < 10) {
        h = '0' + h;
      }
      var min = time.getMinutes();
      if (min < 10) {
        min = '0' + min;
      }
      var s = time.getSeconds();
      if (s < 10) {
        s = '0' + s;
      }
      return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
    },
    cancelTime: function cancelTime() {
      this.showPop = false;
    },
    getTime: function getTime(val) {
      this.meetingTime = this.timeFormat(val.mp.detail);
      this.showPop = false;
    },
    onInput: function onInput() {
      console.log(111);
    },
    onClose: function onClose() {
      console.log(222);
    },
    getFocus: function getFocus() {
      this.isfocus = true;
    },
    blur: function blur() {
      this.isfocus = false;
    }
  }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addWrap"
  }, [_c('div', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("会议主题")])], 1), _vm._v(" "), (_vm.isEdit) ? _c('div', {
    class: {
      'content': true, 'isfocus': _vm.isfocus
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.meetingName),
      expression: "meetingName"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入会议主题",
      "maxlength": 20,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.meetingName)
    },
    on: {
      "focus": _vm.getFocus,
      "blur": _vm.blur,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.meetingName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isfocus && _vm.meetingName.length > 0),
      expression: "isfocus && meetingName.length > 0"
    }]
  }, [_vm._v(_vm._s(_vm.meetingName.length) + "/20")])], 1) : _vm._e(), _vm._v(" "), (!_vm.isEdit) ? _c('div', {
    staticClass: "meetName"
  }, [_vm._v(_vm._s(_vm.meetingName))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "timeWrap"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("会议时间")])], 1), _vm._v(" "), (_vm.isEdit) ? _c('div', {
    staticClass: "content",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showPop = true
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.meetingTime))]), _c('i', {
    staticClass: "next"
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.isEdit) ? _c('div', {
    staticClass: "meetTime"
  }, [_vm._v(_vm._s(_vm.meetingTime))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "person"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("参会人员")]), (_vm.isEdit) ? _c('b', [_vm._v("已添加" + _vm._s(_vm.personLength) + "人")]) : _vm._e(), (!_vm.isEdit) ? _c('b', [_vm._v("共" + _vm._s(_vm.personList.length) + "人")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.personList), function(item, index) {
    return _c('li', {
      key: index,
      class: {
        'first': index % 8 === 0
      },
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.choose(item.type)
        }
      }
    }, [_c('div', {
      staticClass: "wrap",
      class: {
        'add': item.type === 'add', 'del': item.type === 'del'
      }
    }, [_c('img', {
      attrs: {
        "src": item.avatar,
        "alt": ""
      }
    })]), _vm._v(" "), (item.name) ? _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]) : _vm._e()])
  })), _vm._v(" "), (_vm.personList.length > 16) ? _c('div', {
    staticClass: "getAll",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getAll
    }
  }, [_vm._v("查看全部人员")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fileWrap"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("会议材料")]), (_vm.fileList.length > 0 && _vm.isEdit) ? _c('b', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addFile
    }
  }, [_vm._v("已添加" + _vm._s(_vm.fileList.length) + "份，继续添加"), _c('i')], 1) : _vm._e(), (_vm.fileList.length === 0 && !_vm.isEdit) ? _c('b', [_vm._v("暂无")]) : _vm._e(), (_vm.fileList.length > 0 && !_vm.isEdit) ? _c('b', [_vm._v("共" + _vm._s(_vm.fileList.length) + "份")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.fileList.length === 0 && _vm.isEdit) ? _c('div', {
    staticClass: "addFile",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.addFile
    }
  }, [_c('i')], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.fileList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "fileList"
    }, [_c('i', {
      staticClass: "fileIcon"
    }), _c('span', {
      staticClass: "fileName"
    }, [_vm._v(_vm._s(item.fileName))]), (_vm.isEdit) ? _c('i', {
      staticClass: "delete",
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.delFile(item.fileUuid, 'file')
        }
      }
    }) : _vm._e()], 1)
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "myfileWrap"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i'), _c('span', [_vm._v("我的材料")]), ((_vm.myFileList.length > 0 && _vm.isEdit) || (_vm.myFileList.length > 0 && _vm.editFile)) ? _c('b', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.addFile('my')
      }
    }
  }, [_vm._v("已添加" + _vm._s(_vm.myFileList.length) + "份，继续添加"), _c('i')], 1) : _vm._e(), (_vm.myFileList.length === 0 && !_vm.isEdit && !_vm.editFile) ? _c('b', [_vm._v("暂无")]) : _vm._e(), (_vm.myFileList.length > 0 && !_vm.isEdit && !_vm.editFile) ? _c('b', [_vm._v("共" + _vm._s(_vm.myFileList.length) + "份")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [((_vm.myFileList.length === 0 && _vm.isEdit) || (_vm.myFileList.length === 0 && _vm.editFile)) ? _c('div', {
    staticClass: "addFile",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.addFile
    }
  }, [_c('i')], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.myFileList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "fileList"
    }, [_c('i', {
      staticClass: "fileIcon"
    }), _c('span', {
      staticClass: "fileName"
    }, [_vm._v(_vm._s(item.fileName))]), (_vm.isEdit || _vm.editFile) ? _c('i', {
      staticClass: "delete",
      attrs: {
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.delFile(item.fileUuid, 'myfile')
        }
      }
    }) : _vm._e()], 1)
  })], 2)]), _vm._v(" "), (_vm.roles === 1) ? _c('div', {
    staticClass: "okWrap"
  }, [_c('button', {
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.edit
    }
  }, [_vm._v(_vm._s(_vm.editText))])], 1) : _vm._e(), _vm._v(" "), (_vm.roles === 2) ? _c('div', {
    staticClass: "okWrap"
  }, [_c('button', {
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.editMyFile
    }
  }, [_vm._v(_vm._s(_vm.editFileText))])], 1) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showPop,
      "position": "bottom",
      "eventid": '13',
      "mpcomid": '3'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('van-datetime-picker', {
    attrs: {
      "type": "datetime",
      "value": _vm.currentDate,
      "min-date": _vm.minDate,
      "max-date": _vm.maxDate,
      "eventid": '12',
      "mpcomid": '2'
    },
    on: {
      "input": _vm.onInput,
      "confirm": _vm.getTime,
      "cancel": _vm.cancelTime
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showPerson,
      "position": "bottom",
      "custom-style": "height: 80%;",
      "eventid": '18',
      "mpcomid": '5'
    },
    on: {
      "click-overlay": _vm.peoClose
    }
  }, [_c('div', {
    staticClass: "popWrap"
  }, [_c('div', {
    staticClass: "title"
  }, [(!_vm.getAllPeo) ? _c('div', {
    staticClass: "iptWrap"
  }, [_c('i', {
    staticClass: "search"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.personName),
      expression: "personName"
    }],
    attrs: {
      "type": "text",
      "placeholder": "在通讯录里查找",
      "eventid": '14'
    },
    domProps: {
      "value": (_vm.personName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.personName = $event.target.value
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.getAllPeo) ? _c('div', {
    staticClass: "allPeoTitle"
  }, [_c('span', [_vm._v("全部参会人员")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("已选" + _vm._s(_vm.chooseList.length) + "人")])]), _vm._v(" "), _c('div', {
    staticClass: "listWrap"
  }, _vm._l((_vm.letterList), function(temp, idx) {
    return _c('div', {
      key: idx,
      staticClass: "list"
    }, [_c('div', {
      staticClass: "type"
    }, [_vm._v(_vm._s(temp))]), _vm._v(" "), _c('div', {
      staticClass: "perList"
    }, _vm._l((_vm.peoList), function(it, index) {
      return (it.firstLetter === temp) ? _c('div', {
        key: index,
        staticClass: "people"
      }, [_c('div', {
        staticClass: "nameWrap"
      }, [_c('img', {
        attrs: {
          "src": it.avatar,
          "alt": ""
        }
      }), _c('span', [_vm._v(_vm._s(it.name))])]), _vm._v(" "), (!_vm.getAllPeo) ? _c('div', {
        staticClass: "check"
      }, [(_vm.type === 'add') ? _c('van-checkbox', {
        attrs: {
          "value": it.check,
          "shape": "square",
          "eventid": '15_' + idx + '-' + index,
          "mpcomid": '4_' + idx + '-' + index
        },
        on: {
          "change": function($event) {
            _vm.onChange(it)
          }
        }
      }) : _vm._e(), (_vm.type === 'del') ? _c('span', {
        attrs: {
          "eventid": '16_' + idx + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.delSome(it)
          }
        }
      }) : _vm._e()], 1) : _vm._e()]) : _vm._e()
    }))])
  })), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_c('button', {
    attrs: {
      "eventid": '17'
    },
    on: {
      "click": _vm.isOk
    }
  }, [_vm._v("确定")])], 1)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c2f9069", esExports)
  }
}

/***/ })

},[151]);