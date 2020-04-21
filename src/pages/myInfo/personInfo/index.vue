<template>
  <div class="personInfo">
    <div class="lis">
      <span>我的账号</span>
      <i class="user">{{info.telephone}}</i>
    </div>
    <div class="lis">
      <span>所属机构</span>
      <i>{{info.orgName}}</i>
    </div>
    <div class="lis" @click="updatePhoto">
      <span>修改头像</span>
      <b></b>
      <img :src="photoUrl" alt="">
    </div>
    <div class="lis" @click="checkName">
      <span>真实姓名</span>
      <b></b>
      <i class="name">{{info.name}}</i>
    </div>
  </div>
</template>
<script>
import {updatePhoto} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      photoUrl: '',
      info: {}
    }
  },
  onLoad (options) {
    this.photoUrl = options.avatarUrl
  },
  onShow () {
    try {
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.info = userInfo
      }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async getPhotoUrl (url) {
      try {
        const res = await updatePhoto({avatarUrl: url})
        if (res.code === 0) {
          console.log(res)
          if (res.data.avatarUrl) {
            this.photoUrl = res.data.avatarUrl
          }
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    },
    updatePhoto () {
      const _this = this
      wx.chooseImage({
        success (res) {
          console.log(res)
          wx.getStorage({
            key: 'token',
            success (result) {
              let token = result.data
              wx.uploadFile({
                url: 'https://suji.learndar.com/api/mini/common/uploadFile',
                filePath: res.tempFilePaths[0],
                name: 'file',
                formData: {
                  'token': token
                },
                success (data) {
                  let obj = JSON.parse(data.data)
                  _this.getPhotoUrl(obj.fileUrl)
                }
              })
            }
          })
        },
        fail (e) {
          console.log(e)
        }
      })
    },
    checkName () {
      wx.navigateTo({
        url: '../updateName/main'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.personInfo{
  padding: 0 0.32rem;
  .lis{
    width: 100%;
    height: 1.2rem;
    border-bottom: 0.02rem solid #eee;
    span{
      float: left;
      height: 100%;
      line-height: 1.2rem;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
    i{
      font-style: normal;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight: 400;
      color:rgba(85,85,85,1);
      float: right;
      height: 1.2rem;
      line-height: 1.2rem;
    }
    .name{
      margin-right: 0.3rem;
    }
    img{
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.28rem;
      margin-top: 0.2rem;
      float: right;
      border-radius: 50%;
    }
    b{
      width: 0.13rem;
      height: 0.22rem;
      background-image: url('../../../assets/images/toDetail.png');
      background-size: cover;
      float: right;
      margin-top: 0.51rem;
    }
  }
}
</style>