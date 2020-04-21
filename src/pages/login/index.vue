<template>
  <div class="loginWrap">
    <div class="head">
      <img :src="bgImg" alt="">
      <div class="title">党政办公学习平台</div>
    </div>
    <div class="main">
      <div class="loginForm">
        <div class="titName">登录</div>
        <div class="content">
          <div class='logo'></div>
          <div class="username">
            <input type="number" style="ime-mode: disabled;" :maxlength="11" placeholder="请输入账号" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-model="form.telephone" @input="input" @change="changeIpt">
          </div>
          <div class="password">
            <input type="password" style="ime-mode: disabled;" placeholder="请输入密码" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-model="form.password" v-if="!showPass">
            <input type="text" style="ime-mode: disabled;" placeholder="请输入密码" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-model="form.password" v-if="showPass" @input="myInput">
            <i :class="{'showPass': showPass}" @click="showPass = !showPass"></i>
          </div>
          <button :class="{'active': (form.telephone && form.password)}" @click="userLogin" :disabled="!form.telephone || !form.password">登录</button>
        </div>
      </div>
      <van-notify id="van-notify" />
      <div class="foot" @click="forgetPass">忘记密码？</div>
    </div>
  </div>
</template>
<script>
import {login} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      bgImg: require('../../assets/images/bg.png'),
      form: {
        telephone: '',
        password: ''
      },
      showPass: false,
      pathUrl: ''
    }
  },
  onLoad (options) {
    if (options.url) {
      console.log('进登录了')
      console.log(options)
      this.pathUrl = options.url
      console.log(this.pathUrl)
    }
  },
  methods: {
    changeIpt () {
      console.log(this.form.telephone)
    },
    input (val) {
      let value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        let str = this.form.password;
        let i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.password = str;
      }
    },
    myInput (val) {
      let value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        let str = this.form.telephone;
        let i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.telephone = str;
      }
    },
    forgetPass () {
      wx.navigateTo({
        url: './forgetPass/main'
      })
    },
    userLogin () {
      let reg = /^1[3|4|5|8][0-9]\d{4,8}$/
      if (!reg.test(this.form.telephone)) {
        this.$notify({
          type: 'danger',
          message: '请输入正确格式的手机号'
        })
        return false;
      }
      const _this = this
      wx.login({
        success: async (res) => {
          console.log(res)
          if (res.code) {
            let par = {
              telephone: _this.form.telephone,
              password: _this.form.password,
              wxCode: res.code
            }
            try {
              const result = await login(par)
              if (result.code === 0) {
                wx.setStorage({
                  key: 'token',
                  data: result.data.token
                })
                wx.setStorage({
                  key: 'userInfo',
                  data: result.data
                })
                if (_this.pathUrl) {
                  wx.switchTab({
                    url: _this.pathUrl
                  })
                } else {
                  wx.switchTab({
                    url: '../index/main'
                  })
                }
              }
            } catch (e) {
              this.$notify({
                type: 'success',
                message: e.message
              })
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.loginWrap{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
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
  }
  .main{
    position: absolute;
    top: 4.65rem;
    bottom: 0;
    left: 0;
    right: 0;
    .loginForm{
      height: 8.15rem;
      position: absolute;
      left: 0.5rem;
      right: 0.5rem;
      bottom: 3.13rem;
      z-index: 3;
      .titName{
        height: 0.47rem;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0.48rem;
        font-family: PingFang SC;
        font-weight: bold;
        color:rgba(255,255,255,1);
      }
      .content{
        width: 100%;
        padding: 0 0.28rem;
        box-sizing: border-box;
        height: 7.09rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 0.08rem 0.27rem 0.02rem rgba(25,27,30,0.1);
        border-radius: 0.1rem;
        position: absolute;
        left: 0;
        bottom: 0;
        .logo{
          width: 1rem;
          height: 0.99rem;
          margin: 0.7rem auto;
          background-image: url('../../assets/images/login.png');
          background-size: cover;
          margin-bottom: 0.41rem;
        }
        .username{
          height: 1.2rem;
          width: 100%;
          border-bottom: 0.01rem solid #eee;
          input{
            height: 100%;
            border: none;
            outline: none;
            font-size: 0.32rem;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(0,0,0,1);
          }
        }
        .password{
          height: 1.2rem;
          width: 100%;
          border-bottom: 0.01rem solid #eee;
          position: relative;
          input{
            height: 100%;
            border: none;
            outline: none;
            font-size: 0.32rem;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(0,0,0,1);
            width: 100%;
            padding-right: 0.9rem;
            box-sizing: border-box;
          }
          i{
            width: 0.46rem;
            height: 0.3rem;
            position: absolute;
            right: 0.12rem;
            top: 0.45rem;
            background-image: url('../../assets/images/showPass.png');
            background-size: cover;
          }
          .showPass{
            height: 0.24rem;
            top: 0.48rem;
            background-image: url('../../assets/images/hidePass.png');
          }
        }
        button{
          width: 100%;
          height: 0.88rem;
          border: none;
          outline: none;
          background:rgba(222,41,16,1);
          border-radius: 0.08rem;
          font-size: 0.36rem;
          font-family: PingFang SC;
          font-weight: 500;
          color:rgba(255,255,255,1);
          opacity: 0.5;
          margin-top: 1.1rem;
        }
        .active{
          opacity: 1;
        }
      }
    }
    .foot{
      width: 100%;
      font-size: 0.24rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(85,85,85,1);
      position: absolute;
      left: 0;
      bottom: 0.28rem;
      text-align: center;
    }
  }
}
</style>
