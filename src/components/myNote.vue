<template>
  <div class="myNote">
    <div class="searchWrap">
      <div class="search">
        <i></i><input type="text" v-model="par.keyWords" placeholder="搜索笔记" placeholder-style="font-size: 14px;font-family:PingFang SC;font-weight:400;color:#999;" @input="getData">
      </div>
    </div>
    <div class="contentWrap">
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
      :fileList="list"
      :lowerThreshold="lowerThreshold"
      @scrolltoupper="scrolltoupper"
      @scrolltolower="scrolltolower">
        <template slot="loading">
          <p class="loading"></p>
        </template>
        <ul>
          <li v-for="(item, index) in list" :key="index" @click="toDetail(item.uuid)">
            <div class="title">
              <span v-if="item.name">{{item.name}}</span>
              <span v-else>{{item.createTime}}</span>
              <i class="more" @click.stop="openAction(index)">
                <span class="action" v-show="actionIdx === index && isOpen">
                  <span class="delete" @click.stop="deleteMeeting(item.uuid)">
                    <i></i>
                    <span>删除笔记</span>
                  </span>
                  <span class="line"></span>
                  <!-- <span class="export" @click.stop="exportMeet(item.uuid)">
                    <i></i>
                    <span>导出到本地</span>
                  </span> -->
                  <span class="detail" @click.stop="share(item)">
                    <i></i>
                    <span>分享到微信</span>
                  </span>
                </span>
              </i>
            </div>
            <div class="info">
              <span class="time">{{item.updateTime}}</span>
            </div>
            <div class="content" v-if="item.memo">{{item.memo}}</div>
          </li>
        </ul>
      </my-scroll>
      <van-popup :show="popShow" position="bottom" custom-style="height: 30%;">
        <div class="shareChate">
          <button data-name="shareBtn" open-type="share"></button>
          <span>发送给微信好友</span>
        </div>
        <div class="shareUrl">
          <button @click="copyUrl"></button>
          <span>复制链接</span>
        </div>
        <div class="cancel" @click="popShow = false">取&nbsp;&nbsp;&nbsp;&nbsp;消</div>
      </van-popup>
      <van-dialog id="van-dialog" />
      <van-notify id="van-notify" />
    </div>
  </div>
</template>
<script>
import {getNoteList, deleteNote} from '@/utils/apiServer.js'
import Dialog from '@/components/vant-webapp/dialog/dialog'
import myScroll from '@/components/myScroll.vue'
export default {
  data () {
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
      noData: require('../assets/images/noData.png'),
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
    }
  },
  components: {
    myScroll: myScroll
  },
  onLoad () {
    this.list = []
    this.getData()
  },
  methods: {
    scrolltoupper (isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.par.page = 1;
      this.getData('new')
    },
    scrolltolower () {
      console.log('到底部了');
      this.par.page++;
      this.getData();
    },
    // getMore () {
    //    wx.navigateTo({
    //     url: 'meetingRecord/main?meetingId=' + item.meetingId
    //   })
    // },
    toDetail (uuid) {
      wx.navigateTo({
        url: '/pages/notes/noteDetail/main?uuid=' + uuid
      })
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
    share (item) {
      const _this = this
      this.shareObj = {
        name: item.name,
        activeIdx: 1,
        path: 'https://suji.learndar.com/api/mini/note/export/' + item.uuid
      }
      _this.popShow = true
      this.copyText = 'https://suji.learndar.com/api/mini/note/export/' + item.uuid
      _this.$emit('shareData', _this.shareObj)
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
    deleteMeeting (uuid) {
      const _this = this
      Dialog.confirm({
        message: '删除笔记后将不可恢复, 是否确定删除？'
      }).then(async () => {
        try {
          const res = await deleteNote({uuid: uuid}, {})
          if (res.code === 0) {
            _this.$notify({ type: 'success', message: '删除成功' })
            _this.getData('mastNew')
            _this.isOpen = false
          }
        } catch (e) {
          console.log(e)
          _this.$notify({ type: 'danger', message: e.message })
        }
      }).catch(() => {
        // on cancel
      });
    },
    async exportMeet () {
      console.log(111)
    },
    openAction (index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index
        this.isOpen = true
      } else {
        this.isOpen = !this.isOpen
      }
    },
    async getData (isNew) {
      try {
        const res = await getNoteList(this.par)
        if (res.code === 0) {
          if (isNew) {
            this.list = res.data.records;
          } else {
            this.list = this.list.concat(res.data.records);
          }
          console.log(this.list);
          if (res.data.records.length < this.par.pageSize) {
            this.isBottom = true;
          }
          if (isNew === 'new') {
            this.ty = -40;
            this.animateStatus = true;
            this.isReques = false;
            this.finishEd = true;
            setTimeout(() => {
              this.finishEd = false;
            }, 1000);
          }
          this.requested = true
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .myNote{
    padding: 0 0.32rem;
    position: absolute;
    top: 0.94rem;
    bottom: 0;
    left: 0;
    right: 0;
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
        width: 100%;
        height: 0.64rem;
        border-radius: 0.32rem;
        background-color: #F8F8F8;
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
          width: 5.8rem;
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
    }
    .contentWrap{
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
        width: 100%;
        list-style: none;
        padding: 0 0.32rem;
        box-sizing: border-box;
        li{
          width: 100%;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
          .title{
            height: 0.48rem;
            margin-top: 0.16rem;
            span{
              font-size: 0.32rem;
              font-family:PingFang SC;
              font-weight:bold;
              color:rgba(17,17,17,1);
              line-height: 0.48rem;
              float: left;
              height: 0.48rem;
            }
            i{
              width: 0.48rem;
              height: 0.48rem;
              background-image: url('../assets/images/more.png');
              float: right;
              background-size: cover;
              position: relative;
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
                  width: 2.1rem;
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
                .detail{
                  width: 2.1rem;
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
          }
          .info{
            overflow: hidden;
            margin-top: 0.12rem;
            height: 0.28rem;
            .time{
              height: 0.28rem;
              float: left;
              font-size: 0.24rem;
              font-family:Helvetica LT Light;
              font-weight:400;
              color:rgba(128,128,128,1);
              line-height: 0.28rem;
            }
          }
          .content{
            font-size: 0.28rem;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(17,17,17,1);
            line-height: 0.42rem;
            max-height: 0.6rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-top: 0.12rem;
          }
        }
        li:first-child{
          padding-top: 0.08rem;
        }
      }
    }
  }
</style>