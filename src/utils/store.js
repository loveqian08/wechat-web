import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    fileIds: [],
    fileList: [],
    myFileList: [],
    resetList: false
  },
  mutations: {
    SET_FILEIDS: (state, data) => {
      state.fileIds = data
    },
    SET_FILELIST: (state, data) => {
      state.fileList = data
    },
    SET_MYFILELIST: (state, data) => {
      state.myFileList = data
    },
    SET_RESETLIST: (state, data) => {
      state.resetList = data
    }
  },
  getters: {
    fileIds: (state) => state.fileIds,
    fileList: (state) => state.fileList,
    myFileList: (state) => state.myFileList,
    isReset: (state) => state.resetList
  }
})
export default store
