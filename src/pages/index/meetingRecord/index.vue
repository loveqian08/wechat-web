<template>
  <div class="recordWrap">
    <div class="home">
      <div class="titleWrap">
        <div class="title">{{signDetail.meetingName}}</div>
        <div class="createTime">{{signDetail.meetingTime}}</div>
      </div>
      <div class="seeBtn" @click="toFileDetail(signDetail.meetingId)">查看会议材料</div>
    </div>
    <div class="audioWrap">
      <div class="icon" :class="{'play': isPlay}" @click="play()"></div>
      <div class="info">
        <div class="audioName">{{audioInfo.audioName}}</div>
        <div class="audioTime">
          <span class="start">{{audioInfo.startTime}}</span>
          <span class="end">{{audioInfo.endTime}}</span>
        </div>
        <!-- <div class="progressWrap">
          <div class="progress">
            <div class="pregressActive"></div>
          </div>
          <i class="iconPic"></i>
        </div> -->
        <slider :step="1" :value="sliderVal" backgroundColor="#ccc" activeColor="#EB3017" :block-size="12" :max="duration" @change="slideChange"></slider>
      </div>
    </div>
    <div class="tagWrap">
      <van-tabs :active="activeIndex" animated swipeable @change="tabChange" nav-class="tabsTop" tab-class="tabOne">
        <van-tab :title="item.signName" :name="index" v-for="(item, index) in signDetail.signList" :key="index" custom-class="theTab">
          <div class="contentWrap">
            <div class="content" :class="{'autoContent': item.getMore}">
              <div id="text">{{item.content}}</div>
            </div>
            <div class="seeMore" v-show="hasMore" @click="getMoreData(item, index)">
              {{item.moreText}}<i :class="{'rota': item.moreText === '收起'}"></i>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="picWrap">
      <div class="main" v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import {getSignList} from '@/utils/apiServer.js'
