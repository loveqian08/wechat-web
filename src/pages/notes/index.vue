<template>
  <div class="noteWrap">
    <div class="tabHead">
      <!-- <van-tabs :active="activeTab" @change="onChange">
        <van-tab title="我的笔记" name="1">
          
        </van-tab>
        <van-tab title="语音速记" name="2">语音速记</van-tab>
        <van-tab title="收藏文件" name="3">收藏文件</van-tab>
      </van-tabs> -->
      <div class="noteWrap ali" :class="{'active_li': activeIdx === 1}" @click="changeTab(1)">
        <span class="tab">我的笔记</span>
        <i class="line" v-show="activeIdx === 1"></i>
      </div>
      <div class="noteWrap ali" :class="{'active_li': activeIdx === 2}" @click="changeTab(2)">
        <span class="tab">语音速记</span>
        <i class="line" v-show="activeIdx === 2"></i>
      </div>
      <div class="noteWrap ali" :class="{'active_li': activeIdx === 3}" @click="changeTab(3)">
        <span class="tab">收藏文件</span>
        <i class="line" v-show="activeIdx === 3"></i>
      </div>
    </div>
    <div class="content">
      <my-note v-if="activeIdx === 1" @shareData="shareData" :popShow="popShow"></my-note>
      <audio-note v-if="activeIdx === 2" @shareData="shareData" :popShow="popShow"></audio-note>
      <my-file v-if="activeIdx === 3" @shareData="shareData" :popShow="popShow"></my-file>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import myNote from '@/components/myNote.vue'
import audioNote from '@/components/audioNote.vue'
import myFile from '@/components/myFile.vue'
export default {
  data () {
    return {
      activeIdx: 1,
      shareObj: {},
      popShow: false
    }
  },
  components: {
    myNote: myNote,
    audioNote: audioNote,
    myFile: myFile
  },
  onLoad (options) {
    const _this = this
    console.log('显示了')
    console.log(options)
    try {
      let active = wx.getStorageSync('activeIdx')
      let filePath = wx.getStorageSync('filePath')
      console.log(active, filePath)
      if (active && filePath) {
        console.log('开始打开文档')
        _this.activeIdx = Number(active)
        wx.getStorage({
          key: 'token',
          success (res) {
            console.log(456)
            wx.showLoading({
              title: '文件加载中,请稍后'
            })
            wx.downloadFile({
              url: filePath,
              header: {
                'X-Token': res.data
              },
              success (result) {
                wx.hideLoading()
                console.log(789)
                console.log(result)
                // _this.shareObj.path = result.tempFilePath
                wx.openDocument({
                  filePath: result.tempFilePath,
                  success (r) {
                    console.log('打开文件成功')
                    console.log(r)
                  },
                  fail (err) {
                    console.log('打开文件失败')
                    console.log(err)
                  }
                })
              },
              fail (err) {
                console.log(err)
                wx.hideLoading()
                wx.showToast({
                  title: '文件加载失败',
                  icon: 'none',
                  duration: 2000
                })
              }
            })
          },
          fail (err) {
            console.log('获取缓存失败')
            console.log(err)
          }
        })
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
      console.log('获取失败')
      console.log(e)
    }
  },
  onShareAppMessage (option) {
    const _this = this
    let shareObj = {
      title: this.shareObj.name,
      path: '/pages/initPage/main',
      success: function () {
        _this.popShow = false
      },
      complete: function () {
        _this.popShow = false
      }
    }
    if (option.from === 'button') {
      console.log(option.target)
      let url = encodeURIComponent('/pages/notes/main?activeIdx=' + this.shareObj.activeIdx + '&&filePath=' + this.shareObj.path)
      shareObj.path = `/pages/initPage/main?url=${url}`
    }
    console.log(shareObj)
    return shareObj
  },
  methods: {
    shareData (obj) {
      this.shareObj = obj
      console.log('取到数据了')
      console.log(obj)
    },
    changeTab (index) {
      this.activeIdx = index
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
}
</script>

<style lang="scss" scoped>
.noteWrap{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .tabHead{
    width: 100%;
    height: 0.94rem;
    background-color: #DE2910;
    .ali{
      width: 33.3%;
      float: left;
      height: 100%;
      position: relative;
      .tab{
        float: left;
        width: 100%;
        height: 100%;
        line-height: 0.94rem;
        text-align: center;
        font-size: 0.3rem;
        font-family: PingFang SC;
        font-weight: 400;
        color:rgba(255,255,255,1);
        opacity: 0.9;
      }
      i{
        width: 1.18rem;
        height: 0.05rem;
        background:rgba(255,255,255,1);
        border-radius: 0.03rem;
        position: absolute;
        left: 50%;
        bottom: 0.12rem;
        transform: translateX(-50%);
      }
    }
    .active_li{
      .tab{
        opacity: 1;
        font-weight: bold;
      }
    }
  }
}
</style>
