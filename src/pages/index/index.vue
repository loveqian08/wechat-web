<template>
  <div class="meetingWrap">
    <div class="searchWrap">
      <i class="searchIcon"></i>
      <i class="clearAll" v-show="keyword !== ''" @click.stop="clearTxt"></i>
      <input type="text" placeholder="搜索会议" v-model="keyword" placeholder-style="font-size: 12px;font-family: PingFang SC;font-weight: 400;color: #FADDD9;" @input="search">
      <span class="addMeeting" @click="addMeeting"></span>
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
          <li v-for="(item, index) in list" :key="index" @click="getMore(item)">
            <div class="title">
              <span>{{item.meetingName}}</span>
              <i class="more" @click.stop="openAction(index)">
                <span class="action" v-show="actionIdx === index && isOpen && item.voiceWordsJson">
                  <span class="delete" @click.stop="deleteMeeting(item.meetingId)">
                    <i></i>
                    <span>删除会议</span>
                  </span>
                  <!-- <span class="line"></span>
                  <span class="export" @click.stop="exportMeet(item.meetingId)">
                    <i></i>
                    <span>导出到本地</span>
                  </span> -->
                  <span class="line"></span>
                  <span class="detail" @click.stop="toDetail(item)">
                    <i></i>
                    <span>查看会议详情</span>
                  </span>
                </span>
                <span class="action2" v-show="actionIdx === index && isOpen && !item.voiceWordsJson">
                  <span class="delete" @click.stop="deleteMeeting(item.meetingId)">
                    <i></i>
                    <span>删除会议</span>
                  </span>
                  <!-- <span class="line"></span>
                  <span class="export" @click.stop="exportMeet(item.meetingId)">
                    <i></i>
                    <span>导出到本地</span>
                  </span> -->
                </span>
              </i>
            </div>
            <div class="info">
              <span class="time">{{item.meetingTime}}</span>
              <span class="person">
                <i></i><b>{{item.peopleNum}}</b>
              </span>
              <span class="share">
                <i></i><b>{{item.fileNum}}</b>
              </span>
            </div>
            <div class="content" v-if="item.signCount">{{item.content}}</div>
            <div class="content" v-if="!item.signCount">暂无会议记录</div>
          </li>
        </ul>
      </my-scroll>
      <van-dialog id="van-dialog" />
    </div>
    <van-overlay :show="showOverLay" @:click="onClickHide"/>
    <div class="myDialog" v-show="showOverLay">
      <div class="title">选择格式</div>
      <div class="options">
        <div class="type" @click="exportFile(1)">
          <i class="mp3"></i>
          <span>mp3</span>
        </div>
        <div class="type" @click="exportFile(3)">
          <i class="pdf"></i>
          <span>pdf</span>
        </div>
        <div class="type" @click="exportFile(2)">
          <i class="docx"></i>
          <span>docx</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getMeetingList, delMeeting, exportMeeting} from '@/utils/apiServer.js'
