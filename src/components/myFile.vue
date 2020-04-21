<template>
  <div class="myFileWrap">
    <div class="searchWrap">
      <div class="search">
        <i></i><input type="text" v-model="keyWords" placeholder="搜索文件" placeholder-style="font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;" @input="getList">
      </div>
      <div class="upLoad" @click="upData"></div>
    </div>
    <!-- <div class="listWrap">
      <div class="noData" v-if="(!fileList || fileList.length === 0) && requested">
        <img :src="noData"/>
        <span>暂无数据</span>
      </div>
      <ul @touchstart="touchstart">
        <li v-for="(item, index) in fileList" :key="index" @click="openDocument(item)">
          <div class="information">
            <div class="title">{{item.fileName}}</div>
            <div class="info">
              <span class="time">{{item.createTime}}</span>
              <span class="saveTo">{{item.source}}</span>
            </div>
            <div class="fromWrap">
              <span class="size">大小： {{item.size}}k</span>
            </div>
          </div>
          <div class="more" @click.stop="openAction(index)">
            <span class="action" v-show="actionIdx === index && isOpen">
              <span class="delete" @click.stop="deleteMeeting(item.uuid)">
                <i></i>
                <span>删除文件</span>
              </span>
              <span class="line"></span>
              <span class="detail" @click="shareFile(item)">
                <i></i>
                <span>分享到微信</span>
              </span>
            </span>
          </div>
        </li>
      </ul>
    </div> -->
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
        <!-- <div class="noData" v-if="(!fileList || fileList.length === 0) && requested">
          <img :src="noData"/>
          <span>暂无数据</span>
        </div>
        <div class="pulldown">
          <div v-if="transY < 0 && !isReques && !finishEd">
            <p class="iconfont icon-pull-down" space="nbsp"></p><p> {{pullText}}</p>
          </div>
          <div v-else-if="transY >= 0 && !isReques && !finishEd">
            <p class="iconfont icon-release-up" space="nbsp"></p><p> {{releaseText}}</p>
          </div>
          <div v-else-if="isReques && transY === 0 && !finishEd" class="loadingWrap">
            <p class="loading" space="nbsp"></p><p> {{loadingText}}...</p>
          </div>
          <div v-else-if="finishEd && transY < 0 && !isReques">
            <p class="iconfont icon-complete" space="nbsp"></p><p class="loadingText"> {{finishText}}</p>
          </div>
        </div> -->
        <template slot="loading">
          <p class="loading"></p>
        </template>
        <ul>
          <li v-for="(item, index) in fileList" :key="index" @click="openDocument(item)">
            <div class="information">
              <div class="title">{{item.fileName}}</div>
              <div class="info">
                <span class="time">{{item.createTime}}</span>
                <span class="saveTo">{{item.source}}</span>
              </div>
              <div class="fromWrap">
                <span class="size">大小： {{item.size}}k</span>
              </div>
            </div>
            <div class="more" @click.stop="openAction(index)">
              <span class="action" v-show="actionIdx === index && isOpen">
                <span class="delete" @click.stop="deleteMeeting(item.uuid)">
                  <i></i>
                  <span>删除文件</span>
                </span>
                <span class="line"></span>
                <span class="detail" @click="shareFile(item)">
                  <i></i>
                  <span>分享到微信</span>
                </span>
              </span>
            </div>
          </li>
        </ul>
      </my-scroll>
    </div>
    <!-- <van-overlay :show="showOver" @:click="onClickHide" style="z-index: 4;">
    </van-overlay> -->
    <div class="zhezhao" v-if="openSrc"></div>
    <div class="imgWrap" v-for="(tmp, idx) in imgList" :key="idx" v-show="openSrc === tmp">
      <img :src="tmp" alt="" @click.stop="onClickHide" @load="imgLoad">
    </div>
    <van-popup :show="popShow" position="bottom" custom-style="height: 30%;">
      <div class="shareChate">
        <button data-name="shareBtn" open-type="share"></button>
        <span>发送给微信好友</span>
      </div>
      <div class="shareUrl">
        <button @click="copyUrl" class="copy" :data-clipboard-text="copyText"></button>
        <span>复制链接</span>
      </div>
      <div class="cancel" @click="popShow = false">取&nbsp;&nbsp;&nbsp;&nbsp;消</div>
    </van-popup>
    <van-dialog id="van-dialog" />
    <van-notify id="van-notify" />
  </div>
