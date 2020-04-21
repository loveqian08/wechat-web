<template>
  <div class="chooseFile">
    <div class="tab">
      <div class="collection">
        <span>收藏文件</span>
      </div>
      <div class="chat">
        <span @click="getChat">聊天文件</span>
      </div>
    </div>
    <div class="searchWrap">
      <div class="search">
        <i></i><input type="text" v-model="keyword" placeholder="搜索文件" placeholder-style="font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;" @input="getList">
      </div>
      <div class="isOk" @click="saveData">确定</div>
    </div>
    <div class="listWrap">
      <my-scroll
      :pullText="pullText"
      :releaseText="releaseText"
      :loadingText="loadingText"
      :finishText="finishText"
      :isReques="isReques"
      :finishEd="finishEd"
      :isBottom="isBottom"
      :tranY="tranY"
      :ty="ty"
      :fileList="fileList"
      :lowerThreshold="lowerThreshold"
      @scrolltoupper="scrolltoupper"
      @scrolltolower="scrolltolower">
        <template slot="loading">
          <p class="loading"></p>
        </template>
        <ul>
          <li v-for="(item, index) in fileList" :key="index">
            <div class="information" @click="openDocument(item)">
              <div class="title">{{item.fileName}}</div>
              <div class="info">
                <span class="time">{{item.createTime}}</span>
                <span class="saveTo">{{item.source}}</span>
              </div>
              <div class="fromWrap">
                <span class="size">大小： {{item.size}}</span>
              </div>
            </div>
            <div class="check" @click="checkboxChange(item)"><i :class="{'checkActive': item.isCheck}"></i></div>
          </li>
        </ul>
      </my-scroll>
    </div>
    <div class="zhezhao" v-if="openSrc"></div>
    <div class="imgWrap" v-for="(tmp, idx) in imgList" :key="idx" v-show="openSrc === tmp">
      <img :src="tmp" alt="" @click.stop="onClickHide" @load="imgLoad">
    </div>
    <van-notify id="van-notify" />
  </div>
