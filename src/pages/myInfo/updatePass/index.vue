<template>
  <div class="passWrap">
    <div class="oldPass">
      <input type="text" v-model="form.oldPassword" style="ime-mode: disabled;" placeholder="请输入原密码" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="showOld" @input="blur1">
      <input type="password" v-model="form.oldPassword" placeholder="请输入原密码" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="!showOld" @input="blur">
      <i :class="{'showOld': showOld}" @click="showOld = !showOld"></i>
    </div>
    <div class="newPass">
      <input type="text" v-model="form.newPassword" style="ime-mode: disabled;" placeholder="请输入新密码（6-18位）" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="showNew" @input="blur2">
      <input type="password" v-model="form.newPassword" placeholder="请输入新密码（6-18位）" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="!showNew" @input="blur">
      <i :class="{'showNew': showNew}" @click="showNew = !showNew"></i>
    </div>
    <div class="confirmPass">
      <input type="text" placeholder="请再次输入新密码" style="ime-mode: disabled;" v-model="form.confirmPassword" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="showConfirm" @input="blur3">
      <input type="password" placeholder="请再次输入新密码" v-model="form.confirmPassword" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;" v-if="!showConfirm" @input="blur">
      <i :class="{'showConfirm': showConfirm}" @click="showConfirm = !showConfirm"></i>
    </div>
    <button :class="{'isOk': isOk}" :disabled="!isOk" @click="updateData">确定修改</button>
    <van-notify id="van-notify" />
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import {updatePass} from '@/utils/apiServer.js'
import Dialog from '@/components/vant-webapp/dialog/dialog';
export default {
  data () {
    return {
      showNew: false,
      showConfirm: false,
      showOld: false,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      isOk: false
    }
  },
  methods: {
    blur1 (val) {
      let value = val.mp.detail.value;
      console.log(value);
      if (this.form.oldPassword && this.form.newPassword && this.form.confirmPassword) {
        this.isOk = true
      }
      console.log(escape(value).indexOf('%u'));
      if (escape(value).indexOf('%u') >= 0) {
        this.$notify({
          type: 'danger',
          message: '不可输入中文，请切换英文键盘'
        });
        let str = this.form.oldPassword;
        let i = str.length - 1;
        while (escape(str[i]).indexOf('%u') >= 0) {
          str = str.slice(0, str.length - 1);
          i--;
        }
        this.form.oldPassword = str;
      }
    },
    blur2 (val) {
      let value = val.mp.detail.value;
      if (this.form.oldPassword && this.form.newPassword && this.form.confirmPassword) {
        this.isOk = true
      }
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
    blur3 (val) {
      let value = val.mp.detail.value;
      if (this.form.oldPassword && this.form.newPassword && this.form.confirmPassword) {
        this.isOk = true
      }
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
    async updateData () {
      let reg = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/);
      if (!this.form.oldPassword) {
        this.$notify({
          type: 'danger',
          message: '原密码不可为空'
        })
        return false
      } else if (!this.form.newPassword) {
        this.$notify({
          type: 'danger',
          message: '新密码不可为空'
        })
        return false
      } else if (this.form.newPassword !== this.form.confirmPassword) {
        this.$notify({
          type: 'danger',
          message: '两次密码输入不一致，请重新输入'
        })
        return false
      } else if (this.form.newPassword.length < 6 || this.form.newPassword.length > 18) {
        this.$notify({
          type: 'danger',
          message: '请输入正确长度的密码'
        })
        return false
      } else if (!reg.test(this.form.newPassword)) {
        this.$notify({
          type: 'danger',
          message: '密码必须是数字、英文、特殊符号且必须包含数字及英文的6-18位字符'
        })
        return false;
      }
      try {
        const res = await updatePass({
          oldPassword: this.form.oldPassword,
          newPassword: this.form.newPassword
        })
        if (res.code === 0) {
          Dialog.alert({
            message: '密码修改成功，请重新登录'
          }).then(() => {
            wx.removeStorage({
              key: 'token',
              success (result) {
                wx.reLaunch({
                  url: '../../login/main'
                })
              }
            })
          });
        }
      } catch (err) {
        this.$notify({
          type: 'danger',
          message: err.message
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.passWrap{
  padding: 0 0.32rem;
  .oldPass{
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
    .showOld{
      height: 0.24rem;
      top: 0.48rem;
      background-image: url('../../../assets/images/hidePass.png');
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
    position: absolute;
    left: 0.32rem;
    right: 0.32rem;
    bottom: 4.6rem;
    height: 0.88rem;
    background-color: #DE2910;
    font-size: 0.36rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    opacity: 0.5;
    border-radius: 0.08rem;
  }
  .isOk{
    opacity: 1;
  }
}
</style>