import Dialog from '@/components/vant-webapp/dialog/dialog'
import Notify from '@/components/vant-webapp/notify/notify'
import store from '@/utils/store.js'
import myScroll from '@/components/myScroll.vue'
export default {
  data () {
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
    }
  },
  components: {
    myScroll: myScroll
  },
  onUnload () {
    this.list = [];
  },
  methods: {
    scrolltoupper (isReques, isBottom, trany) {
      console.log('到顶部了');
      this.isReques = isReques; // 是否开始刷新
      this.isBottom = isBottom; // 是否再无更多数据
      this.ty = trany;
      this.page = 1;
      this.getPageList('new')
    },
    scrolltolower () {
      console.log('到底部了');
      this.page++;
      this.getPageList();
    },
    getMore (item) {
      this.isOpen = false
      if (item.signCount > 0) {
        wx.navigateTo({
          url: 'meetingRecord/main?meetingId=' + item.meetingId
        })
      } else {
        wx.navigateTo({
          url: 'meetingDetail/main?meetingId=' + item.meetingId
        })
      }
    },
    onClickHide () {
      this.showOverLay = false;
    },
    search () {
      if (this.timer) {
        if (this.count < 0.6) {
          this.count = 0;
        }
      } else {
        this.timer = setInterval(() => {
          this.count += 0.1;
          if (this.count >= 0.6) {
            clearInterval(this.timer);
            this.timer = null;
            this.count = 0;
            this.page = 1
            this.isBottom = false
            this.getPageList()
          }
        }, 100)
      }
    },
    async getPageList (isNew) {
      console.log('查询')
      let par = {
        keyWords: this.keyword,
        page: this.page,
        pageSize: this.pageSize
      }
      try {
        const res = await getMeetingList(par)
        console.log(res)
        if (res.code === 0) {
          if (this.page === 1) {
            this.list = res.data.records
          } else {
            this.list = this.list.concat(res.data.records)
          }
          console.log(this.list);
          if (res.data.records.length < this.pageSize) {
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
          this.list.forEach(item => {
            let content = ''
            if (item.voiceWordsJson) {
              let arr = JSON.parse(item.voiceWordsJson)
              arr.forEach((temp) => {
                content += temp.words
              })
              item.content = content
            }
          })
        }
      } catch (e) {
        // this.$Notify(e.message)
      }
    },
    clearTxt () {
      this.keyword = ''
      this.page = 1
      this.isBottom = false
      this.getPageList()
    },
    addMeeting () {
      wx.navigateTo({
        url: 'addMeeting/main'
      })
    },
    openAction (index) {
      if (index !== this.actionIdx) {
        this.actionIdx = index
        this.isOpen = true
      } else {
        this.isOpen = !this.isOpen
      }
    },
    deleteMeeting (id) {
      Dialog.confirm({
        message: '删除会议后将不可恢复, 是否确定删除？'
      }).then(async () => {
        try {
          let ids = []
          ids.push(id)
          const res = await delMeeting({ids: ids})
          if (res.code === 0) {
            Notify({ type: 'success', message: '删除成功' })
            this.page = 1
            this.isBottom = false
            this.getPageList('mastNew')
            this.isOpen = false
          }
        } catch (e) {
          console.log(e)
        }
      }).catch(() => {
        // on cancel
      });
    },
    exportMeet (id) {
      this.showOverLay = true
      this.meetingId = id
      this.isOpen = false
    },
    async exportFile (type) {
      let par = {
        type: type,
        meetingId: this.meetingId
      }
      try {
        const res = await exportMeeting(par)
        // console.log(res)
        // let url = window.URL.createObjectURL(new Blob([res]))
        // window.localStorage.href = url
        this.showOverLay = false;
        console.log(res)
      } catch (e) {
        this.showOverLay = false;
        console.log(e)
      }
      // this.downUrl = 'https://suji.learndar.com/api/mini/meeting/export?type=' + type + '&meetingId=' + this.meetingId;
    },
    toDetail (item) {
      this.isOpen = false;
      wx.navigateTo({
        url: 'meetingRecord/main?meetingId=' + item.meetingId
      })
    }
  },
  created () {
    // let app = getApp()
    // this.getPageList()
  },
  onLoad () {
    // wx.startPullDownRefresh()
    this.list = [];
    this.getPageList()
  },
  onHide () {
    store.commit('SET_RESETLIST', false)
  },
  onShow () {
    let isFrom = store.state.resetList
    if (isFrom) {
      this.page = 1
      this.isBottom = false
      this.getPageList()
    }
  }
}
</script>