</template>
<script>
import {getMyFileList, deleteMyfile, addMyfile} from '@/utils/apiServer.js'
import Dialog from '@/components/vant-webapp/dialog/dialog'
import myScroll from '@/components/myScroll.vue'
// import baseUrl from '@/utils/baseUrl.js'
export default {
  data () {
    return {
      arr: [
        {
          val: 1,
          checked: false
        }
      ],
      refreshing: true, // 是否正在刷新
      popShow: false,
      openSrc: '',
      noData: require('../assets/images/noData.png'),
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
    }
  },
  // props: {
  //   popShow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  onLoad () {
    this.fileList = []
    this.getList()
  },
  components: {
    myScroll: myScroll
  },
  methods: {
    imgLoad (e) {
      console.log(e)
    },
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
    onClickHide () {
      console.log(111);
      this.showOver = false
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
        this.showOver = true
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
    copyUrl () {
      wx.setClipboardData({
        data: this.copyText,
        success: function (res) {
          // wx.getClipboardData({
          //   success: function (result) {
          //     console.log(result.data) // data
          //   }
          // })
          wx.showToast({
            title: '复制链接成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
      console.log('复制成功')
    },
    sizeFormat (size) {
      return (size / 1000).toFixed(2)
    },
    async deleteMeeting (uuid) {
      Dialog.confirm({
        message: '删除文件后将不可恢复, 是否确定删除？'
      }).then(async () => {
        try {
          const res = await deleteMyfile({uuid: uuid}, {})
          if (res.code === 0) {
            this.$notify({
              type: 'success',
              message: '删除成功'
            })
            this.isOpen = false
            this.page = 1;
            this.isBottom = false;
            this.getList('mastNew')
          }
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: e.message
          })
        }
      }).catch(() => {
        // on cancel
      });
    },
    shareFile (item) {
      console.log(123)
      const _this = this
      this.shareObj = {
        name: item.fileName,
        activeIdx: 3,
        path: item.file.url
      }
      _this.popShow = true
      this.copyText = item.file.url
      _this.$emit('shareData', _this.shareObj)
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
    openAction (index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index
        this.isOpen = true
      } else {
        this.isOpen = !this.isOpen
      }
    },
    upData () {
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
    async addFile (name, fileId) {
      try {
        let obj = wx.getStorageSync('userInfo')
        let par = {
          userUuid: obj.uuid,
          source: 4,
          fileName: name,
          fileUuid: fileId,
          memo: ''
        }
        try {
          const res = await addMyfile(par)
          if (res.code === 0) {
            this.$notify({
              type: 'success',
              message: '添加成功'
            })
            this.page = 1;
            this.isBottom = false;
            this.getList('mastNew');
          }
        } catch (err) {
          this.$notify({
            type: 'danger',
            message: err.message
          })
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
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
          'token': token,
          'fileName': name
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
            _this.addFile(name, data.fileId)
          }
        }
      })
    },
    async getList (isNew) {
      try {
        const res = await getMyFileList({keyWords: this.keyWords, page: this.page, pageSize: this.size})
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
<style lang="scss" scoped>
.myFileWrap{
  position: absolute;
  top: 0.94rem;
  left: 0;
  right: 0;
  bottom: 0;
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
    margin-top: 2rem;
    z-index: 10;
    img{
      width: 100%;
    }
  }
  .shareChate{
    width: 50%;
    float: left;
    height: 100%;
    position: relative;
    button{
      width: 0.94rem;
      height: 0.94rem;
      border: none;
      border-radius: 50%;
      outline: none;
      background-image: url('../assets/images/chat.png');
      background-size: cover;
      position: absolute;
      top: 0.46rem;
      left: 50%;
      transform: translateX(-50%);
    }
    span{
      width: 100%;
      text-align: center;
      float: left;
      font-size: 0.28rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(102,102,102,1);
      position: absolute;
      left: 0;
      bottom: 1.23rem;
    }
  }
  .shareUrl{
    width: 50%;
    float: left;
    height: 100%;
    position: relative;
    button{
      width: 0.94rem;
      height: 0.94rem;
      border: none;
      border-radius: 50%;
      outline: none;
      background-image: url('../assets/images/chatUrl.png');
      background-size: cover;
      position: absolute;
      top: 0.46rem;
      left: 50%;
      transform: translateX(-50%);
    }
    span{
      width: 100%;
      text-align: center;
      float: left;
      font-size: 0.28rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(102,102,102,1);
      position: absolute;
      left: 0;
      bottom: 1.23rem;
    }
  }
  .cancel{
    width: 100%;
    position: absolute;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    bottom: 0;
    left: 0;
    font-size: 0.34rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    background-color: #eee;
    color:#333;
  }
  .searchWrap{
    height: 1.04rem;
    position: absolute;
    top: 0;
    left: 0.32rem;
    right: 0.32rem;
    border-bottom: 0.01rem solid #ddd;
    background-color: #fff;
    z-index: 3;
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
        background-image: url('../assets/images/fileSearch.png');
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
    .upLoad{
      height: 0.41rem;
      width: 0.45rem;
      float: right;
      margin-right: 0.06rem;
      margin-top: 0.3rem;
      background-image: url('../assets/images/upload.png');
      background-size: cover;
    }
  }
  .listWrap{
    background-color: #fff;
    position: absolute;
    top: 1.04rem;
    bottom: 0;
    left: 0;
    right: 0;
    .loading{
      width: 20px;
      height: 20px;
      margin-top: 10px;
      background-image: url('../assets/images/loading.gif');
      background-size: cover;
      float: left;
    }
    .noData{
      width: 5.43rem;
      height: 4.6rem;
      position: absolute;
      top: 2.2rem;
      left: 0.72rem;
      img{
        width: 5.43rem;
        height: 4.14rem;
        float: left;
      }
      span{
        width: 100%;
        font-size: 0.32rem;
        font-family: PingFang SC;
        font-weight: 400;
        float: left;
        color:#333;
        text-align: center;
        margin-top: 0.08rem;
      }
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
            width: 6.06rem;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(17,17,17,1);
            line-height: 0.32rem;
            margin-top: 0.24rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            display: inline-block;
            height: 0.42rem;
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
        .more{
          width: 0.48rem;
          height: 0.48rem;
          background-image: url('../assets/images/more.png');
          background-size: cover;
          position: absolute;
          right: 0;
          top: 0.16rem;
          .action{
            width: 4.43rem;
            height: 1.86rem;
            background-image: url('../assets/images/xiala2.png');
            position: absolute;
            top: 0.5rem;
            right: 0;
            background-size: 100% 100%;
            z-index: 10;
            .delete{
              width: 2.2rem;
              height: 1.12rem;
              margin-top: 0.37rem;
              float: left;
              i{
                background-image: url('../assets/images/delete.png');
                width: 0.42rem;
                height: 0.45rem;
                background-size: cover;
                margin-top: 0.16rem;
                margin-left: 0.89rem;
                float: left;
              }
              span{
                width: 100%;
                float: left;
                text-align: center;
                font-size: 0.28rem;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(63,11,4,1);
                margin-top: 0.15rem;
              }
            }
            .line{
              width: 0.02rem;
              height: 1.12rem;
              margin-top: 0.42rem;
              float: left;
              background-color: #ddd;
            }
            .export{
              width: 2.2rem;
              height: 1.12rem;
              margin-top: 0.37rem;
              float: left;
              i{
                background-image: url('../assets/images/export.png');
                width: 0.4rem;
                height: 0.41rem;
                background-size: cover;
                margin-top: 0.18rem;
                margin-left: 0.9rem;
                float: left;
              }
              span{
                width: 100%;
                float: left;
                text-align: center;
                font-size: 0.28rem;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(63,11,4,1);
                margin-top: 0.15rem;
              }
            }
            .line2{
              width: 0.01rem;
              height: 1.12rem;
              margin-top: 0.42rem;
              float: left;
              background-color: #ddd;
            }
            .detail{
              width: 2.2rem;
              height: 1.12rem;
              margin-top: 0.37rem;
              float: right;
              i{
                background-image: url('../assets/images/shareTo.png');
                width: 0.42rem;
                height: 0.38rem;
                background-size: 100% 100%;
                margin-top: 0.2rem;
                margin-left: 0.9rem;
                float: left;
              }
              span{
                width: 100%;
                float: left;
                text-align: center;
                font-size: 0.28rem;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(63,11,4,1);
                margin-top: 0.15rem;
              }
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
            background-image: url('../assets/images/check.png');
            background-size: cover;
          }
          .checkActive{
            background-image: url('../assets/images/checkActive.png');
          }
        }
      }
    }
    .noMore{
      font-size: 0.28rem;
      line-height: 1rem;
      text-align: center;
      height: 1rem;
    }
  }
}
</style>