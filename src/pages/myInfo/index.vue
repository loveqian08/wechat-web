<template>
  <div class="myInfo">
    <div class="head">
      <img :src="bgImg" alt="">
      <div class="title">党政办公学习平台</div>
      <div class="photo">
        <img :src="info.photoUrl" alt="">
        <span>{{info.name}}</span>
      </div>
    </div>
    <div class="content">
      <div class="lis" @click="toInfo">
        <span class="info"></span>
        <div class="tabName">个人信息</div>
        <i class="next"></i>
      </div>
      <div class="lis" @click="updataPass">
        <span class="pass"></span>
        <div class="tabName">修改密码</div>
        <i class="next"></i>
      </div>
      <div class="lis" @click="loginOut">
        <span class="logout"></span>
        <div class="tabName">退出登录</div>
        <i class="next"></i>
      </div>
      <van-notify id="van-notify" />
      <van-dialog id="van-dialog" />
    </div>
    <van-popup :show="popShow" @close="onClose" position="bottom" custom-style="height: 25%;">
      <div class="text">我们需要获取您的授权，关联您的微信头像</div>
      <div class="btn">
        <button open-type='getUserInfo' lang="zh_CN" @getuserinfo="onGotUserInfo">授权</button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {userLoginOut, getPhoto} from '@/utils/apiServer.js'
import Dialog from '@/components/vant-webapp/dialog/dialog';
export default {
  data () {
    return {
      bgImg: require('../../assets/images/bg.png'),
      info: {
        photoUrl: '',
        name: ''
      },
      popShow: false
    }
  },
  onLoad () {
    // const _this = this
    // wx.getSetting({
    //   success (res) {
    //     console.log('获取设置')
    //     console.log(res)
    //     if (!res.authSetting['scope.userInfo']) {
    //       console.log('开始验证')
    //       _this.popShow = true
    //     } else {
    //       wx.getUserInfo({
    //         success: function (result) {
    //           console.log(result)
    //           var userInfo = result.userInfo
    //           var avatarUrl = userInfo.avatarUrl
    //           _this.getPhotoUrl(avatarUrl)
    //         },
    //         fail (err) {
    //           console.log(err)
    //         }
    //       })
    //     }
    //   },
    //   fail (err) {
    //     console.log(err)
    //   }
    // })
  },
  onShow () {
    const _this = this
    this.getPhotoUrl()
    wx.getStorage({
      key: 'userInfo',
      success (res) {
        _this.info.name = res.data.name
      },
      fail () {
        wx.removeStorage({
          key: 'token',
          success () {
            wx.reLaunch({
              url: '../login/main'
            })
          },
          fail () {
            wx.reLaunch({
              url: '../login/main'
            })
          }
        })
      }
    })
  },
  methods: {
    onGotUserInfo (e) {
      this.info.photoUrl = e.mp.detail.userInfo.avatarUrl
      this.getPhotoUrl(this.info.photoUrl)
      this.popShow = false
    },
    onClose () {
      console.log('关闭了')
    },
    async getPhotoUrl (url) {
      try {
        let res = {}
        if (url) {
          res = await getPhoto({avatarUrl: url})
        } else {
          res = await getPhoto()
        }
        if (res.code === 0) {
          console.log(res)
          if (res.data.avatarUrl) {
            this.info.photoUrl = res.data.avatarUrl
          } else {
            this.popShow = true
          }
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    },
    loginOut () {
      Dialog.confirm({
        title: '',
        message: '确定退出当前账号吗？'
      }).then(async () => {
        try {
          const res = await userLoginOut()
          if (res.code === 0) {
            this.$notify({
              type: 'success',
              message: '退出成功'
            })
            wx.removeStorage({
              key: 'token',
              success (result) {
                wx.reLaunch({
                  url: '../login/main'
                })
              }
            })
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
    toInfo () {
      wx.navigateTo({
        url: './personInfo/main?avatarUrl=' + this.info.photoUrl
      })
    },
    updataPass () {
      wx.navigateTo({
        url: './updatePass/main'
      })
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
.myInfo{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .text{
    width: 100%;
    text-align: center;
    font-size: 0.32rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
  }
  .btn{
    padding: 0 0.7rem;
    button{
      width: 100%;
      background-color: #DE2910;
      border: none;
      outline: none;
      height: 0.9rem;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
  }
  .head{
    width: 100%;
    height: 4.65rem;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .title{
      height: 0.64rem;
      width: 70%;
      line-height: 0.64rem;
      position: absolute;
      top: 0.52rem;
      left: 0.32rem;
      font-size: 0.36rem;
      font-family: PingFang SC;
      font-weight: bold;
      color:rgba(255,255,255,1);
      z-index: 2;
    }
    .photo{
      width: 1.2rem;
      height: 1.9rem;
      position: absolute;
      top: 1.92rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      img{
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
      }
      span{
        width: 1.2rem;
        text-align: center;
        font-size: 0.36rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-top: 0.3rem;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  .content{
    position: absolute;
    top: 4.65rem;
    bottom: 0;
    left: 0.32rem;
    right: 0.39rem;
    .lis{
      height: 1.2rem;
      border-bottom: 0.02rem solid #eee;
      span{
        width: 0.44rem;
        height: 0.44rem;
        float: left;
        margin-top: 0.38rem;
        background-size: cover;
      }
      .info{
        background-image: url('../../assets/images/myInfo.png');
      }
      .pass{
        background-image: url('../../assets/images/passInfo.png');
      }
      .logout{
        background-image: url('../../assets/images/logout.png');
      }
      .tabName{
        width: 2rem;
        height: 100%;
        margin-left: 0.25rem;
        line-height: 1.2rem;
        font-size: 0.32rem;
        font-family:PingFang SC;
        font-weight:400;
        float: left;
      }
      .next{
        width: 0.13rem;
        height: 0.24rem;
        float: right;
        margin-top: 0.49rem;
        background-image: url('../../assets/images/toDetail.png');
        background-size: cover;
      }
    }
  }
}
</style>