<style scoped lang="scss">
.meetingWrap{
  .searchWrap{
    width: 100%;
    height: 0.9rem;
    background-color: #DE2910;
    position: absolute;
    top: 0rem;
    left: 0;
    z-index: 3;
    .searchIcon{
      width: 0.28rem;
      height: 0.28rem;
      background-image: url('../../assets/images/search.png');
      background-size: cover;
      position: absolute;
      top: 0.31rem;
      left: 0.64rem;
      z-index: 2;
    }
    .clearAll{
      width: 0.28rem;
      height: 0.28rem;
      position: absolute;
      right: 1.46rem;
      top: 0.31rem;
      background-image: url('../../assets/images/clear.png');
      background-size: cover;
      z-index: 2;
    }
    input{
      outline: none;
      border: none;
      width: 4.4rem;
      height: 0.58rem;
      background-color: #e55440;
      border-radius: 0.58rem;
      position: absolute;
      top: 0.16rem;
      left: 0.32rem;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      font-size: 0.28rem;
      color: #FFFFFF;
    }
    .placeholder{
      font-size: 0.28rem;
      font-family: PingFang SC;
      font-weight: 400;
      color:#fff;
    }
    input::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
			font-size: 0.28rem;
      font-family: PingFang SC;
      font-weight: 400;
      color:#fff;
		}
		input::-moz-placeholder { /* Firefox 19+ */  
			font-size: 0.28rem;
      font-family: PingFang SC;
      font-weight: 400;
      color:#fff;
		}
		input:-ms-input-placeholder { /* IE 10+ */ 
		  font-size: 0.28rem;
      font-family: PingFang SC;
      font-weight: 400;
      color:#fff;
		}
		input:-moz-placeholder { /* Firefox 18- */ 
		  font-size: 0.28rem;
      font-family: PingFang SC;
      font-weight: 400;
      color:#fff;
		}
    .addMeeting{
      width: 0.56rem;
      height: 0.56rem;
      background-image: url('../../assets/images/add.png');
      background-size: cover;
      position: absolute;
      top: 0.17rem;
      right: 0.32rem;
    }
  }
  .contentWrap{
    // // padding: 0 0.32rem;
    // // margin-top: 0.9rem;
    // // padding-top: 0.9rem;
    position: absolute;
    top: 0.9rem;
    bottom: 0;
    left: 0rem;
    right: 0rem;
    .loading{
      width: 20px;
      height: 20px;
      margin-top: 10px;
      background-image: url('../../assets/images/loading.gif');
      background-size: cover;
      float: left;
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
            background-image: url('../../assets/images/more.png');
            float: right;
            background-size: cover;
            position: relative;
            .action{
              width: 4.43rem;
              height: 1.86rem;
              background-image: url('../../assets/images/xiala2.png');
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
                  background-image: url('../../assets/images/delete.png');
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
                  background-image: url('../../assets/images/export.png');
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
                  background-image: url('../../assets/images/detail.png');
                  width: 0.42rem;
                  height: 0.38rem;
                  background-size: cover;
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
            .action2{
              width: 2.22rem;
              height: 1.86rem;
              background-image: url('../../assets/images/xiala.png');
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
                  background-image: url('../../assets/images/delete.png');
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
                  background-image: url('../../assets/images/export.png');
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
            }
          }
        }
        .info{
          overflow: hidden;
          margin-top: 0.08rem;
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
          .person{
            margin-left: 0.32rem;
            float: left;
            height: 0.28rem;
            overflow: hidden;
            i{
              width: 0.24rem;
              height: 0.24rem;
              float: left;
              background-image: url('../../assets/images/person.png');
              background-size: cover;
            }
            b{
              font-style: normal;
              height: 0.28rem;
              line-height: 0.28rem;
              font-size: 0.24rem;
              font-family:Helvetica LT Light;
              font-weight:400;
              color:rgba(128,128,128,1);
              margin-left: 0.08rem;
              float: left;
            }
          }
          .share{
            margin-left: 0.2rem;
            float: left;
            height: 0.28rem;
            i{
              width: 0.24rem;
              height: 0.24rem;
              float: left;
              background-image: url('../../assets/images/share.png');
              background-size: cover;
            }
            b{
              font-style: normal;
              height: 0.28rem;
              line-height: 0.28rem;
              font-size: 0.24rem;
              font-family:Helvetica LT Light;
              font-weight:400;
              color:rgba(128,128,128,1);
              margin-left: 0.08rem;
              float: left;
            }
          }
        }
        .content{
          font-size: 0.28rem;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(17,17,17,1);
          line-height: 0.42rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
      li:first-child{
        padding-top: 0.08rem;
      }
    }
  }
  .myDialog{
    width: 5.9rem;
    height: 3.4rem;
    border-radius: 0.1rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -2.95rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    .title{
      width: 100%;
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(0,0,0,1);
    }
    .options{
      margin-top: 0.4rem;
      padding: 0 0.45rem;
      height: 1.6rem;
      .type{
        height: 1.6rem;
        width: 1.4rem;
        float: left;
        margin-left: 0.4rem;
        background-color: #fff;
        i{
          width: 0.5rem;
          height: 0.6rem;
          float: left;
          margin-top: 0.3rem;
          margin-left: 0.45rem;
          background-size: cover;
        }
        .mp3{
          background-image: url('../../assets/images/mp3.png');
        }
        .pdf{
          background-image: url('../../assets/images/pdf.png');
        }
        .docx{
          background-image: url('../../assets/images/docx.png');
        }
        span{
          width: 100%;
          float: left;
          text-align: center;
          font-size: 0.28rem;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(0,0,0,1);
          margin-top: 0.2rem;
          float: left;
        }
      }
      .type:active{
        background-color: #F2F2F2;
      }
      .type:first-child{
        margin-left: 0;
      }
    }
  }
}
</style>
