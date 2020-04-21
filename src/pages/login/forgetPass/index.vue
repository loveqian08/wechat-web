<template>
  <div class="forgetPass">
    <div class="tel">
      <input type="number" v-model="form.telephone" placeholder="请输入手机号" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;">
    </div>
    <div class="smsCode">
      <input type="number" v-model="form.verifyCode" placeholder="请输入验证码" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;">
      <span class="line"></span>
      <div class="smsText" :class="{'disabled': isDisabled}" @click="sendSms">{{smsText}}</div>
    </div>
    <div class="newPass">
      <input type="text" v-model="form.newPassword" placeholder="请输入新密码（6-18位）" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="showNew" @input="myInput1">
      <input type="password" v-model="form.newPassword" placeholder="请输入新密码（6-18位）" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="!showNew">
      <i :class="{'showNew': showNew}" @click="showNew = !showNew"></i>
    </div>
    <div class="confirmPass">
      <input type="text" placeholder="请再次输入新密码" v-model="form.confirmPassword" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="showConfirm" @input="myInput2">
      <input type="password" placeholder="请再次输入新密码" v-model="form.confirmPassword" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="!showConfirm">
      <i :class="{'showConfirm': showConfirm}" @click="showConfirm = !showConfirm"></i>
    </div>
    <button @click="updatePass">确定修改</button>
    <van-notify id="van-notify" />
  </div>
</template>
<script>
import {checkCode, sendCode} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      smsText: '获取验证码',
      showNew: false,
      showConfirm: false,
      isDisabled: false,
      form: {
        telephone: '',
        verifyCode: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    myInput1 (val) {
      let value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        let str = this.form.newPassword;
        let i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.newPassword = str;
      }
    },
    myInput2 (val) {
      let value = val.mp.detail.value;
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        let str = this.form.confirmPassword;
        let i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.confirmPassword = str;
      }
    },
    async updatePass () {
      if (!this.form.telephone) {
        this.$notify({
          type: 'danger',
          message: '手机号不能为空'
        })
        return
      }
      if (!this.form.verifyCode) {
        this.$notify({
          type: 'danger',
          message: '验证码不能为空'
        })
        return
      }
      if (this.form.newPassword.length < 6 || this.form.confirmPassword.length > 18) {
        this.$notify({
          type: 'danger',
          message: '请输入6-18位密码'
        })
        return
      }
      if (this.form.newPassword !== this.form.confirmPassword) {
        this.$notify({
          type: 'danger',
          message: '两次密码输入不一致，请重新输入'
        })
        return
      }
      try {
        const res = await checkCode({
          telephone: this.form.telephone,
          verifyCode: this.form.verifyCode,
          password: this.form.newPassword
        })
        if (res.code === 0) {
          this.$notify({
            type: 'success',
            message: '密码修改成功,请重新登录'
          })
          wx.navigateBack({
            delta: 1
          })
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    },
    // async blur () {
    //   if (this.form.verifyCode) {
    //     try {
    //       const res = await checkCode({telephone: this.form.telephone, verifyCode: this.form.verifyCode})
    //       if (res.code === 0) {
    //         console.log('验证码可用')
    //       }
    //     } catch (e) {
    //       this.$notify({
    //         type: 'danger',
    //         message: e.message
    //       })
    //     }
    //   }
    // },
    async sendSms () {
      if (this.isDisabled) {
        return false
      } else {
        this.isDisabled = true
        let count = 60
        this.smsText = '重新发送' + count
        let timer = setInterval(() => {
          count--
          this.smsText = '重新发送' + count
          if (count <= 0) {
            clearInterval(timer)
            this.smsText = '获取验证码'
            this.isDisabled = false
          }
        }, 1000)
        try {
          const res = await sendCode({telephone: this.form.telephone, type: 2})
          if (res.code === 0) {
            console.log('发送成功')
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
}
</script>
<style lang="scss" scoped>
.forgetPass{
  background-color: #fff;
  padding: 0 0.32rem;
  .tel{
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
  .smsCode{
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
      position: absolute;
      left: 0;
      top: 0;
      right: 2rem;
    }
    .line{
      width: 0.02rem;
      height: 0.32rem;
      background-color: #ddd;
      position: absolute;
      top: 0.45rem;
      right: 1.81rem;
    }
    .smsText{
      height: 100%;
      line-height: 1.2rem;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(0,0,0,1);
      position: absolute;
      top: 0;
      right: 0;
    }
    .disabled{
      color: #eee;
    }
  }
  .newPass{
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
      background-image: url('../../../assets/images/showPass.png');
      background-size: cover;
    }
    .showNew{
      height: 0.24rem;
      top: 0.48rem;
      background-image: url('../../../assets/images/hidePass.png');
    }
  }
  .confirmPass{
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
      background-image: url('../../../assets/images/showPass.png');
      background-size: cover;
    }
    .showConfirm{
      height: 0.24rem;
      top: 0.48rem;
      background-image: url('../../../assets/images/hidePass.png');
    }
  }
  button{
    width: 100%;
    height: 0.88rem;
    outline: none;
    border: none;
    background-color: #DE2910;
    font-size: 0.36rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-top: 1.94rem;
  }
}
</style>