</template>
<script>
import {getMyFileList} from '@/utils/apiServer.js'
import store from '@/utils/store.js'
import myScroll from '@/components/myScroll.vue'
export default {
  data () {
    return {
      arr: [
        {
          val: 1,
          checked: false
        }
      ],
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
    }
  },
  onLoad (options) {
    this.fileList = []
    if (options.option) {
      this.type = 'my'
    }
    this.fileIds = []
    this.chooseArr = []
    this.getList()
  },
  components: {
    myScroll: myScroll
  },
  methods: {
    scrolltoupper (isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.page = 1;
      this.getList('new')
    },
    scrolltolower () {
      console.log('到底部了');
      this.page++;
      this.getList();
    },
    onClickHide () {
      console.log(111);
      this.openSrc = ''
    },
    openDocument (item) {
      if (item.file.url.indexOf('https') < 0) {
        item.file.url = item.file.url.replace(/http/, 'https')
      }
      this.openSrc = ''
      if (item.file.url.indexOf('.png') >= 0 || item.file.url.indexOf('.jpg') >= 0 || item.file.url.indexOf('.gif') >= 0) {
        let str = item.file.url.replace(/https/, 'http')
        this.openSrc = str
        console.log(this.openSrc)
      } else {
        wx.getStorage({
          key: 'token',
          success (res) {
            wx.showLoading({
              title: '文件加载中,请稍后'
            })
            wx.downloadFile({
              url: item.file.url,
              header: {
                'X-Token': res.data
              },
              success (result) {
                wx.hideLoading()
                console.log(result)
                wx.openDocument({
                  filePath: result.tempFilePath,
                  success (r) {
                    console.log(r)
                  },
                  fail (err) {
                    console.log(err)
                  }
                })
              },
              fail () {
                wx.hideLoading()
                wx.showToast({
                  title: '文件加载失败',
                  icon: 'none',
                  duration: 2000
                })
              }
            })
          }
        })
      }
    },
    uploadFile (path, token, name) {
      const _this = this
      console.log(JSON.stringify({
        url: 'https://suji.learndar.com/api/mini/common/uploadFile', // 仅为示例，非真实的接口地址
        filePath: path,
        name: 'file',
        formData: {
          'token': token
        }
      }))
      wx.uploadFile({
        url: 'https://suji.learndar.com/api/mini/common/uploadFile', // 仅为示例，非真实的接口地址
        filePath: path,
        name: 'file',
        formData: {
          'token': token,
          'fileName': name
        },
        success (res) {
          console.log(res)
          let data = JSON.parse(res.data)
          console.log(data)
          if (data.code === 0) {
            _this.fileIds.push(data.fileId)
            _this.chooseArr.push({
              fileName: name,
              fileUuid: data.fileId
            })
            console.log('id列表')
            console.log(_this.fileIds)
            if (_this.type === 'my') {
              store.commit('SET_MYFILELIST', JSON.parse(JSON.stringify(_this.chooseArr)))
            } else {
              store.commit('SET_FILEIDS', JSON.parse(JSON.stringify(_this.fileIds)))
              store.commit('SET_FILELIST', JSON.parse(JSON.stringify(_this.chooseArr)))
            }
            wx.navigateBack({
              delta: 1
            })
          }
        }
      })
    },
    getChat () {
      let _this = this
      wx.chooseMessageFile({
        count: 10,
        type: 'file',
        async success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          // const tempFilePaths = res.tempFilePaths
          let token = ''
          wx.getStorage({
            key: 'token',
            success (result) {
              token = result.data
              let arr = res.tempFiles
              arr.forEach(item => {
                _this.uploadFile(item.path, token, item.name)
              })
            }
          })
        },
        fail () {
          this.$notify({
            type: 'danger',
            message: '文件获取失败'
          });
        }
      })
    },
    saveData () {
      console.log(this.chooseArr)
      if (this.type === 'my') {
        store.commit('SET_MYFILELIST', JSON.parse(JSON.stringify(this.chooseArr)))
      } else {
        store.commit('SET_FILEIDS', JSON.parse(JSON.stringify(this.fileIds)))
        store.commit('SET_FILELIST', JSON.parse(JSON.stringify(this.chooseArr)))
      }
      wx.navigateBack({
        delta: 1
      })
    },
    checkboxChange (item) {
      item.isCheck = !item.isCheck
      if (this.fileIds.includes(item.fileUuid)) {
        this.fileIds.forEach((tmp, index) => {
          if (tmp === item.fileUuid) {
            this.fileIds.splice(index, 1)
            this.chooseArr.splice(index, 1)
            return false
          }
        })
      } else {
        this.fileIds.push(item.fileUuid)
        this.chooseArr.push(item)
        console.log(this.chooseArr)
      }
    },
    sizeFormat (size) {
      return (size / 1000).toFixed(2)
    },
    async getList (isNew) {
      try {
        const res = await getMyFileList({keyWords: this.keyword, page: this.page, pageSize: this.pageSize})
        if (res.code === 0) {
          if (isNew) {
            this.fileList = res.data.records;
          } else {
            this.fileList = this.fileList.concat(res.data.records);
          }
          if (res.data.records.length < this.size) {
            this.isBottom = true;
          }
          if (isNew === 'new') {
            this.ty = -40;
            this.animateStatus = true;
            this.isReques = false;
            this.finishEd = true;
            setTimeout(() => {
              this.finishEd = false;
            }, 1000)
          }
          this.imgList = [];
          this.requested = true;
          if (this.fileList.length > 0) {
            this.fileList.forEach(item => {
              item.size = this.sizeFormat(item.file.size)
              if (item.file.url.indexOf('.png') >= 0 || item.file.url.indexOf('.jpg') >= 0 || item.file.url.indexOf('.gif') >= 0) {
                // let str = item.file.url.replace(/http/, 'https')
                this.imgList.push(item.file.url)
                console.log(this.imgList)
              }
            })
          }
        }
      } catch (e) {
        console.log(111)
      }
    }
  }
}
</script>
<style lang="scss">
.chooseFile{
  .zhezhao{
    position: fixed;
    top: 0.94rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 4;
  }
  .imgWrap{
    width: 100%;
    position: absolute;
    margin-top: 7rem;
    z-index: 10;
    img{
      width: 100%;
    }
  }
  .tab{
    height: 0.94rem;
    background-color: #DE2910;
    .collection{
      width: 50%;
      float: left;
      position: relative;
      span{
        height: 0.7rem;
        position: absolute;
        top: 0.12rem;
        left: 50%;
        line-height: 0.7rem;
        transform: translateX(-50%);
        font-size: 0.3rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        box-sizing: border-box;
        border-bottom: 0.05rem solid #fff;
      }
    }
    .chat{
      width: 50%;
      float: right;
      position: relative;
      span{
        height: 0.7rem;
        position: absolute;
        top: 0.12rem;
        left: 50%;
        line-height: 0.7rem;
        transform: translateX(-50%);
        font-size: 0.3rem;
        font-family:PingFang SC;
        font-weight: 400;
        color:rgba(255,255,255,1);
      }
    }
  }
  .searchWrap{
    height: 1.04rem;
    position: absolute;
    top: 0.94rem;
    left: 0.32rem;
    right: 0.32rem;
    border-bottom: 0.01rem solid #ddd;
    background-color: #fff;
    z-index: 1;
    .search{
      width: 6.06rem;
      height: 0.64rem;
      border-radius: 0.32rem;
      background-color: #EAEAEA;
      float: left;
      margin-top: 0.2rem;
      i{
        width: 0.28rem;
        height: 0.28rem;
        background-image: url('../../../assets/images/fileSearch.png');
        float: left;
        margin-top: 0.18rem;
        margin-left: 0.44rem;
        margin-right: 0.08rem;
        background-size: cover;
      }
      input{
        width: 5rem;
        height: 100%;
        float: left;
        border: none;
        outline: none;
        font-size: 0.28rem;
        font-family: PingFang SC;
        font-weight: 400;
        color:#333;
      }
    }
    .isOk{
      height: 100%;
      float: right;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(170,170,170,1);
      line-height: 1.04rem;
    }
  }
  .listWrap{
    background-color: #fff;
    position: absolute;
    top: 1.98rem;
    bottom: 0;
    left: 0;
    right: 0;
    .loading{
      width: 20px;
      height: 20px;
      margin-top: 10px;
      background-image: url('../../../assets/images/loading.gif');
      background-size: cover;
      float: left;
    }
    ul{
      list-style: none;
      width: 100%;
      padding: 0 0.32rem;
      box-sizing: border-box;
      li{
        height: 1.78rem;
        border-bottom: 0.01rem solid #ddd;
        position: relative;
        .information{
          position: absolute;
          left: 0;
          right: 0.5rem;
          top: 0;
          height: 100%;
          .title{
            font-size: 0.32rem;
            width: 100%;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(17,17,17,1);
            line-height: 0.32rem;
            margin-top: 0.24rem;
            margin-bottom: 0.16rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          .info{
            font-size: 0.24rem;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(128,128,128,1);
            line-height: 0.24rem;
            margin-bottom: 0.2rem;
            overflow: hidden;
            position: relative;
            .time{
              width: 2.9rem;
              float: left;
            }
            .saveTo{
              position: absolute;
              top: 0;
              left: 2.9rem;
              right: 0;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
          }
          .fromWrap{
            font-size: 0.28rem;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(17,17,17,1);
            line-height: 0.42rem;
            overflow: hidden;
            position: relative;
            .size{
              width: 2.2rem;
              float: left;
              margin-right: 0.6rem;
            }
            .from{
              position: absolute;
              top: 0;
              left: 2.2rem;
              right: 0;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
          }
        }
        // ._van-radio{
        //   width: 0.34rem;
        //   height: 0.34rem;
        //   position: absolute;
        //   top: 0.72rem;
        //   right: 0;
        //   .van-radio{
        //     width: 100%;
        //     height: 100%;
        //   }
        //   .van-radio__icon-wrap{
        //     font-size: 0.34rem!important;
        //   }
        // }
        .check{
          width: 0.34rem;
          height: 0.34rem;
          position: absolute;
          top: 0.72rem;
          right: 0;
          i{
            width: 100%;
            height: 100%;
            float: left;
            background-image: url('../../../assets/images/check.png');
            background-size: cover;
          }
          .checkActive{
            background-image: url('../../../assets/images/checkActive.png');
          }
        }
      }
    }
  }
  img{
    position: absolute;
    bottom: 0;
    z-index: 1000;
  }
}
</style>