export default {
  data () {
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
    }
  },
  onLoad (options) {
    console.log(options)
    const _this = this
    this.InnerAudioContext = wx.createInnerAudioContext()
    console.log(this.InnerAudioContext)
    this.getDataList(options.meetingId)
    let refH = 0
    let wrapH = 0
    setTimeout(() => {
      var query = wx.createSelectorQuery();
      // 选择id
      query.select('#text').boundingClientRect(function (rect) {
        if (rect.height) {
          // clearInterval(theTime)
          refH = rect.height
        }
      }).exec()
      query.select('.content').boundingClientRect(function (ace) {
        if (ace.height) {
          wrapH = ace.height
        }
      }).exec()
      let theTime = setInterval(() => {
        if (wrapH && refH) {
          clearInterval(theTime)
          if (refH <= wrapH) {
            _this.hasMore = false
          } else {
            _this.hasMore = true
          }
        }
      }, 100)
    }, 500)
  },
  onUnload () {
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
    toFileDetail (id) {
      wx.navigateTo({
        url: '../meetingFile/main?meetingId=' + id
      })
    },
    getMoreData (item, index) {
      if (item.moreText === '查看更多') {
        item.getMore = true
        item.moreText = '收起'
      } else {
        item.getMore = false
        item.moreText = '查看更多'
      }
      this.signDetail.signList = JSON.parse(JSON.stringify(this.signDetail.signList))
      console.log(this.signDetail.signList)
    },
    tabChange (event) {
      let index = event.mp.detail.name
      this.imgList = this.signDetail.signList[index].imgList
      this.duration = this.signDetail.signList[index].duration
      this.audioInfo.audioSrc = this.signDetail.signList[index].voiceUrl
      this.audioInfo.startTime = '00:00:00'
      this.audioInfo.endTime = this.timeFormat(this.signDetail.signList[index].duration)
      this.audioInfo.audioName = this.signDetail.signList[index].signName
      this.InnerAudioContext.src = this.audioInfo.audioSrc
      this.sliderVal = 0
      this.InnerAudioContext.seek(this.sliderVal)
      this.InnerAudioContext.pause()
      this.isPlay = false
      clearInterval(this.timer)
    },
    slideChange (event) {
      this.sliderVal = event.mp.detail.value
      this.audioInfo.startTime = this.timeFormat(this.sliderVal)
      // this.innerAudioContext.startTime = this.sliderVal
      this.InnerAudioContext.seek(this.sliderVal)
      if (this.isPlay) {
        this.InnerAudioContext.play()
      } else {
        this.InnerAudioContext.pause()
      }
    },
    play () {
      if (this.isPlay) {
        this.isPlay = false
        // this.innerAudioContext.startTime = this.sliderVal
        this.InnerAudioContext.pause()
        clearInterval(this.timer)
      } else {
        this.isPlay = true
        this.InnerAudioContext.play()
        console.log(this.InnerAudioContext)
        this.timer = setInterval(() => {
          this.sliderVal++
          this.audioInfo.startTime = this.timeFormat(this.sliderVal)
          if (this.sliderVal === this.duration + 1) {
            clearInterval(this.timer)
            this.sliderVal = 0
            this.InnerAudioContext.seek(this.sliderVal)
            this.audioInfo.startTime = this.timeFormat(this.sliderVal)
            this.InnerAudioContext.pause()
            this.isPlay = false
          }
        }, 1000)
      }
    },
    formatJson (json) {
      let str = ''
      if (json) {
        let arr = JSON.parse(json)
        arr.forEach(item => {
          str += item.words
        })
      } else {
        str = ''
      }
      console.log(str)
      return str
    },
    imgFormat (json) {
      let arr = []
      if (json) {
        arr = JSON.parse(json)
      } else {
        arr = []
      }
      return arr
    },
    async getDataList (id) {
      try {
        const res = await getSignList({meetId: id})
        if (res.code === 0) {
          this.signDetail = res.data
          // console.log(this.signDetail.signList);
          this.signDetail.signList.forEach(tmp => {
            console.log(tmp);
            tmp.moreText = '查看更多'
            tmp.getMore = false
            tmp.content = this.formatJson(tmp.voiceWordsJson)
            tmp.imgList = this.imgFormat(tmp.signDrawJson)
          })
          this.imgList = this.signDetail.signList[0].imgList
          this.duration = this.signDetail.signList[0].duration
          this.audioInfo.audioSrc = this.signDetail.signList[0].voiceUrl
          this.audioInfo.startTime = '00:00:00'
          this.audioInfo.endTime = this.timeFormat(this.signDetail.signList[0].duration)
          this.audioInfo.audioName = this.signDetail.signList[0].signName
          this.InnerAudioContext.src = this.audioInfo.audioSrc
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    timeFormat (time) {
      let h = Math.floor(time / 3600)
      let min = Math.floor((time % 3600) / 60)
      let s = Math.floor((time % 60))
      if (h < 10) {
        h = '0' + h
      }
      if (min < 10) {
        min = '0' + min
      }
      if (s < 10) {
        s = '0' + s
      }
      return `${h}:${min}:${s}`
    }
  }
}
</script>
<style lang="scss" scoped>
.recordWrap{
  background-color: #F7F7F7;
  padding-top: 0.16rem;
  .home{
    padding: 0 0.32rem;
    height: 1.12rem;
    background-color: #fff;
    position: relative;
    margin-bottom: 0.08rem;
    .titleWrap{
      height: 100%;
      position: absolute;
      top: 0;
      right: 2.1rem;
      left: 0.32rem;
      .title{
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.25rem;
        font-size: 0.28rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(17, 17, 17, 1);
      }
      .createTime{
        height: 0.22rem;
        line-height: 0.22rem;
        margin-top: 0.12rem;
        font-size: 0.24rem;
        font-family:San Francisco Display;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
    .seeBtn{
      width: 1.68rem;
      height: 0.58rem;
      line-height: 0.58rem;
      text-align: center;
      border: 0.01rem solid #ccc;
      border-radius: 0.04rem;
      margin-top: 0.26rem;
      float: right;
      font-size: 0.24rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
  }
  .audioWrap{
    height: 1.37rem;
    padding: 0 0.32rem;
    background-color: #fff;
    position: relative;
    .icon{
      width: 0.56rem;
      height: 0.56rem;
      float: left;
      margin-top: 0.4rem;
      background-size: cover;
      background-image: url('../../../assets/images/suspended.png');
    }
    .play{
      background-image: url('../../../assets/images/play.png');
    }
    .info{
      height: 100%;
      position: absolute;
      left: 1.12rem;
      right: 0.32rem;
      top: 0;
      .audioName{
        margin-top: 0.2rem;
        font-size: 0.28rem;
        font-family: PingFang SC;
        font-weight: 500;
        color:rgba(17, 17, 17, 1);
        float: left;
        width: 100%;
      }
      .audioTime{
        width: 100%;
        margin-top: 0.08rem;
        float: left;
        overflow: hidden;
        .start{
          float: left;
          font-size: 0.24rem;
          font-family: San Francisco Display;
          font-weight: 400;
          color:rgba(153, 153, 153, 1);
        }
        .end{
          float: right;
          font-size: 0.24rem;
          font-family:San Francisco Display;
          font-weight:400;
          color:rgba(153, 153, 153, 1);
        }
      }
      slider{
        float: left;
        height: 0.2rem;
        width: 100%;
        margin: 0;
      }
      .progressWrap{
        height: 0.2rem;
        margin-top: 0.06rem;
        float: left;
        width: 100%;
        padding: 0 0.1rem;
        box-sizing: border-box;
        position: relative;
        .progress{
          width: 100%;
          float: left;
          height: 0.04rem;
          border-radius: 0.02rem;
          background-color: #ccc;
          margin-top: 0.08rem;
          .progressActive{
            height: 100%;
            background-color: #EB3017;
          }
        }
        .iconPic{
          width: 0.2rem;
          height: 0.2rem;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          background-image: url('../../../assets/images/slide.png');
          background-size: cover;
        }
      }
    }
  }
  .picWrap{
    padding: 0 0.32rem;
    background-color: #fff;
    padding-top: 0.24rem;
    .main{
      width: 100%;
      height: 5.01rem;
      border: 0.08rem solid #ddd;
      border-radius: 0.04rem;
      box-sizing: border-box;
      margin-bottom: 0.24rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<style lang="scss">
.recordWrap .tabsTop{
  background-color: #F7F7F7;
}
.recordWrap .tabOne{
  background-color: #F7F7F7;
}
.recordWrap .theTab{
  background-color: #fff;
}
.recordWrap .theTab .contentWrap{
  padding: 0 0.32rem;
  border-bottom: 0.01rem solid #F7F7F7;
  overflow: hidden;
}
.recordWrap .theTab .contentWrap .content{
  height: 3rem;
  width: 100%;
  margin-top: 0.32rem;
  float: left;
  overflow: hidden;
}
.recordWrap .theTab .contentWrap .content .text{
  width: 100%;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: 400;
  color:rgba(17,17,17,1);
  line-height: 0.42rem;
}
.recordWrap .theTab .contentWrap .autoContent{
  height: auto!important;
}
.recordWrap .theTab .contentWrap .seeMore{
  height: 0.68rem;
  width: 2rem;
  float: left;
  margin-left: 2.43rem;
  text-align: center;
  color: #DE2910;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: 400;
}
.recordWrap .theTab .contentWrap .seeMore i{
  width: 0.29rem;
  height: 0.16rem;
  display: inline-block;
  background-image: url('../../../assets/images/getMore.png');
  background-size: 100% 100%;
  margin-left: 0.05rem;
}
.recordWrap .theTab .contentWrap .seeMore .rota{
  transform: rotate(180deg)
}
.recordWrap .van-ellipsis{
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: 500;
  color:rgba(17, 17, 17, 1);
}
</style>